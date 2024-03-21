 const mongoose = require('mongoose')

 const schema = mongoose.Schema({
    nome: String,
    preco: Number,
    tamanho: String,
    tipo: String
 })

 const Produto = mongoose.model('Produtp, schema')

 module.exports = Produto 

