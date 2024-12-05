"use strict";

var alunos = ["Joao", "Maria", "Camila", "Valentina", "José", "Victor"];
var notas = [7, 5, 10, 9, 5, 6];
var listaNotas = alunos.map(function (value, index) {
  return {
    nome: value,
    nota: notas[index]
  };
});
console.log(listaNotas);
var alunosAprovados = listaNotas.filter(function (item) {
  return item.nota >= 6;
});
console.log(alunosAprovados);