// Produto -> aumento, desconto
// Camiseta = cor, caneca = material

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento =  function(quantia) {
    this.preco += quantia;
};

Camiseta.prototype.desconto =  function(quantia) {
    this.preco -= quantia;
};

function  Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;


const camiseta = new Camiseta('regata', 2.9, 'preta');
const produto = new Camiseta('gen', 7.9);
//camiseta.aumento(10);
console.log(camiseta);