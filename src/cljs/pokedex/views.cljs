(ns pokedex.views
 (:require [re-frame.core :refer [subscribe dispatch]]))

;; Represents the search input DOM node.
;; Dispatches the :update-search-term event to update the store's search-term value.
(defn search-input
  []
  (let [search-term (subscribe [:search-term])]
    (fn []
      (pr @search-term)
      [:input {:id "search"
               :value @search-term
               :placeholder "enter pokemon here..."
               :on-change #(dispatch [:update-search-term (-> % .-target .-value)])}])))

(defn main-panel
  []
  (let [name (subscribe [:name])]
    (fn []
      [:div "Hello from " @name
       [:hr]
       [search-input]])))
