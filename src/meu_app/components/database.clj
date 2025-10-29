(ns meu-app.components.database
  (:require [com.stuartsierra.component :as component]))

(defrecord Database []
  component/Lifecycle

  (start [this]
    (println "Start database")
    (assoc this :reporting(atom {})))

  (stop [this]
    (println "Stop database")
    (assoc this :reporting nil)))

(defn new-database []
  (->Database))
