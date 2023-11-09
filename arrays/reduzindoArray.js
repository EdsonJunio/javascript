// Soma todos os numeros (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)

const pessoas = [
    {nome: 'edson', idade: 28},
    {nome: 'tuca', idade: 23},
    {nome: 'carlos', idade: 35},
    {nome: 'julio', idade: 12},
    {nome: 'marcos', idade: 76},
    {nome: 'jaison', idade: 47},
];

const maisvelho = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
})