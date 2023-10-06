const database  = require('../models')

class PessoaController {
    static async getDataAll(req, res){
        try{
            const allPeople = await database.Pessoas.findAll() //traz todos os dados da tabela Pessoas
            return res.status(200).json(allPeople)
        }catch(e){
            return res.status(500).json(error.message)
        }
    }
}
module.exports = PessoaController