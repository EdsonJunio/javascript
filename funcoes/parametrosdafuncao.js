// argumentos que sustenta todos os argumentos enviados
function funcao() {
    let total = 0;
    for (let  argumento of arguments) {
        total += argumento;
    }

    console.log(total)
} funcao(1, 2, 3, 4, 5);



function funcaov(a, b) {
    console.log(a + b)
} funcaov(1, undefined);


function funcaol({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
} funcaol({ nome: 'luiz', sobrenome: 'Edson', idade: 20});


function funcaob({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
} 
let obj = { nome: 'luiz', sobrenome: 'Edson', idade: 20};
funcaob(obj);

// rest operator
function funcaon(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+')   acumulador += numero;
        if (operador === '-')   acumulador -= numero;
        if (operador === '/')   acumulador /= numero;
        if (operador === '*')   acumulador *= numero;
    }
    console.log(acumulador);
    
} 
funcaon('+', 20, 20, 30, 40, 50);
funcaon('-', 20, 20, 30, 40, 50);
funcaon('*', 20, 20, 30, 40, 50);
funcaon('/', 20, 20, 30, 40, 50);


const conta = (...args) => {
    console.log(args);
}
conta('+', 20, 20, 30, 40, 50);