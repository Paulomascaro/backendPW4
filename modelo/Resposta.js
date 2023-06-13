const Sequelize = require("sequelize");
const banco = require("../bd.js");
const MensagemPrincipal = require("./MensagemPrincipal.js")
const Usuario = require("./Usuario.js");

const Resposta = banco.define("Resposta", {
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



module.exports = Resposta;
