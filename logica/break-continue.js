const numeros = [1, 2, 3, 4, 5, 6];

for (let numero of numeros) {
    if (numero === 2) {
        console.log('pulei o numero 2');
        continue;
    }

    if (numero === 5) {
        console.log('numero 5 encontrado' );
        break;
    }

    console.log(numeros);
}