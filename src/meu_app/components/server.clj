(ns meu-app.components.server
  (:require [io.pedestal.http :as http]
            [io.pedestal.test :as test]
            [io.pedestal.interceptor :as i]
            [meu-app.routes]
            [com.stuartsierra.component :as component]))

(defonce server (atom nil))

(defn start-server [service-map]
  (reset! server (http/start (http/create-server service-map))))

(defn test-request [verb url]
  (test/response-for (::http/service-fn @server) verb url))

(defn stop-server []
  (when @server
    (http/stop @server)
    (reset! server nil)))

(defn restart-server [service-map]
  (stop-server)
  (start-server service-map))

(defrecord Server [database routes]
  component/Lifecycle

  (start [this]
    (println "Start server")
    (let [assoc-informad-database (fn [context]
                        (update context :request assoc :store (:store database)))
          db-interceptor {:name  :db-interceptor
                          :enter assoc-informad-database}
          service-map-base {::http/routes (:routes routes)
                            ::http/allowed-origins {:creds true :allowed-origins (constantly true)}
                            ::http/secure-headers {:content-security-policy-settings {:object-src "'none'"}}
                            ::http/host "localhost"
                            ::http/port   9999
                            ::http/type   :jetty
                            ::http/join?  false
                            ::http/enable-websockets? false
                            ::http/container-options {:h2c? true, :h2? false, :ssl? false}
                            ::http/level :warn}
          service-map (-> service-map-base
                          (http/default-interceptors)
                          (update ::http/interceptors conj (i/interceptor db-interceptor)))]

    ;(start-server)
    (try
      (start-server service-map)
      (println "Server Started successfully!")
      (catch Exception e
        (println "Error executing server start: " (.getMessage e))
        (println "Trying server restart..." (.getMessage e))
        (try
          (restart-server service-map)
          (println "Server Restarted successfully!")
          (catch Exception e (println "Error executing server restart: " (.getMessage e))))))
    (assoc this :test-request test-request)))

  (stop [this]
    (println "Stopping server!")
    (stop-server)
    (assoc this :test-request nil)))

(defn new-server []
  (map->Server {}))

