let altura = prompt('Qual sua Altura em metros?');
let peso = prompt('Qual sua Peso em quilogramas?');

console.log(altura);
console.log(peso);


function imc(altura, peso) {
    return peso / altura * 2;
}

let valorImc = imc(altura, peso);

Math.random(valorImc)

let mensagemDeResposta = 'Seu Imc é ';

alert( `${mensagemDeResposta} ${valorArrendondado}`);