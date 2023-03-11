const array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = '';

for (let i = 0; i < array.length; i++) {
  if (array[i].length > maiorPalavra.length) {
    maiorPalavra = array[i];
  }
}

console.log('A maior palavra do array é:', maiorPalavra);
