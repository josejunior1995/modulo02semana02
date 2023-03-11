const calculate = document.getElementById('submit');

calculate.addEventListener('click', () => {
  const age = document.getElementById('age').value;
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;

  const bmi = weight / ((height / 100) ** 2);

  let faixaUsuario = '';

  if (bmi < 16) {
    faixaUsuario = 'Magreza grave';
  } else if (bmi < 17) {
    faixaUsuario = 'Magreza moderada';
  } else if (bmi < 18.5) {
    faixaUsuario = 'Magreza leve';
  } else if (bmi < 25) {
    faixaUsuario = 'Saudável';
  } else if (bmi < 30) {
    faixaUsuario = 'Sobrepeso';
  } else if (bmi < 35) {
    faixaUsuario = 'Obesidade Grau I';
  } else if (bmi < 40) {
    faixaUsuario = 'Obesidade Grau II (considerada severa)';
  } else {
    faixaUsuario = 'Obesidade Grau III (considerada mórbida)';
  }

  const result = document.getElementById('result');
  result.innerHTML = `Seu IMC é ${bmi.toFixed(2)}, você está na faixa de ${faixaUsuario}`;
  console.log(`Seu IMC é ${bmi.toFixed(2)}, você está na faixa de ${faixaUsuario}`);
});
