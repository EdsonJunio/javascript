let imagem = function ePaisagem(larg, alt) 
{

    if(larg > alt) {
        return true;
    }
    return false;
}

console.log(imagem(89, 39));

const ePaisagem = (larg, alt) => larg > alt;
console.log(ePaisagem(89, 39));
