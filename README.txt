
Bibliotecas:
npm install express;
npm install sequelize;
npm install sqlite3;
npm install cors;
npm install body-parser;

Rotas:

Usuario:
POST /usuario/adicionar
POST /usuario/login
DELETE /usuario/excluir/:email
PUT /usuario/editar/:email

Mensagem:
POST /mensagem/adicionar
GET /mensagem/listartodas
DELETE /mensagem/excluir/:id
PUT /mensagem/editar/:id

Resposta:
POST /resposta/adicionar
DELETE /resposta/excluir/:id
PUT /resposta/editar/:id








