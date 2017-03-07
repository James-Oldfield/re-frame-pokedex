(ns pokedex.events
    (:require [re-frame.core :as re-frame]
              [ajax.core :refer [GET]]
              [pokedex.db :as db]))

(re-frame/reg-event-db
 :initialize-db
 (fn  [_ _]
   db/default-db))

;; Update the existing search value a new value
(re-frame/reg-event-db
  :update-search-term
  (fn [db [_ new-search-term]]
    (assoc db :search-term new-search-term)))

;; GET the pokedex data
(re-frame/reg-event-db
  :get-pokemon
  (fn [db _]
    (GET
      "http://pokeapi.co/api/v2/pokedex/2/"
      {:handler #(dispatch [:process-response %1])
       :error-handler #(dispatch [:bad-response %1])})
    (assoc db :pokemon-loading? true)))
