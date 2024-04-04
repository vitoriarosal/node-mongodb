const { match } = require('assert')
const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: {type:String,
        require:true,
        maxlength: 2,
        maxlength: 100,
        trim: true
    },
    preco: 
    { 
        type: Number,
        default: 0,
        min: [0, 'Mais facil'],
        match: /^\d+(\.\d{1,2})?$/,
        

    },
    tamanho: String,
    tipo: {
        type: String,
        enum: ["Bebidas", "Pizzas","Massas"]
    },
    
    ingrediente: [String]

    
})

const Produto = mongoose.model('Produto', schema)

module.exports = Produto