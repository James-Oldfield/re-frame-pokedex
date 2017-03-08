(ns pokedex.utils
  (:require [clojure.string :as s]))

(defn create-class
  ([coll just-value-flag]
   (s/join " " coll))
  ([coll]
   {:class (create-class coll true)}))
