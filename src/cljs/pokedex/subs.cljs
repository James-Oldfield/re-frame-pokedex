(ns pokedex.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame]
              [clojure.string :as s]))

(re-frame/reg-sub
 :name
 (fn [db]
   (:name db)))

(re-frame/reg-sub
  :search-term
  (fn [db]
   (:search-term db)))

(re-frame/reg-sub
  :pokemon
  (fn [db]
    (:pokemon db)))

;; Filter the pokemon set by search-term
(re-frame/reg-sub
  :matching-pokemon
  :<- [:pokemon]
  :<- [:search-term]
  (fn [[pokemon search-term] _]
    (filter
      #(s/includes? % search-term) pokemon)))
