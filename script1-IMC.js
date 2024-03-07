

function clacularIMC() {

    let alturaInput = document.getElementById('valorAltura').value;
    let pesoInput = document.getElementById('valorPeso').value;

    console.log(alturaInput)
    console.log(pesoInput)

    let resultadoCalculo = pesoInput / (alturaInput * alturaInput) * 10000;
    let resultadoImc = parseInt(resultadoCalculo);


    let span = document.querySelector('span');

    span.innerHTML = (` Seu Calculo do IMC é ${resultadoImc}`);

    let button = document.querySelector('button');
    button.innerHTML = 'REINICIAR';
}

/*
// correção do professor
let altura = prompt('digite sua altura');
let peso = prompt('digite seu peso');

function calculaIMC(altura, peso) {

    let imc = peso / (altura * altura) * 10000;
    let numberInteiro = parseInt(imc);
    alert(`sei imc é ${numberInteiro}`);
}

calculaIMC(altura, peso);
*/