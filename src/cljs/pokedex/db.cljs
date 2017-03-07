(ns pokedex.db)

(def default-db
  {:name "re-frame"
   :search-term ""
   :pokemon-loading?
   :pokemon-failed?
   :pokemon #{}})
