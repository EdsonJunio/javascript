let valores = function value(num1, num2) {
    if (num1 > num2) {
        console.log('num1 e maior que num2');
    } else if (num1 < num2) {
        console.log('num2 e maior que num1');
    } else if (num1 === num2) {
        console.log('Numeros iguais');
    }
    
}

teste = valores(10, 11);
console.log(teste);


// consguir fazer com que o codigo ficasse o menor possivel
const  max2 = (x, y) => x > y ? x : y;
console.log(max2(10,2));