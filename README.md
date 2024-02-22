# API Controle de Transacao e Gerenciamento de Finanças V1.0

# Utilização local
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
