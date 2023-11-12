/**
 * Objeto.value
 * Objeto.entries
 * Objeto.assign(des, any)
 * Objeto.getOwnPropertyDescriptor(o, 'prop)
 * ...(spread)
 * 
 * // Ja vimos
 * Objeto.key (retorna as chaves)
 * Objeto.freeze (congela o objeto)
 * Objeto.defineProperties (define Varias propriedades)
 * Objeto.defineProperty (define uma propriedade)
 */

const produto = { nome: 'caneca', preco: 1.3};
const outraCoisa = {...produto,
material: 'porcelana' };

Object.defineProperty(produto, 'preco', {
    writable: false,
    enumerable: false,
    configurable: false
})

outraCoisa.nome = 'Outro nome';
outraCoisa.preco = 19.4;
console.log(produto);
console.log(outraCoisa);
delete produto.preco;

console.log(Object.keys(produto));
console.log(Object.getOwnPropertyDescriptor(produto, 'preco'));
Object.freeze(outraCoisa);