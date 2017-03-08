(ns pokedex.views
  (:require [re-frame.core :refer [subscribe dispatch]]
            [pokedex.utils :refer [create-class]]))

;; Represents the search input DOM node.
;; Dispatches the :update-search-term event to update the store's search-term value.
(defn search-input
  [{:keys [search-term]}]
  (fn []
    (pr (str "current search term: " @search-term))
    [:div (create-class #{"input-group"})
     [:input {:id "search"
              :value @search-term
              :class (create-class #{"form-control"} true)
              :placeholder "enter pokemon here..."
              :on-change #(dispatch [:update-search-term (-> % .-target .-value)])}]]))

(defn matching-pokemon-item
  [{:keys [entry_number pokemon_species]}]
  [:li (create-class #{"list-group-item"
                       "justify-content-between"})
   (:name pokemon_species)
   [:span (create-class #{"badge"
                          "badge-default"
                          "text-white"
                          "badge-pill"})]
   (str "#" entry_number " ")])


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
        loading? (subscribe [:pokedex-loading?])
        matching-pokemon (subscribe [:matching-pokemon])]
    (fn []
      [:div (create-class #{"container"})
       [:h1 "re-frame pokedex"]
       [:hr]
       [search-input
        {:search-term search-term}]
       (if @loading?
         [:p "pokemon loading..."]
         [matching-pokemon-wrapper
          {:matching-pokemon matching-pokemon}])])))
