
const numeros = [2, 10, 30, 49, 58, 10, 38, 4, 5, 6, 9, 21, 94 ];

const numerosEmdoblro = numeros.map(function(valor) {
    return `Edson ->  ${2 * valor}`;
});

console.log(numerosEmdoblro);

// Para cada elemento
// Retorne apenas uma string com nome da pesoa
// Remova apenas a chave nome do objeto
// Adicione uma chave id em cada objeto id

const pessoas = [
    {nome: 'edson', idade: 28},
    {nome: 'tuca', idade: 23},
    {nome: 'carlos', idade: 35},
    {nome: 'julio', idade: 12},
    {nome: 'marcos', idade: 76},
    {nome: 'jaison', idade: 47},
];

const nomes = pessoas.map(obj => obj.nome);
const idade = pessoas.map(obj => ({idade: obj.idade}));

const ComIds = pessoas.map(function(obj, indice) {
    const newObj = { ...obj};
    newObj.id = indice;
    return newObj;
})

console.log(ComIds);