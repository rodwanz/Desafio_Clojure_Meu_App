(ns meu-app.datomic.schema
  (:require [datomic.api :as d]))

(def schema [{:db/ident       :book/title
              :db/valueType   :db.type/string
              :db/cardinality :db.cardinality/one
              :db/doc         "Title Book"}
             {:db/ident       :book/autor
              :db/valueType   :db.type/string
              :db/cardinality :db.cardinality/one
              :db/doc         "Identifying the Author's Name"}])
