(ns meu-app.components.system
  (:require [meu-app.components.server :as server]
            [meu-app.components.database :as database]
            [meu-app.components.routes-component :as routes]
            [meu-app.components.datomic :as datomic]
            [com.stuartsierra.component :as component]
            [clojure.pprint :refer [pprint]]))

(defn local-environment []
  (component/system-map
    :database (database/new-database)
    :datomic  (datomic/new-datomic)
    :routes   (routes/new-routes)
    :server   (component/using (server/new-server) [:database :datomic :routes])))

(defn test-environment []
  (component/system-map
    :database (database/new-database)
    :datomic  (datomic/new-datomic)
    :routes   (routes/new-routes)
    :server   (component/using (server/new-server) [:database :datomic :routes])))

