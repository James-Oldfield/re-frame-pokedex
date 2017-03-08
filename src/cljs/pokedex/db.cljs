(ns pokedex.db)

(def default-db
  {:search-term ""
   :pokedex-loading? false
   :pokedex-failed? false
   :pokedex #{}})
