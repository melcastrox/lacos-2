// Exercício 01 – Comprar sorvete (while)

let resposta = prompt("Você deseja comprar mais sorvete? (S/N)").toUpperCase();
let total = 0;

while (resposta === "S") {
  total += 3.00;
  resposta = prompt("Deseja comprar mais sorvete? (S/N)").toUpperCase();
}

console.log(`Valor total da compra: R$${total.toFixed(2)}`);

// Exercício 02 – Contagem regressiva (for)

let numero = Number(prompt("Digite um número para iniciar a contagem regressiva:"));

for (let i = numero; i >= 0; i--) {
  console.log(i);
}

// Exercício 03 – Ranking de filmes (array + for)
const filmesFavoritos = [
  "Vingadores: Ultimato",
  "A Origem",
  "Matrix",
  "Interstellar",
  "Parasita"
];

for (let i = 0; i < filmesFavoritos.length; i++) {
  console.log(`${i + 1} - ${filmesFavoritos[i]}`);
}
