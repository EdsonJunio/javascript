const _velocidade = Symbol('valocidade');

class Carro {
    constructor(nome,) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade() {
        return this[_velocidade]
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('ferrari');



c1.velocidade = 99;
console.log(c1.velocidade);


class Pessoa {
    constructor(nome, sobreNome) {
        this.nome = nome;
        this.sobreNome = sobreNome;
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobreNome;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome =  valor.shift();
        this.sobreNome =  valor.join(' ');
    }
}

const p1 = new Pessoa('Luiz', 'Miranda');
p1.nomeCompleto = 'edson junio';
console.log(p1.nome, p1.sobreNome);
console.log(p1.nomeCompleto);