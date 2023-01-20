function verificaSeOchutePossuiUmValorValido(chute){
var numero = +chute

if (chuteInvalido(numero)){
    console.log("valor invalido");
}

if (numeroInvalido(numero))
console.log("valor invalido");
}

function numeroInvalido(numero) {
    return numero> maiorValor|| numero< menorValor
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}
a