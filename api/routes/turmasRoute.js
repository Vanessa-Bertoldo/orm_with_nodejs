const { Router } = require('express')
const TurmaController = require('../controllers/TurmasController')

const router = Router()

router
    .get('/turmas', TurmaController.getAllDataTurmas)
    .get('/turmas/:id', TurmaController.getDataOne)
    .post('/turmas', TurmaController.createDataTurma)
    .put('/turmas/:id', TurmaController.updateTurma)
    .delete('/turmas/:id', TurmaController.deleteTurma)

module.exports = router