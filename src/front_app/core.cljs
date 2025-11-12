(ns front-app.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))

(defonce app-state (r/atom {:autor ""
                            :livro ""
                            :itens []}))

(defn adicionar-item []
      (let [{:keys [autor livro]} @app-state]
           (when (and (not-empty autor) (not-empty livro))
                 (swap! app-state update :itens conj {:autor autor :livro livro})
                 (swap! app-state assoc :autor "" :livro ""))))

(defn resetar []
      (reset! app-state {:autor "" :livro "" :itens []}))

(defn app []
      (let [{:keys [autor livro itens]} @app-state]
           [:div
            [:h2 "Cadastro de Livros"]
            [:input {:type "text"
                     :placeholder "Autor"
                     :value autor
                     :on-change #(swap! app-state assoc :autor (.. % -target -value))}]
            [:input {:type "text"
                     :placeholder "Livro"
                     :value livro
                     :on-change #(swap! app-state assoc :livro (.. % -target -value))}]
            [:div
             [:button {:on-click adicionar-item} "Adicionar"]
             [:button {:on-click resetar
                       :style {:background-color "#dc3545"}} "Resetar"]]
            [:ul
             (for [{:keys [autor livro]} itens]
                  ^{:key (str autor livro)}
                  [:li (str autor " - " livro)])]]))

(defn ^:dev/after-load start []
      (rdom/render [app] (.getElementById js/document "app")))

(defn init []
      (start))
