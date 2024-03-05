

function clacularIMC() {

    console.log('Entrou na função imc');

    let altura = document.getElementById('valorAltura').value;
    let peso = document.getElementById('valorPeso').value;

    console.log(altura);
    console.log(peso);

    let resultadoCalculo = (peso / altura / altura);
    let resultadoImc = parseInt(10000 * resultadoCalculo);

    let span = document.querySelector('span');

    span.innerHTML = (` Seu Calculo do IMC é ${resultadoImc}`);

    let button = document.querySelector('button');
    button.innerHTML = 'REINICIAR';

    return  
}

addEventListener(click, button)

