// Return a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)
const numeros = [2, 4, 56, 7, 87, 4, 56, 23, 45, 78];
const numerosPares = numeros.filter(function(valor) {
    return valor % 2 === 0;
}).map(function(valor) {
    return valor * 2;
}).reduce(function(ac, valor) {
    return ac + valor;
});
console.log(numerosPares);


const numeros1 = [2, 4, 56, 7, 87, 4, 56, 23, 45, 78];
const numerosPares1 = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((ac, valor) => ac + valor);
console.log(numerosPares1);