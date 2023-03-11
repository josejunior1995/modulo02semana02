const array = ['java', 'javascript', 'python', 'html', 'css'];

let menorPalavra = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i].length < menorPalavra.length) {
    menorPalavra = array[i];
  }
}

console.log('A menor palavra do array é:', menorPalavra);
