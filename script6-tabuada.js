
//correção professor

function mostrarTabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    alert(`${numero} x ${i} = ${resultado}`);
  }
}

// Exemplo de uso
let numero = prompt('digite o número para calcular tabuada');
mostrarTabuada(numero);