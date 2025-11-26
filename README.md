# 📚 Book Registration --- Fullstack Clojure + ClojureScript

A complete project demonstrating integration between:

- **Frontend:** ClojureScript + Reagent
- **Backend:** Clojure + Pedestal

- **Storage:** In-memory Atom + optional Datomic component

- **Architecture:** Stuart Sierra Component

The user registers **Author** and **Book**, and the data is sent to the backend and stored.

------------------------------------------------------------------------

## ✨ Features

- Simple interface for registering books
- Data sending via `fetch` (JSON)
- Pedestal backend with REST routes
- In-memory storage with `atom`
- Removal via DELETE

- Fully functional Datomic component

- Modular system with *Component Architecture*

------------------------------------------------------------------------

## 🧱 Project Structure

project/

├── front-app/

│ └── core.cljs # Reagent Frontend

│

├── meu-app/

│ ├── main.clj # Entry point

│ ├── routes.clj # Pedestal Routes

│ ├── components/
│ │ ├── server.clj # Pedestal Server
│ │ ├── routes-component.clj
│ │ ├── database.clj # In-memory Atom
│ │ ├── datomic.clj # Datomic Component
│ │ └── system.clj # System Setup
│ │

│ ├── datomic/
│ │ ├── database.clj # Datomic Utility Functions
│ │ └── schema.clj # Datomic Schema
│ │

│ └── posting/
│ ├── model.clj # Data Model

│ └── launching-books.clj

│

└── README.md

------------------------------------------------------------------------

# 🖥️ Frontend (ClojureScript + Reagent)

### Main file: `front-app.core`

### Main responsibilities

- Manage state via `r/atom`

- Author and book inputs
- Send POST to the backend via `fetch`
- Clear fields after sending
- Render interface in HTML

### Snippet of sending to the backend

``` clojure
(defn add-item []
      (let [{:keys [author book]} @app-state]
           (when (and (not-empty author) (not-empty book))
                 (-> (js/fetch "http://localhost:9999/posting-in-database"
                               (clj->js
                                 {:method "POST"
                                  :headers {"Content-Type" "application/json"}
                                  :body (js/JSON.stringify
                                          #js {:name author
                                               :book book})}))
                     (.then #(.-json %))
                     (.then (fn [response]
                                (js/console.log "Saved in backend:" response)))
                     (.catch #(js/console.error "Error:" %)))
                 (swap! app-state assoc :author "" :book "")))))}))
```

------------------------------------------------------------------------

# 🧩 Backend (Clojure + Pedestal)

## 🚏 Routes (`my-app.routes`)

### Available Endpoints

Route Method Description

-------- ---------------------------- -------------------

GET `/start` Simple Test

POST `/posting-in-database` Saves book

GET `/posting-in-database` Auxiliary Endpoint

DELETE `/posting-in-database/:id` Removes book

### Saving Data

``` clojure
(defn posting-database [request]
  (let [conn (:conn (:datomic request))
        name (get-in request [:json-params :name])
        book (get-in request [:json-params :book])]

    (let [tx @(d/transact conn
                          [{:book/title book
                            :book/autor name}])
          entity-id (-> tx :tempids vals first)]

      {:status 200
       :headers {"Content-Type" "application/json"}
       :body (json/generate-string
               {:message "Saved successfully!"
                :entity-id entity-id
                :data {:name name :book book}})})))

```

------------------------------------------------------------------------

# 🧱 Components (Stuart Sierra Component)

## 🗄️ `database`

- In-memory database using `atom`

- Created when the system starts

## 🗃️ `datomic`

- Opens a Datomic connection
- Applies schema automatically

## 🌐 `routes-component`

- Exposes Pedestal routes as a component

## 🚀 `server`

- Configures and starts the Pedestal server
- Injects `store` into the request via interceptor

## 🔧 `system`

- Assemble all components:

``` clojure
(component/system-map 
:database (database/new-database) 
:datomic (datomic/new-datomic) 
:routes (routes/new-routes) 
:server (component/using (server/new-server) 
[:database :datomic :routes]))
```

------------------------------------------------------------------------

# 🗃️ Datomic

## 🔤 Schema (`my-app.datomic.schema`)

``` clojure
[{:db/ident :book/title :db/valueType :db.type/string ...} 
{:db/ident :book/author :db/valueType :db.type/string ...}]
```

## 📥 Book insertion (`model/new-book`)

``` clojure
{:book/title title

:book/autor author}
```

------------------------------------------------------------------------

# ▶️ How to run

## **1. Start the backend**

 This is being executed (Run -main - my-app.main) directly on the system


Server available at:

http://localhost:9999

------------------------------------------------------------------------

## **2. Start the frontend (Shadow-CLJS example)**

``` sh
npm install
npx shadow-cljs watch app
```

Open:

http://localhost:3000

------------------------------------------------------------------------

# 🔄 Complete Flow

1. User fills in "Author" and "Book"
2. Frontend sends JSON to the backend
3. Backend creates UUID and stores it in the database in memory
4. Returns JSON confirming the operation
5. Frontend
