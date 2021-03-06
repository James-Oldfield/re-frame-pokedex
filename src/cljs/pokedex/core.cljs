(ns pokedex.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [pokedex.events]
            [pokedex.subs]
            [pokedex.views :as views]
            [pokedex.config :as config]))


(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (re-frame/dispatch-sync [:initialize-db])
  (re-frame/dispatch-sync [:get-pokedex])
  (dev-setup)
  (mount-root))
