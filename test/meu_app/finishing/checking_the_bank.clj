(ns meu-app.finishing.checking-the-bank
  (:require [clojure.test :refer :all]
            [com.stuartsierra.component]
            [meu-app.datomic.database :as database]
            [meu-app.datomic.schema :as schema]))

(deftest ^:datomic create-and-fetch-all-and-delete-ids-test
  (testing "Creating, searching, and cleaning entities in the Datomic database."
    (let [conn (database/open-connection)]
      (is conn "Connection valid!")
      (database/create-schema conn schema/schema)
      (is true "Schema successfully applied."))))
