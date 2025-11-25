import Produto from '../models/Produto.js';

class ProdutoController {
  constructor() {
    this.produtos = [];
    this.proximoId = 1;
  }

  listarTodos = (req, res) => {
    res.json(this.produtos);
  }

  buscarPorId = (req, res) => {
    const produto = this.produtos.find(p => p.id === parseInt(req.params.id));
    
    if (!produto) {
      return res.status(404).json({ erro: 'Produto não encontrado' });
    }
    
    res.json(produto);
  }

  criar = (req, res) => {
    const { nome, categoria, preco } = req.body;
    
    const novoProduto = new Produto(this.proximoId++, nome, categoria, preco);
    this.produtos.push(novoProduto);
    
    res.status(201).json(novoProduto);
  }

  atualizar = (req, res) => {
    const produto = this.produtos.find(p => p.id === parseInt(req.params.id));
    
    if (!produto) {
      return res.status(404).json({ erro: 'Produto não encontrado' });
    }
    
    const { nome, categoria, preco } = req.body;
    if (nome) produto.nome = nome;
    if (categoria) produto.categoria = categoria;
    if (preco) produto.preco = preco;
    
    res.json(produto);
  }

  deletar = (req, res) => {
    const index = this.produtos.findIndex(p => p.id === parseInt(req.params.id));
    
    if (index === -1) {
      return res.status(404).json({ erro: 'Produto não encontrado' });
    }
    
    const produtoRemovido = this.produtos.splice(index, 1)[0];
    res.json(produtoRemovido);
  }
}

export default ProdutoController;