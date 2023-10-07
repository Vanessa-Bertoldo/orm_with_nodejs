const database  = require('../models')

class NivelController{
    
    static async getAllDataNiveis(req, res){
        try{
            const allNiveis = await database.Niveis.findAll()
            return res.status(200).json(allNiveis)
        } catch(e){
            return res.status(500).json(e.message)
        }
    }

    static async getDataOneNivel(req, res){
        const { id } = req.params //traz os dados de acordo com o id especificado
        try{
            const oneNivel = await database.Niveis.findOne({
                where: {
                    id: Number(id)}
            })//Traz apenas um registro
            return res.status(200).json(oneNivel)
        } catch(e){
            return res.status(500).json(e.message)
        }
    }

    static async createDataNivel(req, res){
        const newNivel = req.body
        try{
            const newNiveisCreated = await database.Niveis.create(newNivel)
            return res.status(200).json(newNivel)

        } catch(e){
            return res.status(500).json(e.message)
        }
    }

    //update register
    static async updateNivel(req, res){
        const { id } = req.params
        const newInfos = req.body
        try{
            await database.Niveis.update(newInfos, {
                where: {
                    id: Number(id)
                }
            })
         
            const nivelInfosUpdate = await database.Niveis.findOne({ //retorna o registro atualizado
                where: {
                    id: Number(id)}
            })

            return res.status(200).json(nivelInfosUpdate)
        } catch(e){
            return res.status(500).json(e.message)
        }
    }

    //delete register
    static async deleteNivel(req, res){
        const { id } = req.params
         try{
            await database.Niveis.destroy({
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

module.exports = NivelController