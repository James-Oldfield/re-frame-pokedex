(ns pokedex.events
  (:require [re-frame.core :as re-frame]
            [ajax.core :as ajax]
            [day8.re-frame.http-fx]  
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

(re-frame/reg-event-fx
  :get-pokedex
  (fn [{db :db} _]
    {:db (assoc db :pokedex-loading? true)
     :http-xhrio {:method :get
                  :uri "http://pokeapi.co/api/v2/pokedex/2/"
                  :timeout 8000
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success [:handle-pokedex-success]
                  :on-failure [:handle-pokedex-error]}}))

;; Handle http success
(re-frame/reg-event-db
  :handle-pokedex-success
  (fn [db [_ response]]
    (-> db
        (assoc :pokedex-loading? false
               :pokedex-failed? false
               :pokedex (:pokemon_entries response)))))

;; Handle http errors
(re-frame/reg-event-db
  :handle-pokedex-error
  (fn [db [_ response]]
    (pr "fail" response)
    (-> db
        (assoc :pokedex-loading? false
               :pokedex-loading-failed? true))))
