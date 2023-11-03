const nome = 'edson';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'magalhes';
    falaNome();
}
usaFalaNome();