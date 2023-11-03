// return
// retorna um valor
// Termina a funcao

function soma (a, b) {
    return a + b;
}


function soma1 (a, b) {
    console.log(a + b);
}
soma(2, 4);


// document.addEventListener('click', function () {
// document.body.style.backgroundColor = blur;
// });

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Ola');
console.log(olaMundo);