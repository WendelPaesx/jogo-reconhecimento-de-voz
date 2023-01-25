var NumeroSecreto = gerarNumeroAleatorio()
var menorValor = 1
var maiorValor = 1000

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 1000)
}



var menorNumero = document.querySelector("#menor-valor")
menorNumero.innerHTML= menorValor
var maiorNumero = document.querySelector("#maior-valor")
maiorNumero.innerHTML = maiorValor





