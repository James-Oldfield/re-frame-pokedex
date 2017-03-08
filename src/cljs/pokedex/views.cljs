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

;; Component for each individual pokemon in the list
(defn matching-pokemon-item
  [{:keys [entry_number pokemon_species]}]
  (let [name (:name pokemon_species)
        url (:url pokemon_species)]
    [:a {:class (create-class #{"list-group-item"
                                "list-group-item-action"
                                "justify-content-between"} true)
         :href "#"
         :on-click #(dispatch [:get-pokemon url])}
     [:span name]
     [:span (create-class #{"badge"
                            "badge-default"
                            "text-white"
                            "badge-pill"})
      (str "#" entry_number " ")]]))

;; Component for the top-level matching-pokemon wrapper
(defn matching-pokemon-wrapper
  [{:keys [matching-pokemon]}]
  (fn []
    (if (empty? @matching-pokemon)
      [:h2 "none found"]
      (into [:ul.list-group]
            (map matching-pokemon-item @matching-pokemon)))))

;; Component for the top-level matching-pokemon wrapper
(defn pokemon-modal
  [{:keys [name description]}]
  (pr "deets --  " name description)
  (fn []
    [:div {:class (create-class #{"modal"} true)
           :on-click #(dispatch [:close-modal])
           :style {:display "flex"
                   :flex-direction "column"
                   :padding "10%"
                   :background "rgba(12, 12, 12, 0.75)"
                   :color "white"
                   :cursor "pointer"
                   :align-items "center"
                   :justify-content "center"}}
     [:h1 name]
     [:p description]]))

;; Main top-level react app div to mount to
(defn main-panel
  []
  (let [search-term (subscribe [:search-term])
        loading? (subscribe [:pokedex-loading?])
        active-pokemon (subscribe [:active-pokemon])
        matching-pokemon (subscribe [:matching-pokemon])]
    (fn []
      [:div (create-class #{"container"})
       [:h1 "re-frame pokedex"]
       [:hr]
       [search-input
        {:search-term search-term}]
       (pr "active poke ?? " @active-pokemon)
       (if @active-pokemon
         (let [{name :name
                description :description} (:pokemon_species @active-pokemon)]
           [pokemon-modal {:name name
                           :description description}])
         nil)
       (if @loading?
         [:p "pokemon loading..."]
         [matching-pokemon-wrapper
          {:matching-pokemon matching-pokemon}])])))
