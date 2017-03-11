(ns figwheel.connect.dev (:require [pokedex.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/pokedex.core.mount-root (apply js/pokedex.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'pokedex.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

