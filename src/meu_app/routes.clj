(ns meu-app.routes
  (:require [io.pedestal.http.route :as route]
            [cheshire.core :as json]
            [datomic.api :as d])
  (:import (java.util UUID)))

(defn start-function [request]
  {:status 200 :body (str "Flowing!" (get-in request [:json-params :name]))})

(defn mapping-posting [uuid name book]
  {:id uuid :name name :book book})

(defn posting [request]
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body (json/generate-string
           {:message "Data posted successfully!"
            :params (:json-params request)})})

(defn posting-database [request]
  (let [conn (:conn (:datomic request))
        name (get-in request [:json-params :name])
        book (get-in request [:json-params :book])]

    (let [tx @(d/transact conn
                          [{:book/title book
                            :book/autor name}])
          entity-id (-> tx :tempids vals first)]

      {:status 200
       :headers {"Content-Type" "application/json"}
       :body (json/generate-string
               {:message "Saved successfully!"
                :entity-id entity-id
                :data {:name name :book book}})})))


(defn remove-posting [request]
  (let [conn (:conn (:datomic request))
        id-str (get-in request [:path-params :id])
        eid (Long/parseLong id-str)]

    @(d/transact conn [[:db/retractEntity eid]])

    {:status 200
     :headers {"Content-Type" "application/json"}
     :body (json/generate-string {:message "Removed successfully!"})}))


(def routes (route/expand-routes
              #{["/start" :get start-function :route-name :start]
                ["/posting-in-database" :post posting-database :route-name :posting-database]
                ["/posting-in-database" :get posting :route-name :posting]
                ["/books/:id" :delete remove-posting :route-name :remove-posting]}))




