(ns meu-app.datomic.database
  (:use clojure.pprint)
  (:require [datomic.api :as d]
            [meu-app.datomic.schema :as ds]))

(def db-uri "datomic:dev://localhost:4334/config")

(defn open-connection []
  (d/create-database db-uri)
  (d/connect db-uri))

(defn delete-database []
  (d/delete-database db-uri))

(defn create-schema [conn schema]
  @(d/transact conn schema))

(defn all-books [db]
  (d/q '[:find  (pull ?entidade [*])
         :where [?entidade :book/title]] db))

