// defineProperty => Getter e Setters
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw TypeError('message');
            }

            estoquePrivado =  valor
        }
    });
}

function criaProduto() {
    return {
        get nome() {
            return this.nome;
        },
        set nome(valor) {
            valor =  valor.replace('coisa.', '');
            nome =  valor;
        }
    }
}

const p1 = new Produto('Camiseta', 20, 40);
console.log(p1);
console.log(p1.estoque);

const p2 = new Produto('Camiseta');
p2.nome = 'qualquer';
console.log(p2.nome);
