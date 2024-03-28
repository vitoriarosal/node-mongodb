const Produto = require("../models/Produto")

const ProdutoController = {
    getAll: async (req, res) => {
        res.json( await Produto.find() )

    },
    get: async (req, res) => {

        try {
            res.json( await Produto.findById(req.params.id) )
            
        } catch (error) {
            res.status(404).json({error:'Registro não encontrado'}) 
        }



    },

    create: async (req, res) => {
        try {
            res.json( await Produto.findByIdAndDelete(req.params.id) )
            
        } catch (error) {
            res.status(400).json(error) 
        }
    },
    update: async (req, res) => {
        try {
            res.json( await Produto.findByIdAndDelete(req.params.id) )
            
        } catch (error) {
            res.status(404).json({error:'Registro não encontrado'}) 
        }
    },
    delete: async (req, res) => {
        
        try {
            res.json( await Produto.findByIdAndDelete(req.params.id) )
            
        } catch (error) {
            res.status(404).json({error:'Registro não encontrado'}) 
        }



    },





}

module.exports =  ProdutoController