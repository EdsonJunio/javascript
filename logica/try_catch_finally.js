

try {
    console.log('abrir um arquivo');
    console.log('Manipular o arquivo e gerou erro');
    console.log('Fechar o arquivo');
    
} catch (error) {
    console.log('Tratar o erro ');
}finally{
    console.log('Finally eu sempre serei executado');
}

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de Date');
    }

    if(!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
const data = new Date('01-01-1970 12:56:12');
const hora = retornaHora(11);
console.log(hora);
} catch (e) {
 // Tratar erro
 console.log(e);
} finally {
    console.log('Tenha um bom dia');
}