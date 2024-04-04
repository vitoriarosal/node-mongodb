const Produto = require("../models/Produto");

const ProdutoController = {
    getAll: async (req, res) => {
        try {
            const produtos = await Produto.find();
            res.json(produtos);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar produtos' });
        }
    },
    get: async (req, res) => {
        try {
            const produto = await Produto.findById(req.params.id);
            if (!produto) {
                res.status(404).json({ error: 'Registro não encontrado' });
            } else {
                res.json(produto);
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar produto' });
        }
    },
    create: async (req, res) => {
        try {
            const novoProduto = await Produto.create(req.body);
            res.status(201).json(novoProduto);
        } catch (error) {
            res.status(400).json({ error: 'Erro ao criar produto' });
        }
    },
    update: async (req, res) => {
        try {
            const produtoAtualizado = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!produtoAtualizado) {
                res.status(404).json({ error: 'Registro não encontrado' });
            } else {
                res.json(produtoAtualizado);
            }
        } catch (error) {
            res.status(400).json({ error: 'Erro ao atualizar produto' });
        }
    },
    delete: async (req, res) => {
        try {
            const produtoRemovido = await Produto.findByIdAndDelete(req.params.id);
            if (!produtoRemovido) {
                res.status(404).json({ error: 'Registro não encontrado' });
            } else {
                res.json({ message: 'Produto removido com sucesso' });
            }
        } catch (error) {
            res.status(400).json({ error: 'Erro ao remover produto' });
        }
    }
};

module.exports = ProdutoController;
