const palavras = ["laranja", "banana", "abacate"];

for (let i = 0; i < palavras.length; i++) {
  let palavraInvertida = '';
  for (let j = palavras[i].length - 1; j >= 0; j--) {
    palavraInvertida += palavras[i][j];
  }
  console.log(palavraInvertida);
}
