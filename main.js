function Livro(titulo, editora, autor) {
    this.titulo = titulo;
    this.editora = editora;
    this.autor = autor;

    this.dizLivro = function() {
        console.log('Livro: ' + this.titulo);    
    }      
}

function Venda(titulo, editora, autor, formato, preco, tipoDeVenda, formaDePagamento) {
    this.formato = formato
    this.tipoDeVenda = tipoDeVenda;
    this.formaDePagamento = formaDePagamento;
    let _preco = preco;

    Livro.call(this, titulo);

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
        console.log('Formato: ' + this.formato);
        console.log('Venda: ' + this.tipoDeVenda);
        console.log('Pagamento tipo: ' + this.formaDePagamento);
    }

}

const venda1= new Venda("Poemas de temporal e mansidão", "Planeta", "Ryane Leão", "Físico", 30, "Presencial", "Débito");
const venda2 = new Venda("Como matei minha querida família", "Darkside", "Bella Mackie", "Digital", 40, "On-line", "Crédito");
const venda3 = new Venda("Pequena coreografia do adeus", "Companhia das Letras", "Aline Bei", "Físico", 60, "On-line", "Débito");


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