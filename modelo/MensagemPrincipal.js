const Sequelize = require("sequelize");
const banco = require("../bd.js");
const Resposta = require("./Resposta.js");
const Usuario = require("./Usuario.js");

const MensagemPrincipal = banco.define("MensagemPrincipal", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    msg:{
       type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    }

});


module.exports = MensagemPrincipal;