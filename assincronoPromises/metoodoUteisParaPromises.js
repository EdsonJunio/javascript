function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject(false);
                return;
            }

            resolve(msg.toLocaleUpperCase() + ' - Pssei na promises');

        }, tempo);
    });
}

// Promise.all Promise.race Promisse.resolve Promisse.reject

/**const promises = [
 esperaAi('Promise 1', rand(1,3)),
 esperaAi('Promise 2', rand(1,3)),
 esperaAi('Promise 3', rand(1,3)),
 esperaAi(1999, rand(1,3)),

 ];

 Promise.race(promises)
 .then(function (valor){
 console.log(valor);
 })
 .catch(function (erro) {
 console.log(erro);
 })*/

function baixaPagina() {
    const emCache = true;
    if (emCache) {
        return Promise.resolve('Pagina em cache');
    } else {
        return esperaAi('Baixei a pagina', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log('Erro', e));