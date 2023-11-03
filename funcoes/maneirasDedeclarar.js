
// declaracao de funcao(Function hoistring)
falaOi();
function falaOi() {
    console.log('oi');
}

// First-class objects (Objetos de primeira classe)
// function expression

const souUmDado = function() {
    console.log('Sou um dado');
}





function executaFuncao(funcao) {
    funcao();
}

executaFuncao(souUmDado);

// Arrow function

const functionArrow = () => {
    console.log('Sou uma arrow function');
}

// Dentro de um objeto
const obj = {
    falar: function() {
        console.log('Estou falando...');
    }
};

obj.falar();
