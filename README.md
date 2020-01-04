# api-vendas-nodejs

API desenvolvida em NodeJS com Hapi Framework

* Caio Santos Freitas
* Luismar Pavani
* Thiago Henrique de Matos

# Como rodar o projeto

* Instalar dependencias: npm install

* Subir o banco de dados no docker: sudo docker-compose up -d

* Criar arquivo .env baseado no .env.sample modificando os dados caso necessário.

* Executar: npm run dev

* Para os testes há um coleção do postman no repositório com todas as requests necessárias.

* É necessário cadastrar o usuario pela request Post Users e em seguida fazer pela request Post Users (Login). O token gerado será utilizado no campo Authorization no header das requisições privadas
