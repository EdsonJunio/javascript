// funcao construtora -> objeto
// funcao fabrica -> objeto
//  construtora -> Pessoa (new)

function Pessoa(nome, sobreNome) {

        // privados
    const ID = 12345;
    const metodoInterno = function() {

    };

    // Atributos ou metodos privados
    this.nome = nome;
    this.sobreNome =  sobreNome;

    this,metodo = function() {
        console.log(this.nome + 'sou um metodo');
    };
}

const p1 = new Pessoa('Edson', 'Junio');
const p2 = new Pessoa( 'Tuca', 'O melhor ');
p1.metodo();