"use strict";

const alunos = [

{
    id: 1,
    nome: "Joãozinho"
},

{
    id: 2,
    nome: "Mariazinha"
},

{
    id: 3,
    nome: "Giuseppezinho"
}

]


let quantidadedeAlunos = alunos.length;

for(let i = 0; i < quantidadedeAlunos; i++){
console.log(alunos[i].nome);

}

console.log("--------------------------");

let i = 0;
while(i < quantidadedeAlunos ){
    console.log(alunos[i].nome);
    i++;
}
