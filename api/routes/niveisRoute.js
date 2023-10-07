const { Router } = require('express')
const NivelController = require('../controllers/NivelController')

const router = Router()

router.get('/niveis', NivelController.getAllDataNiveis) //retorna os dados de uma tabela 
router.get('/niveis/:id', NivelController.getDataOneNivel) //procura os dados na tabela Pessoas pelo id
router.post('/niveis', NivelController.createDataNivel) //insere um novo registro na tabela
router.put('/niveis/:id', NivelController.updateNivel) //atualiza registros existentes
router.delete('/niveis/:id', NivelController.deleteNivel) //deleta registros no banco

module.exports = router