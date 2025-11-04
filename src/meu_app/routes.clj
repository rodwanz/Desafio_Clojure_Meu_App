(ns meu-app.routes
  (:require [io.pedestal.http.route :as route]
            [cheshire.core :as json])
  (:import (java.util UUID)))

(defn start-function [request]
  {:status 200 :body (str "Flowing!" (get-in request [:query-params :name]))})

(defn mapping-posting [uuid name book]
  {:id uuid :name name :book book})

(defn posting [request]
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body (json/generate-string
           {:message "Data posted successfully!"
            :params (:query-params request)})})

(defn posting-database [request]
  (let [uuid (java.util.UUID/randomUUID)
        name (get-in request [:query-params :name])
        book (get-in request [:query-params :book])
        informed-database (mapping-posting uuid name book)
        store (:store request)]
    (swap! store assoc uuid informed-database)
    {:status 200
     :headers {"Content-Type" "application/json"}
     :body (json/generate-string
            {:message "Data posted successfully!"
             :informed-database informed-database})}))

(defn remove-posting [request]
  (let [store (:store request)
        publication-id (get-in request [:path-params :id])
        publication-id-uuid (java.util.UUID/fromString publication-id)]
    (swap! store dissoc publication-id-uuid)
    {:status 200
     :headers {"Content-Type" "application/json"}
     :body (json/generate-string
            {:message "Successfully removed!"})}))

(def routes (route/expand-routes
              #{["/start" :get start-function :route-name :start]
                ["/posting-in-database" :post posting-database :route-name :posting-database]
                ["/posting-in-database" :get posting :route-name :posting]
                ["/posting-in-database/:id" :delete remove-posting :route-name :remove-posting]}))




