const calculate = document.getElementById('submit');
const usuarios = [];

calculate.addEventListener('click', () => {
  const nome = document.getElementById('name').value;
  const cidade = document.getElementById('city').value;
  const idade = document.getElementById('age').value;
  const altura = document.getElementById('height').value;
  const peso = document.getElementById('weight').value;

  const imc = peso / ((altura / 100) ** 2);
  
  let faixaUsuario = '';
  
  if (imc < 16) {
    faixaUsuario = 'Magreza grave';
  } else if (imc < 17) {
    faixaUsuario = 'Magreza moderada';
  } else if (imc < 18.5) {
    faixaUsuario = 'Magreza leve';
  } else if (imc < 25) {
    faixaUsuario = 'Saudável';
  } else if (imc < 30) {
    faixaUsuario = 'Sobrepeso';
  } else if (imc < 35) {
    faixaUsuario = 'Obesidade Grau I';
  } else if (imc < 40) {
    faixaUsuario = 'Obesidade Grau II (considerada severa)';
  } else {
    faixaUsuario = 'Obesidade Grau III (considerada mórbida)';
  }

  const usuario = {
    nome: nome,
    cidade: cidade,
    idade: idade,
    altura: altura,
    peso: peso,
    imc: imc,
    faixaUsuario: faixaUsuario
  };
  
  usuarios.push(usuario);
  
  console.table(usuarios);

  const alerta = `Olá, meu nome é ${usuario["nome"]}, tenho ${usuario["idade"]} anos, moro em ${usuario["cidade"]}, meço ${usuario["altura"]} cm, peso ${usuario["peso"]} kg, meu IMC é de ${usuario["imc"].toFixed(2)} e estou na faixa de ${usuario["faixaUsuario"]}.`;
  alert(alerta);
});
