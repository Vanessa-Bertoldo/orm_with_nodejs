const database  = require('../models')

class PessoaController {
    static async getDataAll(req, res){
        try{
            const allPeople = await database.Pessoas.findAll() //traz todos os dados da tabela Pessoas ou os especificados dentro de uma clausula where, como no método getDataOne
            return res.status(200).json(allPeople)
        }catch(e){
            return res.status(500).json(e.message)
        }
    }

    static async getDataOne(req, res){
        const { id } = req.params //traz os dados de acordo com o id especificado
        try{
            const onePeople = await database.Pessoas.findOne({
                where: {
                    id: Number(id)}
            })//Traz apenas um registro
            return res.status(200).json(onePeople)
        } catch(e){
            return res.status(500).json(e.message)
        }
    }

    static async createDataPeople(req, res){
        const newPeople = req.body
        try{
            const newPeopleCreated = await database.Pessoas.create(newPeople)
            return res.status(200).json(newPeople)

        } catch(e){
            return res.status(500).json(e.message)
        }
    }
}
module.exports = PessoaController