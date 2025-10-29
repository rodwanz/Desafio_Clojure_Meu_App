(ns meu-app.posting.launching-books
  (:use clojure.pprint)
  (:require [datomic.api :as d]
            [meu-app.datomic.database :as dd]
            [meu-app.posting.model :as model]
            [meu-app.datomic.schema :as ds]))

(def conn (dd/open-connection))

@(d/transact conn ds/schema)

(let [physical-edition (model/new-book "Physics is for the few", "/Georges Lemaître")
      quantum-physics (model/new-book "Much more than meets the eye", "/Georges Lemaître")
      applied-mathematics {:book/title "Still have something to apply"}]
  (pprint @(d/transact conn [physical-edition, quantum-physics, applied-mathematics])))

(pprint (dd/all-books (d/db conn)))


