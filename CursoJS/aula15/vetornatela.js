let num = [8, 1, 7, 4, 2, 9];

// console.log(valores);

// console.log(valores[0]);
// console.log(valores[1]);
// console.log(valores[2]);
// console.log(valores[3]);
// console.log(valores[4]);
// console.log(valores[5]);

//Percorrer valores dos indices.
// for (let pos in num) {
//   console.log(num[pos]);
// }

let pos = num.indexOf(500);

if (pos == -1) {
  console.log("O valor a ser buscado não foi encontrado!");
} else {
  console.log(`O valor está na posição ${pos}`);
}
