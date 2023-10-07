const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router
    .get('/pessoas', PessoaController.getDataAll) //retorna os dados de uma tabela 
    .get('/pessoas/:id', PessoaController.getDataOne) //procura os dados na tabela Pessoas pelo id
    .post('/pessoas', PessoaController.createDataPeople) //insere um novo registro na tabela
    .put('/pessoas/:id', PessoaController.updatePeople) //atualiza registros existentes
    .delete('/pessoas/:id', PessoaController.deletePeople) //deleta registros no banco
    .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.getDataMatricula) //pega informações de matricula relacionado a pessoas
    .post('/pessoas/:estudanteId/matricula', PessoaController.createDataMatricula) //cria um registro de matricula
    .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.updateMatricula) //atualiza dados de matricula
    .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deleteMatricula) //apaga dados de matricula

module.exports = router