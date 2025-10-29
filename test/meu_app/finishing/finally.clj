(ns meu-app.finishing.finally
  (:require [clojure.test :refer :all]
            [clojure.string :as str]
            [com.stuartsierra.component :as component]
            [meu-app.components.system :as system]))

(deftest meu-app-test
  (testing "Starting test"
    (let [component-result (component/start (system/local-environment))
          test-request (-> component-result :server :test-request)
          path "/posting-in-database"
          response (test-request :get path)
          body (:body response)]
      (is (str/includes? body "Checking the system"))
      (component/stop component-result))))

;(test-request :get "/posting-in-database")
;(test-request :post "/posting-in-database?name=Correndo&book=quase")
;(test-request :post "/posting-in-database?name=Ambrosio&book=Simbolos-da-fé")
;(test-request :post "/posting-in-database?name=Agostinho&book=Livre-Arbitrio")
;(clojure.edn/read-string (:body (test-request :get "/posting-in-database")))