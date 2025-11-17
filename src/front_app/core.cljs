(ns front-app.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))

(defonce app-state (r/atom {:author ""
                            :book ""
                            :items []}))

(defn add-item []
      (let [{:keys [author book]} @app-state]
           (when (and (not-empty author) (not-empty book))
                 (-> (js/fetch "http://localhost:9999/posting-in-database"
                               (clj->js
                                 {:method "POST"
                                  :headers {"Content-Type" "application/json"}
                                  :body (js/JSON.stringify
                                          #js {:name author
                                               :book book})}))
                     (.then #(.-json %))
                     (.then (fn [response]
                                (js/console.log "Saved in backend:" response)))
                     (.catch #(js/console.error "Error:" %)))
                 (swap! app-state assoc :author "" :book ""))))


(defn reset []
      (reset! app-state {:author "" :book "" :items []}))

(defn app []
      (let [{:keys [author book items]} @app-state]
           [:div
            [:h2 "Book Registration"]
            [:input {:type "text"
                     :placeholder "Author"
                     :value author
                     :on-change #(swap! app-state assoc :author (.. % -target -value))}]
            [:input {:type "text"
                     :placeholder "Book"
                     :value book
                     :on-change #(swap! app-state assoc :book (.. % -target -value))}]
            [:div
             [:button {:on-click add-item} "Add"]
             [:button {:on-click reset
                       :style {:background-color "#dc3545"}} "Reset"]]
            [:ul
             (for [{:keys [author book]} items]
                  ^{:key (str author book)}
                  [:li (str author " - " book)])]]))

(defn ^:dev/after-load start []
      (rdom/render [app] (.getElementById js/document "app")))

(defn init []
      (start))
