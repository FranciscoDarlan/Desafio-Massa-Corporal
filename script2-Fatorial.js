let numeroDigitado = prompt('digite um numero');

function calculandoFatorial(numeroParametro) {
    console.log('entrei na função')
    let fatorialCalculado = !`${numeroDigitado}`;
}

let chamandoFunctionFatorial = calculandoFatorial(numeroDigitado);

alert(`O Fatorial do Número ${numeroDigitado} é ${chamandoFunctionFatorial}`);


/*
CORREÇÃO PROFESSOR>>>>>>

function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }

  return fatorial;
}

// Exemplo de uso
let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);

*/