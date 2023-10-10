"use strict";

let nota1 = 10;
let nota2 = 9;
let media = (nota1+nota2)/2
let mensagem;







if(media >=7){
    mensagem = "Aprovado(a)"
}else if (media >= 5){
    mensagem = "Recuperação"
}else {
    mensagem = "Reprovado(a)"
}


console.log(`O Aluno(a) está com a média ${media} e está ${mensagem}!!!`)
