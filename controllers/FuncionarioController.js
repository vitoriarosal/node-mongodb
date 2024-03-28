
const funcionario = require("../models/funcionario")

const funcionarioController = {
    getAll: async (req, res) => {
        res.json( await funcionario.find() )

    },
    get: async (req, res) => {

        try {
            res.json( await funcionario.findById(req.params.id) )
            
        } catch (error) {
            res.status(404).json({error:'Registro não encontrado'}) 
        }



    },

    create: async (req, res) => {
        try {
            res.json( await funcionario.findByIdAndDelete(req.params.id) )
            
        } catch (error) {
            res.status(400).json(error) 
        }
    },
    update: async (req, res) => {
        try {
            res.json( await funcionario.findByIdAndDelete(req.params.id) )
            
        } catch (error) {
            res.status(404).json({error:'Registro não encontrado'}) 
        }
    },
    delete: async (req, res) => {
        
        try {
            res.json( await funcionario.findByIdAndDelete(req.params.id) )
            
        } catch (error) {
            res.status(404).json({error:'Registro não encontrado'}) 
        }



    },





}

module.exports =  funcionarioController