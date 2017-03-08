(ns pokedex.views
  (:require [re-frame.core :refer [subscribe dispatch]]
            [clojure.string :as s]))

;; Represents the search input DOM node.
;; Dispatches the :update-search-term event to update the store's search-term value.
(defn search-input
  [{:keys [search-term]}]
  (fn []
    (pr (str "current search term: " @search-term))
    [:div {:class (s/join " " ["input-group"])}
     [:input {:id "search"
              :value @search-term
              :class (s/join " " ["form-control"])
              :placeholder "enter pokemon here..."
              :on-change #(dispatch [:update-search-term (-> % .-target .-value)])}]]))

(defn matching-pokemon-item
  [{:keys [entry_number pokemon_species]}]
  [:li {:class (s/join " " ["list-group-item"
                            "justify-content-between"])}
   (:name pokemon_species)
   [:span {:class (s/join " " ["bagde"
                               "badge-default"
                               "text-white"
                               "badge-pill"])}
    (str "#" entry_number " ")]])


(defn matching-pokemon-wrapper
  [{:keys [matching-pokemon]}]
  (fn []
    (if (empty? @matching-pokemon)
      [:h2 "none found"]
      (into [:ul.list-group]
            (map matching-pokemon-item @matching-pokemon)))))

(defn main-panel
  []
  (let [search-term (subscribe [:search-term])
        loading? (subscribe [:pokemon-loading?])
        matching-pokemon (subscribe [:matching-pokemon])]
    (fn []
      [:div {:class (s/join " " ["container"])}
       [:h1 "re-frame pokedex"]
       [:hr]
       [search-input
        {:search-term search-term}]
       (if @loading?
         [:p "pokemon loading..."]
         [matching-pokemon-wrapper
          {:matching-pokemon matching-pokemon}])])))
