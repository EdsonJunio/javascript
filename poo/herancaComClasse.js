class DispositivoEletronico
{
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar()
    {
        if (this.ligado) {
            console.log(this.nome + ' ja ligado');
            return;
        }

        this.ligado = true;
    }

    desligado()
    {
        if (!this.ligado) {
            console.log(this.nome + ' ja desligado');
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo

    }
}

const s1 = new Smartphone('sansung', 'preto', 'xiami');
console.log(s1);