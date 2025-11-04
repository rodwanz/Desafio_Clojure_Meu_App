(ns meu-app.finishing.finally
  (:require [clojure.test :refer :all]
            [clojure.string :as str]
            [com.stuartsierra.component :as component]
            [meu-app.components.system :as system]
            [clojure.edn :as edn]
            [cheshire.core :as json]))

(defn with-system [f]
  (let [sys (component/start (system/local-environment))]
    (try
      (f sys)
      (finally
        (component/stop sys)))))

(deftest meu-app-test
  (testing "GET /posting-in-database"
    (with-system
      (fn [component-result]
        (let [test-request (-> component-result :server :test-request)
              path "/posting-in-database"
              response (test-request :get path)
              body (:body response)]
          (is (str/includes? body "Checking the system")
              "Test completed successfully.")))))

  (testing "POST /posting-in-database"
    (with-system
      (fn [component-result]
        (let [test-request (-> component-result :server :test-request)
              post-path "/posting-in-database?name=Ambrosio&book=Simbolos-da-fé"
              response (test-request :post post-path)
              status (:status response)
              body   (json/parse-string (:body response) true)]
          (is (= 200 status) "Status achieved (OK).")
          (is (= "Data posted successfully!"
                 (:message body))
              "My app tested! "))))))





