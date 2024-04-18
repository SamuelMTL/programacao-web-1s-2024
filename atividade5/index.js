const express = require('express');
const estoque = require('./estoque');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    const resultado = estoque.adicionarProduto(id, nome, parseInt(qtd));
    res.send(resultado);
});

app.get('/listar', (req, res) => {
    res.send(estoque.listarProdutos());
});

app.delete('/remover/:id', (req, res) => {
    res.send(estoque.removerProduto(req.params.id));
});

app.put('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    res.send(estoque.editarProduto(id, parseInt(qtd)));
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
