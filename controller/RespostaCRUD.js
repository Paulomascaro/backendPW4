
const Resposta = require('../modelo/index.js').Resposta;
const router = require("express").Router(); 

// cadastrando Resposta
router.post('/adicionar', async (req, res) => {
    try {
        console.log(req.body)
        await Resposta.sync();
        if(req.body.msg != null) {
            console.log(`inserindo Resposta no banco`);
            const resposta = await Resposta.create({
                msg: req.body.msg,
                id_mensagemPrincipal: req.body.id_mensagemPrincipal,
                id_usuario: req.body.id_usuario
            })
            // console.log(req.body)
            res.json(resposta)
        } else {
            res.status(422).json({Erro: "Parametros faltando"})
        }
    } catch (e) {
        res.status(500).json({Erro:"Erro no servidor!"})
    }
});

//listando todas as respostas
router.get('/listartodas/:id', async (req, res) => {
    try {
        await Resposta.sync();
        console.log(`listando todas as respostas no banco`);
        const resposta = await Resposta.findAll({
           where: {id_mensagemPrincipal: req.params.id}

        });
        console.log(resposta);
        res.send(JSON.stringify(resposta));
    } catch (e) {
        console.log(e)
        res.status(500).json({Erro:"Erro no servidor!"})
    }
});


// deletando resposta
router.delete('/excluir/:id', async (req, res) => {
    try {
        await Resposta.sync();
        const resposta = await Resposta.destroy({
            where: {id: req.params.id}
        });

        res.send(`Resposta ${req.params.id} excluido!`);
    } catch (e) {
        res.status(500).json({Erro:"Erro no servidor!"})
    }
});

// editar resposta
router.put('/editar/:id', async (req, res) => {
    try {
        if (req.body.msg != null) {
            await Resposta.sync();
            const resposta = await Resposta.update({
                msg: req.body.msg,
            }, {
                where: {id: req.params.id}
            });resposta

            res.send(`Resposta ${req.params.id} editado!`);
        } else {
            res.status(422).json({Erro: "Parametros faltando!"})
        }
    } catch (e) {
        res.status(500).json({Erro:"Erro no servidor!"})
    }
});


module.exports = router;