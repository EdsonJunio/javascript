class DispositivoEletronico
{

    constructor(nome)
    {
        this.nome = nome;
        this.ligado = false;

    }

    ligar()
    {
        if (this.ligado) {
            console.log(this.nome + ' Ligado');
            return;
        }
        this.ligado = true;
    }

    desligar()
    {
        if (!this.ligado) {
            console.log(this.nome + ' Ja desligado');
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);

        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Olha, voce alterou o metodo ligar.');
    }
}
const s1 = new Smartphone('Sansung', 'Preto', 'Galaxy s 10');
console.log(s1);

const t1 = new Tablet('ipad', true);
console.log(t1.ligado);
t1.ligar();
t1.ligar();
