const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.getDataAll) //retorna os dados de uma tabela 
router.get('/pessoas/:id', PessoaController.getDataOne) //procura os dados na tabela Pessoas pelo id
router.post('/pessoas', PessoaController.createDataPeople) //insere um novo registro na tabela
router.put('/pessoas/:id', PessoaController.updatePeople) //atualiza registros existentes
router.delete('/pessoas/:id', PessoaController.deletePeople) //deleta registros no banco

module.exports = router