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


function Formato(titulo, autor, formatoDoLivro) {
    this.formatoDoLivro = formatoDoLivro;

    Livro.call(this, titulo, autor); 

    this.dizFormato = function() {
        console.log('No formato: ' + this.formatoDoLivro);
    }
}


const editora1 = new Editora("Poemas de temporal e mansidão", "Ryane Leão", "Planeta");
const editora2 = new Editora("Como matei minha querida família", "Bella Mackie", "Darkside");
const editora3 = new Editora("Pequena coreografia do adeus", "Aline Bei", "Companhia das Letras");

const formato1 = new Formato("Poemas de temporal e mansidão", "Ryane Leão", "Físico");
const formato2 = new Formato("Como matei minha querida família", "Bella Mackie", "Digital");
const formato3 = new Formato("Pequena coreografia do adeus", "Aline Bei", "Físico");

editora1.dizLivro();
editora1.dizEditora();
formato1.dizLivro();
formato1.dizFormato();