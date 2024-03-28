
const comanda = require("../models/comanda")

const comandaController = {
    getAll: async (req, res) => {
        res.json( await comanda.find() )

    },
    get: async (req, res) => {

        try {
            res.json( await comanda.findById(req.params.id) )
            
        } catch (error) {
            res.status(404).json({error:'Registro não encontrado'}) 
        }



    },

    create: async (req, res) => {
        try {
            res.json( await comanda.findByIdAndDelete(req.params.id) )
            
        } catch (error) {
            res.status(400).json(error) 
        }
    },
    update: async (req, res) => {
        try {
            res.json( await comanda.findByIdAndDelete(req.params.id) )
            
        } catch (error) {
            res.status(404).json({error:'Registro não encontrado'}) 
        }
    },
    delete: async (req, res) => {
        
        try {
            res.json( await comanda.findByIdAndDelete(req.params.id) )
            
        } catch (error) {
            res.status(404).json({error:'Registro não encontrado'}) 
        }



    },





}

module.exports =  comandaController