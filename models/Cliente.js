
 const mongoose = require('mongoose')

 const schema = mongoose.Schema({
    nome: String,
    preco: Number,
    tamanho: String,
    tipo: String
 })

 const Cliente = mongoose.model('Cliente', schema)

 module.exports = Cliente 

