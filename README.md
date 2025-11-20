# 📚 Book Registration --- Fullstack Clojure + ClojureScript

Um projeto completo demonstrando integração entre:

-   **Frontend:** ClojureScript + Reagent\
-   **Backend:** Clojure + Pedestal\
-   **Armazenamento:** Atom em memória + componente opcional Datomic\
-   **Arquitetura:** Stuart Sierra Component

O usuário registra **Autor** e **Livro**, e os dados são enviados ao
backend e armazenados.

------------------------------------------------------------------------

## ✨ Funcionalidades

-   Interface simples para cadastrar livros\
-   Envio de dados via `fetch` (JSON)\
-   Backend Pedestal com rotas REST\
-   Armazenamento em memória com `atom`\
-   Remoção via DELETE\
-   Componente Datomic totalmente funcional\
-   Sistema modular com *Component Architecture*

------------------------------------------------------------------------

## 🧱 Estrutura do Projeto

    project/
     ├── front-app/
     │    └── core.cljs              # Frontend Reagent
     │
     ├── meu-app/
     │    ├── main.clj               # Entry point
     │    ├── routes.clj             # Rotas Pedestal
     │    ├── components/
     │    │     ├── server.clj       # Servidor Pedestal
     │    │     ├── routes-component.clj
     │    │     ├── database.clj     # Atom em memória
     │    │     ├── datomic.clj      # Componente Datomic
     │    │     └── system.clj       # Montagem do sistema
     │    │
     │    ├── datomic/
     │    │     ├── database.clj     # Funções utilitárias Datomic
     │    │     └── schema.clj       # Schema Datomic
     │    │
     │    └── posting/
     │          ├── model.clj        # Modelo de dados
     │          └── launching-books.clj
     │
     └── README.md

------------------------------------------------------------------------

# 🖥️ Frontend (ClojureScript + Reagent)

### Arquivo principal: `front-app.core`

### Principais responsabilidades

-   Gerenciar estado via `r/atom`
-   Inputs de autor e livro
-   Enviar POST ao backend via `fetch`
-   Limpar campos após envio
-   Renderizar interface no HTML

### Trecho de envio ao backend

``` clojure
(js/fetch "http://localhost:9999/posting-in-database"
  (clj->js {:method "POST"
            :headers {"Content-Type" "application/json"}
            :body (js/JSON.stringify
                     #js {:name author :book book})}))
```

------------------------------------------------------------------------

# 🧩 Backend (Clojure + Pedestal)

## 🚏 Rotas (`meu-app.routes`)

### Endpoints disponíveis

  Método   Rota                         Descrição
  -------- ---------------------------- -------------------
  GET      `/start`                     Teste simples
  POST     `/posting-in-database`       Salva livro
  GET      `/posting-in-database`       Endpoint auxiliar
  DELETE   `/posting-in-database/:id`   Remove livro

### Salvando dados

``` clojure
(defn posting-database [request]
  (let [uuid (UUID/randomUUID)
        name (get-in request [:json-params :name])
        book (get-in request [:json-params :book])]
    (swap! store assoc uuid {:id uuid :name name :book book})
    {:status 200 :body ...}))
```

------------------------------------------------------------------------

# 🧱 Componentes (Stuart Sierra Component)

## 🗄️ `database`

-   Banco em memória usando `atom`
-   Criado ao iniciar o sistema

## 🗃️ `datomic`

-   Abre conexão Datomic
-   Aplica schema automaticamente

## 🌐 `routes-component`

-   Expõe rotas Pedestal como componente

## 🚀 `server`

-   Configura e inicia o servidor Pedestal
-   Injeta `store` dentro da request via interceptor

## 🔧 `system`

-   Monta todos os componentes:

``` clojure
(component/system-map
  :database (database/new-database)
  :datomic  (datomic/new-datomic)
  :routes   (routes/new-routes)
  :server   (component/using (server/new-server)
                             [:database :datomic :routes]))
```

------------------------------------------------------------------------

# 🗃️ Datomic

## 🔤 Schema (`meu-app.datomic.schema`)

``` clojure
[{:db/ident :book/title :db/valueType :db.type/string ...}
 {:db/ident :book/autor :db/valueType :db.type/string ...}]
```

## 📥 Inserção de livros (`model/new-book`)

``` clojure
{:book/title title
 :book/autor author}
```

------------------------------------------------------------------------

# ▶️ Como executar

## **1. Iniciar o backend**

``` 
Esta sendo executado (Run -main - meu-app.main) direto no sistema
```

Servidor disponível em:

    http://localhost:9999

------------------------------------------------------------------------

## **2. Iniciar o frontend (Shadow-CLJS exemplo)**

``` sh
npm install
npx shadow-cljs watch app
```

Abra:

    http://localhost:3000

------------------------------------------------------------------------

# 🔄 Fluxo completo

1.  Usuário preenche "Autor" e "Livro"
2.  Frontend envia JSON ao backend
3.  Backend cria UUID e armazena no banco em memória
4.  Retorna JSON confirmando operação
5.  Frontend exibe no console

------------------------------------------------------------------------


# 📜 Licença

MIT --- livre para uso.
