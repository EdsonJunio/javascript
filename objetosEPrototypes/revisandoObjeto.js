const pessoa = {
    nome: 'edson',
    sobrenome: 'almeida',
}
console.log(pessoa.nome);
console.log(pessoa.sobrenome);

// verboso
console.log(pessoa['nome']);
console.log(pessoa['sobrenome']);
// ---------------------------------------------------------
// construtor
const pessoa2 = new Object();
pessoa2.nome = 'carlos';
pessoa2.sobrenome = 'Madruga';

// literal
const pessoa3 = {
    nome: 'luiz',
    sobrenome: 'junga'
}

console.log(pessoa2,pessoa3);

// ----------------------------------------------------------



const pessoa4 = new Object();
pessoa4.nome = 'carlos';
pessoa4.sobrenome = 'Madruga';
pessoa4.idade = 28;
pessoa4.falaNome = function() {
    console.log(`${this.nome} esta falando.` );
}
pessoa4.falaNome();
pessoa4.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};
console.log(pessoa4.getDataNascimento());
// ----------------------------------------------------------

for(let chave in pessoa4) {
    console.log(pessoa4[chave]);
}

// ----------------------------------------------------------
//  Factory function / Constructor functions / Class

//actory function
function criaPessoa(nome, sobreNome) {
    return {
        nome,
        sobreNome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobreNome}`;
        }
    };
}

const p1 = criaPessoa('Edson', 'Tuca');
console.log(p1.nomeCompleto);

// -----------------------------------------------------------
//Constructor functions
// {} <- this -> this
function Pessoa3(nome1, sobreNome1) {
    this.nome1 = nome1;
    this.sobreNome1 = sobreNome1;
}

const p2 = new Pessoa3('juca', 'jaca');
console.log(p2);
// -----------------------------------------------------------

Object.freeze(p1); // nao deixa o variavel ser alterada