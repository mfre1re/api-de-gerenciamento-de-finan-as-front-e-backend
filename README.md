# API Controle de Transação e Gerenciamento de Finanças V1.0

# Gerenciamento de Finanças (Backend)
Para utilização deste projeto na máquina local basta que seja realizado um clone do repositório `git@github.com:mfre1re/api-de-gerenciamento-de-financas-front-e-backend.git`. 
Após o clone, abra o terminal, vá até o caminho onde está localizado o pom.xml e execute: `mvn clean install` para instalar as bibliotecas externas do projeto.

## Frameworks e Bibliotecas Utilizadas
- [Java JDK17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html): ambiente de desenvolvimento para construção de aplicações utilizando a linguagem de programação Java.
- [Spring Boot](https://spring.io/projects/spring-boot): Framework para desenvolvimento rápido de aplicativos Java.
- [Spring Data JPA](https://spring.io/projects/spring-data-jpa): Facilita o acesso a dados usando o Java Persistence API (JPA).
- [Lombok](https://projectlombok.org/): Biblioteca que ajuda a reduzir a verbosidade do código Java.
- [MySQL](https://www.mysql.com/downloads/): sistema de gerenciamento de banco de dados relacional de código aberto.

## Descrição Backend
O backend é a parte estrutural responsável por processar as requisições CRUD, estabelecendo a interface entre os clientes e a base de dados por meio dos endpoints da API. Aqui temos os devidos endpoints com suas funcionalidades tais como requisitar (GET) as transações ou categorias, inserir ou atualizar transações (POST), deletar transações, todas ou única (DELETE). 

## Endpoints da API

### 1. Listar todas as transações
<details><summary>Endpoint: GET  /transacao </summary>(http://localhost:8080/transacao): Retorna todas as transações cadastradas.</details>

### 2. Somar transações por categoria e por ID do usuário
<details><summary>Endpoint: GET  /transacao/somartransacoes?id={id}&userid={userid}</summary>(http://localhost:8080/transacao/somartransacoes?id=5&userid=2): Retorna a soma dos valores de transações para uma categoria específica.
  
![image](https://github.com/mfre1re/api-de-gerenciamento-de-financas-front-e-backend/assets/88170132/9cb79070-5956-49a5-9bac-ec98185ee978)
</details>

### 3. Inserir transações
<details><summary>Endpoint: POST  /transacao </summary>(http://localhost:8080/transacao): Insere uma ou mais transações na base de dados.
  
![image](https://github.com/mfre1re/api-de-gerenciamento-de-financas-front-e-backend/assets/88170132/0ab36438-e547-4ccb-b760-26544f89b3b4)
</details>

### 4. Atualizar transação com ID do usuário
<details><summary>Endpoint: POST  /transacao/atualiza </summary>(http://localhost:8080/transacao/atualiza): Atualiza uma transação existente com base no ID do usuario.
  
![image](https://github.com/mfre1re/api-de-gerenciamento-de-financas-front-e-backend/assets/88170132/1a9703c4-cdc4-46bb-b1cc-1c2b322fde82)
</details>

### 5. Deletar transação por ID
<details><summary>Endpoint: DELETE  /transacao?id={id}</summary>(http://localhost:8080/transacao?id=87): Deleta uma transação usando o ID fornecido.
  
![image](https://github.com/mfre1re/api-de-gerenciamento-de-financas-front-e-backend/assets/88170132/da2a8bc2-7a38-41db-af6e-31c4123d9e0d)
</details>

### 6. Deletar todas as transações
<details><summary>Endpoint: DELETE  /transacao/apagartudo</summary>(http://localhost:8080/transacao/apagartudo): Deleta todas as transações da base de dados.
  
![image](https://github.com/mfre1re/api-de-gerenciamento-de-financas-front-e-backend/assets/88170132/e955d295-ecba-49cc-aa76-e11b4967cecb)
</details>

### 7. Listar todas as categorias
<details><summary>Endpoint: GET  /categoria</summary>(http://localhost:8080/categoria): Retorna todas as categorias cadastradas.
  
![image](https://github.com/mfre1re/api-de-gerenciamento-de-financas-front-e-backend/assets/88170132/681c7431-7665-4c1a-ac05-f3b873776323)
</details>

### 8. Listar Usuários
<details><sumary>Endpoint: GET /usuario</sumary>(http://localhost:8080/usuario): Retorna todos os usuários cadastrados no banco de dados.

![image](https://github.com/mfre1re/api-de-gerenciamento-de-financas-front-e-backend/assets/88170132/beb39e56-7ecc-4a08-a6cd-dd54a7eb0264)
</details>

### 9. Cadastrar Usuários
<details><sumary>Endpoint: POST /usuario</sumary>(http://localhost:8080/usuario): Cadastra um usuário no banco de dados com email, password(senha) e username(nome).

![image](https://github.com/mfre1re/api-de-gerenciamento-de-financas-front-e-backend/assets/88170132/4dbb1dc0-f3be-49b5-b014-8320be2e7759)
</details>

### 10. Atualizar Usuários por ID
<details><sumary>Endpoint: POST /usuario/atualiza</sumary>(http://localhost:8080/usuario/atualiza): Atualiza dados de um usuário com base no ID passado no corpo da requisição.

![image](https://github.com/mfre1re/api-de-gerenciamento-de-financas-front-e-backend/assets/88170132/f2f5d586-79b5-4f04-b3f7-12400beabfb4)
</details>

### 11. Deletar Usuário por ID
<details><sumary>Endpoint: DELETE /usuario?id={id}</sumary>(http://localhost:8080/usuario?id=4): Deleta todos os dados de um usuário com base no seu ID.

![image](https://github.com/mfre1re/api-de-gerenciamento-de-financas-front-e-backend/assets/88170132/55a70bf5-d880-4eb4-aa68-2fa9907b78fc)
</details>


## Estruturação
O projeto está organizado em devidos pacotes "br.com.estudos_backend" sendo estruturado assim os seguintes pacotes:

  *CorsConfig* - para permitir que o backend receba solicitações de diferentes origens.
  
- controllers:
  
     *1. Categoria* - gerencia as operações relacionadas as categorias de transações.

     *2. Transacao* - trata as operações relacionadas às transações financeiras fornecendo endpoints para realizar operações CRUD (Create, Read, Update, 
                   Delete) sobre as transações.
  
     *3. Usuario* - Trata das operações relacionadas aos usuário tal como cadastrar, listar e deletar usuário.
  
- entities:

     *1. CategoriaEntity* - representa uma categoria associada as transações.
  
     *2. TransacaoEntity* - representa uma transação financeira no sistema.
  
     *3. UsuarioEntity* - representa o banco de dados de um usuário no sistema.
  
- repositories:
  
     *1. CategoriaRepository* - gerencia as operações relacionadas as categorias no banco de dados. Assim como o `TransacaoRepository`, ele estende a interface   
                `JpaRepository`. 
  
     *2. TransacaoRepository* - interage com o banco de dados para operações relacionadas às transações financeiras. Ele estende a interface `JpaRepository` do 
                Spring Data JPA, fornecendo métodos para realizar operações. Importante notar a criação de alguns métodos para a função de paginação e filtragem
                das transações baseados na categoria e no ID de usuário.

     *3. UsuarioRepository* - interage com o banco de dados para operações relacionadas aos Usuários. Estende a interface `JpaRepository` do 
                Spring Data JPA, fornecendo métodos para realizar estas operações.
     
- services:
  
     *1.CategoriaService* - gerencia a lógica de negócios associadada as categorias de transações. Assim como o `TransacaoService`, ele interage com o 
            `CategoriaRepository` para realizar operações no banco de dados.

     *2.TransacaoService* - encapsula a lógica de negócios relacionada as transações financeiras interagindo com o `TransacaoRepository` para
            realizar as operações no banco de dados. 

     *3. UsuarioService* - gerencia a lógica de negócios relacionadas aos usuários. Busca interagir com o `UsuarioRepository` para realizar
            as operações no banco de dados.

## Entendendo os dados
### TransacaoEntity
- **Atributos:**
  - `id` (Integer): Identificador único da transação.
  - `valor` (double): Valor da transação.
  - `data` (LocalDate): Data da transação.
  - `categoria` (CategoriaEntity){id}: Categoria associada a transação.
  - `username` (UsuarioEntity){id}: Usuário associado a transação.

### CategoriaEntity
- **Atributos:**
  - `id` (Integer): Identificador único da categoria.
  - `categoria` (String): Nome da categoria.

### UsuarioEntity
- **Atributos:**
  - `id` (Integer): Identificador único do usuário.
  - `email` (String): Email de cadastro do usuário.
  - `password` (String): Senha do usuário.
  - `username` (String): Nome do usuário.


 # Gerenciamento de Finanças (Frontend)

O frontend é a parte do sistema que vai interagir com o usuário e é responsável pela apresentação, interface gráfica e interatividade. Nesta API utilizamos alguns recursos importantes listados abaixo:

## Frameworks e Bibliotecas Utilizadas
- [Angular](https://angular.io/): Framework para desenvolvimento de aplicativos web em TypeScript/JavaScript.
- [Express](https://expressjs.com/en/starter/installing.html): Um framework web rápido para Node.js.
- [Node.js](https://nodejs.org/): Ambiente de execução para JavaScript/TypeScript do lado do servidor.
- [Karma](https://karma-runner.github.io/): Ferramenta de teste de unidade para JavaScript.
- [Jasmine](https://jasmine.github.io/): Framework de teste de comportamento para JavaScript.

## Instalação
Feito o clone do projeto, no diretório do frontend, abra o terminal e digite `npm install` para que todas as dependências e biliotecas utilizadas sejam instaladas.

## Utilizando o Aplicativo

<details><summary>Realizando cadastro de Usuários:</summary>
  
![Cadastrar Usuário](https://github.com/mfre1re/api-de-gerenciamento-de-financas-front-e-backend/assets/88170132/8cd6cad5-04f4-47fb-bea5-a81a7ef39945)
</details>

<details><summary>Inserção de uma ou mais transações:</summary>  

### Para uma transação:
![Inserir uma Transação](https://github.com/mfre1re/api-de-gerenciamento-de-financas-front-e-backend/assets/88170132/e78c8f5a-01a1-4876-8e68-0cf33332639a)

### Para inserir várias transações (também aceita inserção de apenas uma):
![Inserir Várias Transações](https://github.com/mfre1re/api-de-gerenciamento-de-financas-front-e-backend/assets/88170132/7898137f-caa1-47b7-9ff4-e4ae6be99586)
</details>

<details><summary>Atualizar transação, deletar transação:</summary>

### Nota que após realizar um cadastro, podemos atualizar com o botão para aparecer na listagem de transações
![Deletar uma transação, atualizar transação](https://github.com/mfre1re/api-de-gerenciamento-de-financas-front-e-backend/assets/88170132/c1581cf2-781a-48bb-ba1e-bcfa03315ef8)
</details>

<details><summary>Somar transações filtrando por categoria e ID do usuário:</summary>

### Nota que após realizar um cadastro, podemos atualizar com o botão para aparecer na listagem de transações
![Somar Transações](https://github.com/mfre1re/api-de-gerenciamento-de-financas-front-e-backend/assets/88170132/739ab8e1-2720-4ccf-aed3-4190d860ceba)
</details>
