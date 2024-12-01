function Livro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    
    this.dizLivro = function() {
        console.log('Livro: ' + this.titulo); 
        console.log('Autor: ' + this.autor);   
    } 
    
    
}

function Editora(titulo, autor, emissao) {
    this.emissao = emissao;

    Livro.call(this, titulo, autor);

    this.dizEditora = function() {
        console.log('Editora: ' + this.emissao);
    }
    
}

function Formato(titulo, autor, emissao, formatoDoLivro) {
    this.formatoDoLivro = formatoDoLivro;

    Editora.call(this, titulo, autor, emissao);

    this.dizFormato = function() {
        console.log('No formato: ' + this.formatoDoLivro);
    }
}

function Venda(titulo, autor, editora, emissao, preco, tipoDeVenda, formaDePagamento) {
    this.tipoDeVenda = tipoDeVenda;
    this.formaDePagamento = formaDePagamento;
    let _preco = preco;

    Formato.call(this, titulo, autor, editora, emissao);

    this.getPreco = function() {
        return `Valor final: R$${_preco}`;
    }

    this.setPreco = function(valor) {
        if (typeof valor === 'number') {
            _preco = valor;
        }
    }

    this.promocao = function () {
        if (formaDePagamento === "Débito") {
            const novoPreco = _preco * 0.9;
            _preco = novoPreco;
        }
    }

    this.dizVenda = function() {
        console.log('Formato: ' + this.emissao);
        console.log('Venda: ' + this.tipoDeVenda);
        console.log('Pagamento tipo: ' + this.formaDePagamento);
    }

}

const venda1= new Venda("Poemas de temporal e mansidão",  "Ryane Leão", "Planeta", "Físico", 30, "Presencial", "Débito");
const venda2 = new Venda("Como matei minha querida família", "Bella Mackie", "Darkside", "Digital", 40, "On-line", "Crédito");
const venda3 = new Venda("Pequena coreografia do adeus", "Aline Bei", "Companhia das Letras", "Físico", 60, "On-line", "Débito");


venda1.dizLivro();
venda1.dizVenda();
venda1.promocao();
console.log(venda1.getPreco())


venda2.dizLivro();
venda2.dizVenda();
venda2.promocao();
console.log(venda2.getPreco())


venda3.dizLivro();
venda3.dizVenda();
venda3.promocao();
console.log(venda3.getPreco())