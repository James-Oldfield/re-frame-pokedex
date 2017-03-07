(ns pokedex.events
    (:require [re-frame.core :as re-frame]
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
