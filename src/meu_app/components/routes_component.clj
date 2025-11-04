(ns meu-app.components.routes-component
  (:require [meu-app.routes :as routes]
            [com.stuartsierra.component :as component]))

(defrecord Routes []
  component/Lifecycle

  (start [this]
    (println "Start routes component")
    (assoc this :routes routes/routes))

  (stop [this]
    (assoc this :routes nil)))

(defn new-routes []
  (->Routes))
