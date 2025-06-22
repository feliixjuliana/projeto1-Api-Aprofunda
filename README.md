Certo\! Com base nas informações fornecidas e nas funcionalidades desenvolvidas, aqui está um `README.md` completo e bem estruturado para o seu repositório `projeto1-Api-Aprofunda`.

-----

# API de Gerenciamento de Tarefas

-----

Este repositório contém uma **API RESTful simples para gerenciamento de tarefas**, desenvolvida como parte da atividade `Projeto1-Api-Aprofunda`. A API permite realizar operações CRUD (Criar, Ler, Atualizar, Deletar) em tarefas, utilizando um array em memória para armazenamento dos dados.

## 🚀 Funcionalidades

A API oferece os seguintes endpoints para interação com as tarefas:

  * **`GET /tasks`**: Lista todas as tarefas disponíveis.
  * **`GET /tasks/:id`**: Retorna os detalhes de uma tarefa específica, identificada pelo seu `id`.
  * **`POST /tasks`**: Cria uma nova tarefa.
  * **`PUT /tasks/:id`**: Atualiza completamente uma tarefa existente, identificada pelo seu `id`. O corpo da requisição deve conter todos os dados da tarefa.
  * **`DELETE /tasks/:id`**: Deleta uma tarefa específica, identificada pelo seu `id`.

## 🛠️ Conteúdo e Tecnologias

O projeto foi estruturado com base nos seguintes conceitos e ferramentas:

  * **Node.js**: Ambiente de execução JavaScript.
  * **Express.js**: Framework web para Node.js, utilizado para configurar o servidor e as rotas.
  * **Dados em Memória**: As tarefas são armazenadas em um array de objetos JavaScript, sem persistência em banco de dados. Isso simula o comportamento de uma API para fins de aprendizado.
  * **Estrutura de Rotas**: Organização das diferentes operações HTTP (GET, POST, PUT, DELETE) em rotas bem definidas.
  * **Testes com Thunder Client/Postman**: As funcionalidades da API foram testadas utilizando clientes HTTP como Thunder Client ou Postman.


## ▶️ Como Rodar as APIs em sua máquina local:

1.  **Clone o Repositório:**
    ```bash
    git clone https://github.com/feliixjuliana/projeto1-Api-Aprofunda.git
    ```
2.  **Acesse a Pasta da API:**
    ```bash
    cd projeto1-Api-Aprofunda/API
    ```
3.  **Instale as Dependências:**
    ```bash
    npm install
    ```
4.  **Inicie o Servidor:**
    ```bash
    npm start
    ```

A API estará rodando no endereço `http://localhost:3000`.

## 📸 Evidências das Requisições

A seguir, você encontrará os prints dos testes realizados com as diferentes requisições HTTP, demonstrando o funcionamento de cada endpoint.

-----

### **GET /tasks - Listar todas as tarefas**

  * **Descrição:** Requisição para obter a lista completa de todas as tarefas cadastradas.
  * ## ![Captura de tela 2025-06-22 135441](https://github.com/user-attachments/assets/3bfeac83-a46f-4a58-a8ea-517bf0d93ac7)


### **GET /tasks/:id - Detalhar uma tarefa por ID**

  * **Descrição:** Requisição para obter os detalhes de uma única tarefa, especificando seu ID na URL.
  * ## ![Captura de tela 2025-06-22 135523](https://github.com/user-attachments/assets/d3c9f04a-3c64-414f-9e6e-f5cd0953ceba)


### **POST /tasks - Criar uma nova tarefa**

  * **Descrição:** Requisição para adicionar uma nova tarefa ao sistema. O corpo da requisição deve conter os dados da nova tarefa (ex: `title`, `description`).
  * ## ![Captura de tela 2025-06-22 135329](https://github.com/user-attachments/assets/b2186bb3-ea32-4239-976e-084aa06eb9a0)


### **PUT /tasks/:id - Atualizar uma tarefa existente**

  * **Descrição:** Requisição para atualizar completamente uma tarefa existente, usando seu ID. O corpo da requisição deve enviar todos os campos que a tarefa deve ter após a atualização.
  * ## ![Captura de tela 2025-06-22 140719](https://github.com/user-attachments/assets/53051c73-6026-438a-a363-683ce64f799f)


### **DELETE /tasks/:id - Deletar uma tarefa**

  * **Descrição:** Requisição para remover uma tarefa do sistema, usando seu ID.
  * ## ![Captura de tela 2025-06-22 135700](https://github.com/user-attachments/assets/45402156-cab3-4030-b22b-3fb5a39ebf92)

### **Final da nossa lista de Tarefas**
 * ![Captura de tela 2025-06-22 135803](https://github.com/user-attachments/assets/64abe6f2-22f4-44c5-9662-7d85558da18b)


Sinta-se à vontade para testar os endpoints e explorar o código\!
