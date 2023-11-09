
// Retorna os numeros maiores que 10
const numeros = [2, 10, 30, 49, 58, 10, 38, 4, 5, 6, 9, 21, 94 ].filter(isBiginth);

function isBiginth(numero) {
    return numero >50;
}
console.log(numeros);

// retorne as pessoas cuja nome termina com a 
const pessoas = [
    {nome: 'edson', idade: 28},
    {nome: 'tuca', idade: 23},
    {nome: 'carlos', idade: 35},
    {nome: 'julio', idade: 12},
    {nome: 'marcos', idade: 76},
    {nome: 'jaison', idade: 47},
];
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >=5);
const pessoasComIdadeMaiorque50 = pessoas.filter(obj => obj.idade >=50);
const pessoasComNomeA = pessoas.filter(function(obj){
    return obj.nome.toLowerCase().endsWith('a');
});
console.log(pessoasComNomeGrande);
console.log(pessoasComIdadeMaiorque50);
console.log(pessoasComNomeA);