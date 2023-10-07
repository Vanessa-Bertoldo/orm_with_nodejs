const database  = require('../models')


class TurmaController{
    static async getAllDataTurmas(req, res){
        try{
            const allData = await database.Turmas.findAll()
            return res.status(200).json(allData)
        } catch(e){
            return res.status(500).json(e.message)
        }
    }

    static async getDataOne(req, res){
        const { id } = req.params //traz os dados de acordo com o id especificado
        try{
            const oneTurma = await database.Turmas.findOne({
                where: {
                    id: Number(id)}
            })//Traz apenas um registro
            return res.status(200).json(oneTurma)
        } catch(e){
            return res.status(500).json(e.message)
        }
    }

    static async createDataTurma(req, res){
        const newTurma = req.body
        try{
            const newTurmaCreated = await database.Turmas.create(newTurma)
            return res.status(200).json(newTurma)

        } catch(e){
            return res.status(500).json(e.message)
        }
    }

     //update register
     static async updateTurma(req, res){
        const { id } = req.params
        const newInfos = req.body
        try{
            await database.Turmas.update(newInfos, {
                where: {
                    id: Number(id)
                }
            })
         
            const turmaInfosUpdate = await database.Turmas.findOne({ //retorna o registro atualizado
                where: {
                    id: Number(id)}
            })

            return res.status(200).json(turmaInfosUpdate)
        } catch(e){
            return res.status(500).json(e.message)
        }
    }

     //delete register
     static async deleteTurma(req, res){
        const { id } = req.params
         try{
            await database.Turmas.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({message:'destroy sucessfull'})
         } catch(e){            
            return res.status(500).json(e.message)
         }
    }

}
module.exports = TurmaController