class Pessoa {
    constructor(nome, sobreNome) {
        this.nome = nome;
        this.sobreNome = sobreNome;
    }

    falar() {
        console.log(`${this.name} esta falando. `);
    }

}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
    console.log(`${this.nome} esta falanso.`);
}

const p1 = new Pessoa('edson', 'sobre tudo');
const p2 = new Pessoa('camargo', 'teste po');

console.log(p1.beber);
console.log(p2);