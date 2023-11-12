// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + '' + this.sobrenome;
}

// instancia
const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Funcao construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // <- Pessoa = Funcao construtora
const data = new Date();


console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);