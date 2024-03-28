const express = require('express')
const ProdutoController = require('../controllers/ProdutoController')
const Comanda = require('../models/Comanda')
const Produto = require('../models/Produto')
const router = express.Router()

router.get('/', function(req, res){
    res.json({})
})

//Produtos
router.get('/produtos', (req, res)=> ProdutoController.getAll(req, res))
router.post('/produtos', (req, res)=> ProdutoController.create(req, res))
router.get('/produtos/:id', (req, res)=> ProdutoController.get(req, res))
router.put('/produtos/:id', (req, res)=> ProdutoController.update(req, res))
router.delete('/produtos/:id', (req, res)=> ProdutoController.delete(req, res))

//Comandas

router.get('/comandas', (req, res)=> Comanda.getAll(req, res))
router.post('/comandas', (req, res)=> Comanda.create(req, res))
router.get('/comandas/:id', (req, res)=> Comanda.get(req, res))
router.put('/comandas/:id', (req, res)=> Comanda.update(req, res))
router.delete('/comandas/:id', (req, res)=> Comanda.delete(req, res))






module.exports = router