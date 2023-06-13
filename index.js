const express = require('express');
const app = express();
const port = 3008;
const sequelize = require("./bd.js");
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json());
app.use(express.urlencoded({extended: true}));

(async() => {
  try {
    await sequelize.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } 
})();


app.use("/usuario", require("./controller/UsuarioCRUD.js"));

app.use("/mensagem", require("./controller/MensagemPCRUD.js"));

app.use("/resposta", require("./controller/RespostaCRUD.js"));



app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})

