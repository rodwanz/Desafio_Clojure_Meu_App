(ns meu-app.finishing.checking-the-bank
  (:require [clojure.test :refer :all]
            [com.stuartsierra.component]
            [meu-app.datomic.database :as database]
            [meu-app.datomic.schema :as schema]))

(deftest ^:datomic create-and-fetch-all-and-delete-ids-test
  (let [_ (datomic.database/create-database datomic.database/local-uri datomic.config/db-name-tasks)
        conn (datomic.database/open-connection datomic.database/local-uri datomic.config/db-name-tasks)
        _ (datomic.database/create-schema conn datomic.schema/schema)
        task {:task/id (UUID/randomUUID) :task/nome "Refactor code" :task/status :pending}
        _ (datomic.task/upsert-one! conn task)
        tasks (datomic.task/fetch-all! (datomic.config/db! conn))
        ids (map #(:task/id %) tasks)
        _ (datomic.task/delete-ids! conn ids)
        no-tasks (datomic.task/fetch-all! (datomic.config/db! conn))]
    (is (not (empty? tasks)))
    (is (empty? no-tasks))))