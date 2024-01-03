class Pessoa {
    constructor(nome, sobreNome) {
        this.nome  =nome;
        this.sobreNome = sobreNome
    }

    falar() {
        console.log(`${this.nome} esta falando`);
    }

    comer() {
        console.log(`${this.nome} esta comendo`);
    }

    beber() {
        console.log(`${this.nome} esta bebendo`);
    }
}

const p1 =  new Pessoa('Luiz', 'edson');
console.log(p1.beber());