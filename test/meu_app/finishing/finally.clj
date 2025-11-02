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
          (component/stop component-result)
      (testing "Posting books"
        (let [component-result (component/start (system/local-environment))
              test-request (-> component-result :server :test-request)
              post-path "/posting-in-database?name=Ambrosio&book=Simbolos-da-fé"
              post-resp (-> :post (test-request :post post-path))
              post-resp-body (-> post-resp :body clojure.edn/read-string)
              post-resp-status (post-resp :status)]
          (is (= (:message post-resp-body) "Book successfully registered!"))
          (is (= 200 post-resp-status))
          (component/stop component-result))))))



