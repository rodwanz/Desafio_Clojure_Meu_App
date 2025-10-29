(ns meu-app.components.datomic
  (:require [meu-app.datomic.database :as database]
            [meu-app.datomic.schema :as schema]
            [com.stuartsierra.component :as component]))


(defrecord Datomic []
  component/Lifecycle

  (start [this]
    (println "Starting Datomic Component")
    (let [conn (database/open-connection)]
      (database/create-schema conn schema/schema)
      (assoc this :conn conn)))

  (stop [this]
    (println "Stopping Datomic component")
    (assoc this :datomic nil)))

(defn new-datomic []
  (->Datomic))
