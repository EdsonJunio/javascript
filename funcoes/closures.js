function retornafuncao() {
    return function() {
        return nome;
    };

}

const funcao = retornafuncao('Luiz');
const funcao2 = retornafuncao('Joao');
console.dir(funcao);
console.dir(funcao2);