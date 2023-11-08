//              -5         -4       -3         -2      -1
//               0          1        2          3       4
const nomes = ['Maria', 'Joao', 'Eduardo', 'Julia', 'tuca'];

// nomes.splice(indice, delete,elem1, elem2, elem3);
// pop
const removidos = nomes.splice(4, 1);
console.log(nomes, removidos);
