// factory function funcao fabrica
// construct function funcao construtura

function criaPessoa(nome, sobreNome, a, p) {
    return {
        nome,
        sobreNome,

        //Getter
        get nomeCompleto() {
            return `${nome} ${sobreNome}`;
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split();
            this.nome = valor.shift();
            this.sobreNome = valor.join('');
        },
        fala: function(assunto = 'nada') {
            return `${nome} esta ${assunto}.`;
        },
        altura: arguments,
        peso: p,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('edson', 'tuca', 1.8, 80);
p1.nomeCompleto = ' edson alemdia';
console.log(p1.nome);
console.log(p1.sobreNome);
console.log(p1.fala());

// --------------------------------------------------------------------




