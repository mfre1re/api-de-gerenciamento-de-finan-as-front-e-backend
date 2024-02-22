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
<details><summary>Endpoint: GET  /transacao/somartransacoes?id={id}&userid={id}</summary>(http://localhost:8080/transacao/somartransacoes?id=5&userid=2): Retorna a soma dos valores de transações para uma categoria específica.
  
![image](https://github.com/mfre1re/api-de-gerenciamento-de-financas-front-e-backend/assets/88170132/9cb79070-5956-49a5-9bac-ec98185ee978)
</details>

### 3. Inserir transações
<details><summary>Endpoint: POST  /transacao/inserir </summary>(http://localhost:8080/transacao/inserir): Insere uma ou mais transações na base de dados.
  
![image](https://github.com/mfre1re/transacao-financeira-bootcampIBM/assets/88170132/142d4ed6-224f-47d9-892f-6aec174d15ac)
</details>

### 4. Atualizar transação
<details><summary>Endpoint: POST  /transacao/atualizar </summary>(http://localhost:8080/transacao/atualizar): Atualiza uma transação existente com base no ID.
  
![image](https://github.com/mfre1re/transacao-financeira-bootcampIBM/assets/88170132/c110efef-ca4a-4c92-b615-32490efd6ee6)
</details>

### 5. Deletar transação por ID
<details><summary>Endpoint: DELETE  /transacao?id={id}</summary>(http://localhost:8080/transacao?id=3): Deleta uma transação usando o ID fornecido.
  
![image](https://github.com/mfre1re/transacao-financeira-bootcampIBM/assets/88170132/b42f3571-709b-48e6-82f2-07ffde23c170)
</details>

### 6. Deletar todas as transações
<details><summary>Endpoint: DELETE  /transacao/apagartudo</summary>(http://localhost:8080/transacao/apagartudo): Deleta todas as transações da base de dados.
  
![image](https://github.com/mfre1re/transacao-financeira-bootcampIBM/assets/88170132/111a257e-b18b-45d5-a4ae-d4aa9fa2c08b)
</details>

### 7. Listar todas as categorias
<details><summary>Endpoint: GET  /categoria</summary>(http://localhost:8080/categoria): Retorna todas as categorias cadastradas.
  
![image](https://github.com/mfre1re/transacao-financeira-bootcampIBM/assets/88170132/da4d9f60-281e-47fc-ba02-3710ce483481)
</details>
