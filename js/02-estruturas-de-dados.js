/* Estruturas de Dados 

- Arrays (Vetores/Matrizes):
Listas de dados indexados, sequênciais e acessíveis por um índice numérico 

- Objetos
Listan de dados não indexados e formados por propriedades e valores.
*/

// Arrays
let cursos = ["Node.js", "React", "UX/UI Design", "SQL"];


console.log(cursos); // saída direta/estruturada (APENAS NO CONSOLE)
console.log(cursos[3]); //SQL


// Exercício
const dados = ["Cristiano", "Souza", 32, "11965753422", "Florianópolis"];

console.log(`${dados[0]} tem ${dados[2]} anos.`);


console.log("--------------------------------------------------------");

// Objeto

let carro = {
    marca: "Fiat", 
    modelo: "Uno com escada",
    portas: 2,
    cor: "branco", 
    opicionais: ["Ar condicionado", "vidros elétricos", "Alarme"]
};

console.log(carro);
console.log(carro.modelo);
console.log(`Carros da ${carro.marca} tem a cor ${carro.cor}.`);
console.log(`Este carro tem ${carro.opicionais[0]} e ${carro.opicionais[2]}.`);

// Exercício 02

let jogo = {
    tipo: "RPG",
    sistema: "D&D 5e",
    nomepersonagem: "Damakos",
    descricao: [1.85, 18, "cabelo verde", "barba cheia", "heterocromia", "bruxo" ]
}

console.log(`Na seção de ${jogo.tipo} que eu partipo no sistema ${jogo.sistema} `);
