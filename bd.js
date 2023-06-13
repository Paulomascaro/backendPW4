const Sequelize = require("sequelize");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './bd.sqlite',
  
});

// const sequelize = new Sequelize("sqlite::memory");
module.exports = sequelize;