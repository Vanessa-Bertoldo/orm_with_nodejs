const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.getDataAll)
router.get('/pessoas/:id', PessoaController.getDataOne) //procura os dados na tabela Pessoas pelo id

module.exports = router