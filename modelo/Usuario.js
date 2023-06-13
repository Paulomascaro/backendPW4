const Sequelize = require("sequelize");
const banco = require("../bd.js");

const Usuario = banco.define("Usuario", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false,
        unique: true

    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    }
});

module.exports = Usuario;