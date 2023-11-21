class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    //metodo de ibnstancia
    aumentarVolume() {
        this.volume += 2
    }

    //metodo de ibnstancia
    diminuirVolume() {
        this.volume -= 2;
    }

    //metodo de statico
    static trocaPilha() {
        console.log('Trocou');
    }
}

const controle1 = new ControleRemoto('lg');
controle1.aumentarVolume();
controle1.aumentarVolume();
ControleRemoto.trocaPilha();
console.log(controle1);