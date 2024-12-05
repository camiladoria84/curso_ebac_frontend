const alunos = ["Joao", "Maria", "Camila", "Valentina", "José", "Victor"];
const notas = [7, 5, 10, 9, 5, 6]

const listaNotas = alunos.map(function(value, index) {
    return {
        nome: value,
        nota: notas[index]
    }
})

console.log(listaNotas)

const alunosAprovados = listaNotas.filter(function(item) {
    return item.nota >= 6 
})

console.log(alunosAprovados);