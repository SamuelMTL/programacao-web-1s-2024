let produtos = {};

function adicionarProduto(id, nome, qtd) {
    if (!produtos[id]) {
        produtos[id] = { nome, qtd };
        return 'Produto adicionado com sucesso.';
    } else {
        return 'Erro: Produto já existe.';
    }
}

function listarProdutos() {
    return produtos;
}

function removerProduto(id) {
    if (produtos[id]) {
        delete produtos[id];
        return 'Produto removido com sucesso.';
    } else {
        return 'Erro: Produto não encontrado.';
    }
}

function editarProduto(id, qtd) {
    if (produtos[id]) {
        produtos[id].qtd = qtd;
        return 'Quantidade atualizada com sucesso.';
    } else {
        return 'Erro: Produto não encontrado.';
    }
}

module.exports = {
    adicionarProduto,
    listarProdutos,
    removerProduto,
    editarProduto
};
