(ns pokedex.views
 (:require [re-frame.core :refer [subscribe dispatch]]))

;; Represents the search input DOM node.
;; Dispatches the :update-search-term event to update the store's search-term value.
(defn search-input
  [{:keys [search-term]}]
  (fn []
    (pr (str "current search term: " @search-term))
    [:input {:id "search"
             :value @search-term
             :placeholder "enter pokemon here..."
             :on-change #(dispatch [:update-search-term (-> % .-target .-value)])}]))

(defn matching-pokemon-item
  [{:keys [name]}]
  [:li.matching-pokemon__pokemon
   name])

(defn matching-pokemon-wrapper
  [{:keys [matching-pokemon]}]
  (fn []
    (into [:ul.matching-pokemon__wrapper]
          (map matching-pokemon-item @matching-pokemon))))

(defn main-panel
  []
  (let [name (subscribe [:name])
        search-term (subscribe [:search-term])
        matching-pokemon (subscribe [:matching-pokemon])]
    (fn []
      [:div "Hello from " @name
       [:hr]
       [search-input
        {:search-term search-term}]
       [matching-pokemon-wrapper
        {:matching-pokemon matching-pokemon}]]))) 
