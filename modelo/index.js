const Resposta = require("./Resposta.js");
const MensagemPrincipal = require("./MensagemPrincipal.js");
const Usuario = require("./Usuario.js");

Resposta.belongsTo(MensagemPrincipal, {
    constraint: true,
    foreignKey: "id_mensagemPrincipal"
});

MensagemPrincipal.hasMany(Resposta, {
    foreignKey: "id_mensagemPrincipal"
});

Resposta.belongsTo(Usuario, {
    constraint: true,
    foreignKey: "id_usuario"
});

Usuario.hasMany(MensagemPrincipal, {
    foreignKey: "id_usuario"
});

module.exports = {Usuario, Resposta, MensagemPrincipal};