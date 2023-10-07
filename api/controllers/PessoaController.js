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

    //create register
    static async createDataPeople(req, res){
        const newPeople = req.body
        try{
            const newPeopleCreated = await database.Pessoas.create(newPeople)
            return res.status(200).json(newPeople)

        } catch(e){
            return res.status(500).json(e.message)
        }
    }

    //update register
    static async updatePeople(req, res){
        const { id } = req.params
        const newInfos = req.body
        try{
            await database.Pessoas.update(newInfos, {
                where: {
                    id: Number(id)
                }
            })
         
            const peopleInfosUpdate = await database.Pessoas.findOne({ //retorna o registro atualizado
                where: {
                    id: Number(id)}
            })

            return res.status(200).json(peopleInfosUpdate)
        } catch(e){
            return res.status(500).json(e.message)
        }
    }

    //delete register Pessoas
    static async deletePeople(req, res){
        const { id } = req.params
         try{
            await database.Pessoas.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({message:'destroy sucessfull'})
         } catch(e){            
            return res.status(500).json(e.message)
         }
    }
    //encontra a matricula com base no id da tablea Pessoas
    static async getDataMatricula(req, res){
        const { estudanteId, matriculaId } = req.params
        try{
            const dataMatricula = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            }) 
            return res.status(200).json(dataMatricula)
        }catch(e){
            return res.status(500).json(e.message)
        }
    }

     //create register matricula
     static async createDataMatricula(req, res){
        const { estudanteId } = req.params
        const { newMatricula } = {...req.body, estudante_id: Number(estudanteId)}
        try{
            const newMatriculaCreated = await database.Pessoas.create(newMatricula)
            return res.status(200).json(newMatriculaCreated)

        } catch(e){
            return res.status(500).json(e.message)
        }
    }

    //Update Matricula
    static async updateMatricula(req, res){
        const { estudanteId, matriculaId } = req.params
        const newInfos = req.body
        try{
            await database.Matriculas.update(newInfos, {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })
         
            const MatriculasInfosUpdate = await database.Matriculas.findOne({ //retorna o registro atualizado
                where: {
                    id: Number(matriculaId)}
            })

            return res.status(200).json(MatriculasInfosUpdate)
        } catch(e){
            return res.status(500).json(e.message)
        }
    }

    //delete register Matricula
    static async deleteMatricula(req, res){
        const { estudanteId, matriculaId } = req.params
         try{
            await database.Matriculas.destroy({
                where: {
                    id: Number(matriculaId)
                }
            })
            return res.status(200).json({message:'destroy sucessfull'})
         } catch(e){            
            return res.status(500).json(e.message)
         }
    }

}
module.exports = PessoaController