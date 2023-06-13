// const Resposta = require("../modelo/index.js").Resposta;
const router = require("express").Router();
const MensagemPrincipal = require('../modelo/index.js').MensagemPrincipal;

// cadastrando mensagem
router.post('/adicionar', async (req, res) => {
    try {
        await MensagemPrincipal.sync();
        if(req.body.msg != null) {
            console.log(`inserindo mensagem no banco`);
            const usuario = await MensagemPrincipal.create({
                msg: req.body.msg,
                id_usuario: req.body.id_usuario

            })
            console.log(req.body)
            res.json(usuario)
        } else {
            res.status(422).json({Erro: "Parametros faltando"})
        }
    } catch (e) {
        res.status(500).json({Erro:"Erro no servidor!"})
    }
});

// listando todas as mensagens
router.get('/listartodas', async (req, res) => {
    try {
        await MensagemPrincipal.sync();
        console.log(`listando todas as mensagens no banco`);
        const msgs = await MensagemPrincipal.findAll({
            include: {all: true}

        });

        console.log(JSON.stringify(msgs));
        res.send(JSON.stringify(msgs));
    } catch (e) {
        console.log(e)
        res.status(500).json({Erro:"Erro no servidor!"})
    }
});

// deletando msg
router.delete('/excluir/:id', async (req, res) => {
    console.log(req.params.id)
    try {
        await MensagemPrincipal.sync();
        const msgs = await MensagemPrincipal.destroy({
            where: {id: req.params.id}
        });

        res.send(`mensagem ${req.params.id} excluido!`);
    } catch (e) {
        res.status(500).json(e)
    }
});

// editar mensagem
router.put('/editar/:id', async (req, res) => {
    try {
        if (req.body.msg != null) {
            await MensagemPrincipal.sync();
            const msgs = await MensagemPrincipal.update({
                msg: req.body.msg,
            }, {
                where: {id: req.params.id}
            });

            res.send(`mensagem ${req.params.id} editado!`);
        } else {
            res.status(422).json({Erro: "Parametros faltando!"})
        }
    } catch (e) {
        res.status(500).json({Erro:"Erro no servidor!"})
    }
});


module.exports = router;