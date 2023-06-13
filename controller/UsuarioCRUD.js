const router = require("express").Router();
const Usuario = require('../modelo/index.js').Usuario;

// cadastrando usuario
router.post('/adicionar', async (req, res) => {
    try {
        await Usuario.sync();
        console.log(req.body)
        if(req.body.nome != null && req.body.senha != null && req.body.email != null) {
            console.log(`inserindo Usuario ${req.body.nome} no banco`);
            const usuario = await Usuario.create({
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha
            })
            console.log(req.body)
            res.status(200).json(usuario)
        } else {
            res.status(422).json({Erro:"Parametros faltando"})
        }
    } catch (e) {
        res.status(500).json({Erro:"Erro no servidor!"})
    }
});

function parametrosLoginValidos(req) {
    return req.body.email != null && req.body.senha != null;
}

// login
router.post('/login', async (req, res) => {
    try {
        if(parametrosLoginValidos(req)) {
            console.log(req.body)
            const usuario = await Usuario.findOne({where: {email: req.body.email}})
            console.log(usuario)
            if(usuario != null){
                if(req.body.senha === usuario.senha){
                    res.json(usuario)
                } else {
                    res.status(401).json({Erro: "Senha Invalida!"})
                }

            } else{
                res.status(401).json({Erro: "Usuario não encontrado!"})
            }

        } else {
            res.status(422).json({Erro: "Parametros faltando"})
        }

    } catch (e) {
        res.status(500).json({Erro:"Erro no servidor!"})
    }
});


// deletando usuario
router.delete('/excluir/:email', async (req, res) => {
    try {
        await Usuario.sync();
        const usuario = await Usuario.destroy({
            where: {email: req.params.email}
        });

        res.send(`usuario ${req.params.email} excluido!`);
    } catch (e) {
        res.status(500).json({Erro:"Erro no servidor!"})
    }
});

// editar usuario
router.put('/editar/:email', async (req, res) => {
    try {
        if (req.body.nome != null && req.body.senha != null && req.body.email != null) {
            await Usuario.sync();

            const usuario = await Usuario.update({
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha
            }, {
                where: {email: req.params.email}
            });

            res.send(`usuario ${req.params.email} editado!`);
        } else {
            res.status(422).json({Erro: "Parametros faltando!"})
        }
    } catch (e) {
        res.status(500).json({Erro:"Erro no servidor!"})
    }
});


module.exports = router;