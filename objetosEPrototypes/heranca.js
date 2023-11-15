// Produto -> aumento, desconto
// Camiseta = cor, caneca = material

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento =  function(quantia) {
    this.preco += quantia;
}