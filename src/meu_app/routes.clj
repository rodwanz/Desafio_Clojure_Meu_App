(ns meu-app.routes
  (:require [io.pedestal.http.route :as route])
  (:import (java.util UUID)))

(defn start-function [request]
  {:status 200 :body (str "Flowing!" (get-in request [:query-params :name]))})

(defn mapping-posting [uuid name book]
  {:id uuid :name name :book book})

(defn posting [request]
  ({:status 200 :body @(:reporting request)}))

(defn posting-database [request]
  (let [uuid (java.util.UUID/randomUUID)
        name (get-in request [:query-params :name])
        book (get-in request [:query-params :book])
        informed-database (mapping-posting uuid name book)
        reporting (:reporting request)]
    (swap! reporting assoc uuid informed-database)
    {:status 200 :body {:message "Data posted successfully!"
                        :informed-database informed-database}}))

(defn remove-posting [request]
  (let [reporting (:reporting request)
        publication-id (get-in request [:path-params :id])
        publication-id-uuid (java.util.UUID/fromString publication-id)]
    (swap! reporting dissoc publication-id-uuid)
    {:status 200 :body {:message "Successfully removed!"}}))

(def routes (route/expand-routes
              #{["/start" :get start-function :route-name :start]
                ["/posting-in-database" :post posting-database :route-name :posting-database]
                ["/posting-in-database" :get posting :route-name :posting]
                ["/posting-in-database" :delete remove-posting :route-name :remove-posting]}))




