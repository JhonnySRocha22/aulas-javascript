"use strict";

/* Sobre Funções 

Funções são blocos d código que 
podem ser executados e reaproveitados
em praticamente qualquer lugar de 
uma aplicação/site.


usar funções também é benéfico do 
ponto de vista de organização de código.


o JS posui centenas de funções prontas:
log(), alert(), toFixed(2), prompt()
ect...
*/



/* Como escrever funções no JS? */


//Forma 1: função anônima

const exemplo1 = function(){
    console.log("Função Anônima");
};

//Forma 2: função nomeada/declarada
function exemplo2(){
    console.log("Função nomeada/declarada");
}

//Forma 3: Arrow function
const exemplo3 = () => {
    console.log("Arrow Function");
};


//Chamada de função para execução

exemplo1();
exemplo2();
exemplo3();


/* Função com parâmetros e retorno de dados/resultados. */
function somar(valor1, valor2){
   return valor1 + valor2;
}


/* Chamamos a função diversas vezes e passando valores diferentes como parâmetros. */
console.log( somar (10, 20) );
console.log( somar (15, 50));
console.log( somar (30, 47.8));