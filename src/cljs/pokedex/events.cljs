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
  :get-pokemon
  (fn [{db :db} _]
    {:db (assoc db :pokemon-loading? true)
     :http-xhrio {:method :get
                  :uri "http://pokeapi.co/api/v2/pokedex/2/"
                  :timeout 8000
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success [:handle-http-success]
                  :on-failure [:handle-http-error]}}))

;; Handle http success
(re-frame/reg-event-db
  :handle-http-success
  (fn [db [_ response]]
    (-> db
        (assoc :pokemon-loading? false
               :pokemon-loading-failed? false
               :pokemon (:pokemon_entries response)))))

;; Handle http errors
(re-frame/reg-event-db
  :handle-http-error
  (fn [db [_ response]]
    (pr "fail" response)
    (-> db
        (assoc :pokemon-loading? false
               :pokemon-loading-failed? true))))
