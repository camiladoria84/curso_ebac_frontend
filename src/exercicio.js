"use strict";
function calculaArea(largura, altura) {
    return largura * altura;
}
const largura = 10;
const altura = 4;
const resultado = calculaArea(largura, altura);
console.log(`A área é: ${resultado}`);
class Cliente {
    constructor(nome) {
        this.nome = nome;
    }
    dizOla() {
        return `Olá, ${this.nome}`;
    }
}
const cliente1 = new Cliente("Camila");
console.log(cliente1.dizOla());
