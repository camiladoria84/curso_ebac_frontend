function calculaArea(largura: number, altura: number): number {
    return largura * altura; 
}

const largura = 10
const altura = 4

const resultado = calculaArea(largura, altura);

console.log(`A área é: ${resultado}`)



class Cliente {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
    dizOla() {
        return `Olá, ${this.nome}`;
    }
}

const cliente1 = new Cliente("Camila");

console.log(cliente1.dizOla());



