(ns front-app.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))

(defonce app-state (r/atom {:autor ""
                            :livro ""
                            :itens []}))

(defn add-item []
      (let [{:keys [author book]} @app-state]
           (when (and (not-empty author) (not-empty book))
                 (swap! app-state update :items conj {:autor author :book book})
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
