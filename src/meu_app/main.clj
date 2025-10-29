(ns meu-app.main
  (:require [com.stuartsierra.component :as component]
            [meu-app.components.system :as system,]))

(defn -main [& args]
  (println "This is my app! This application works as requested!")
  (component/start (system/local-environment)))
