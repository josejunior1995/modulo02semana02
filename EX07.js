const numeros = [10, 17, 2429];

for (let i = 0; i < numeros.length; i++) {
  let fatorial = 1;
  for (let j = 1; j <= numeros[i]; j++) {
    fatorial *= j;
  }
  console.log(`O fatorial de ${numeros[i]} é ${fatorial}`);
}
