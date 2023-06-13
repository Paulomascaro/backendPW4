const Resposta = require('../modelo/index.js').Resposta;
const router = require("express").Router(); 

// cadastrando usuario
router.post('/adicionar', async (req, res) => {
    try {
        await Resposta.sync();
        if(req.body.msg =! null) {
            console.log(`inserindo Resposta no banco`);
            const usuario = await Resposta.create({
                msg: req.body.msg,
                id_mensagemPrincipal: req.body.id_mensagemPrincipal
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


// deletando msg
router.delete('/excluir/:id', async (req, res) => {
    try {
        await Mensagem.sync();
        const msgs = await Mensagem.destroy({
            where: {id: req.params.id}
        });

        res.send(`mensagem ${req.params.id} excluido!`);
    } catch (e) {
        res.status(500).json({Erro:"Erro no servidor!"})
    }
});

// editar mensagem
router.put('/editar/:id', async (req, res) => {
    try {
        if (req.body.id != null && req.body.msg != null) {
            await Mensagem.sync();

            const msgs = await Mensagem.update({
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