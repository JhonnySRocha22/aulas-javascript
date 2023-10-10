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
};

console.log(`Na seção de ${jogo.tipo} que eu partipo no sistema ${jogo.sistema} e o meu personagem ${jogo.nomepersonagem} com as seguintes caracteristicas ${jogo.descricao}. `);
console.log("----------------------------------------------------------");

// Objeto com Arrey e com outro objeto

let pessoa = {
    nome: "Shiryu",
    idade: 20,
    telefones: ["11-2135-0300", "11-91234-5678"],
    medidas: {
        peso: 65,
        altura: 1.75
    }
};


console.log(`Nome: ${pessoa.nome}`);
console.log(`Celular: ${pessoa.telefones[1]}`);
console.log(`Peso: ${pessoa.medidas.peso} kg`);
console.log(`Altura: ${pessoa.medidas.altura}m`);
console.log("-----------------------------------------------------------------------");

//Array de Objetos
let alunos = [
    {
        nome: "Naruto",
        idade:10
    },
    {
        nome: "Guts",
        idade: 30
    },
    {
        nome: "Dohko",
        idade: 120
    }
];

console.log(alunos[1].nome);
console.log(alunos[0].nome);
console.log(`O cavaleiro de ouro originalmente era o ${alunos[2].nome} de Libra que tem ${alunos[2].idade} anos.`);
console.log("-----------------------------------------------------------------------");



//Array como Matriz
let tecnologias = [
    ["HTML5", "CSS3", "JavaScript"], 
    ["PHP", "SQL", "APIs", "Node", "Phyton"],
    ["Figma", "Photoshop"]
];

console.log(tecnologias[1][3]);
console.log(tecnologias[2][1]);
console.log(tecnologias[0][0]);



console.table(cursos);
console.table(carro)




























