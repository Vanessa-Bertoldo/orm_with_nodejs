const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json()) //O método use serve para avisarmos o express que vai ter alguma biblioteca ou algum texto de código que vai fazer um 'meio de campo' entre as requisições e o próprio express

const port = 3000

app.get('/teste',(req, res) => res
    .status(200)
    .send({mensagem: "teste API"})
    )

 app.listen(port, () => 
    console.log(`servidor rodando na porta ${port}`)
 )   

module.exports = app