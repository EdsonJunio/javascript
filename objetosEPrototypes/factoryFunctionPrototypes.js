const falar = {
    falar() {
        console.log(`${this.nome} esta falando`);
    },
};

const comer = {
    comer() {
        console.log(`${this.nome} esta comendo`);
    },
};

const beber = {
    beber() {
        console.log(`${this.nome} esta bebendo`);
    },
};

const pessoaPrototype = Object.assign({}, falar, comer, beber );

function criarPessoa(nome, sobreNome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobreNome: {value: sobreNome}
    });
}

const p1 = criarPessoa('Luiz', 'Gustavo');
console.log(p1.falar());


const p2 = criarPessoa('maria', 'jusefina');
console.log(p2.falar());
