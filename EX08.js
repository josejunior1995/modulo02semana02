const n = 5; // número de lados do polígono
const l = 10; // medida do lado (em cm)

let area;

if (n < 3) {
  console.log("Não é polígono");
} else if (n === 3) {
  area = (l * l * Math.sqrt(3)) / 4;
  console.log(`Triângulo - área: ${area} cm²`);
} else if (n === 4) {
  area = l * l;
  console.log(`Quadrado - área: ${area} cm²`);
} else if (n === 5) {
  area = (5 * l * l) / (4 * Math.tan(Math.PI / 5));
  console.log(`Pentágono - área: ${area} cm²`);
}
