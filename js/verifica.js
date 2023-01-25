function verificaSeOchutePossuiUmValorValido(chute) {
    var numero = +chute

    if (chuteInvalido(numero)) {
        
        
        if(chute=== "game over"){
            document.body.innerHTML=`
            <h2>GAME OVER!!!</h2>
            <h3>Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar-game-over">Jogar novamente</button>`
            document.body.style.backgroundColor="black";



        }else{
            elementoChute.innerHTML += `<div>Valor invalido</div>`
        }
        return
    }

    if (numeroInvalido(numero)) {
        elementoChute.innerHTML += `Numero não permitido`;
        return
    }
    if(numero ===NumeroSecreto){
        document.body.innerHTML =`
        <h1>voce acertou!</h1>
        <h2> O numero secreto era ${NumeroSecreto}</h2>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }else if(numero> NumeroSecreto){
        elementoChute.innerHTML +=`<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    }else{
        elementoChute.innerHTML +=`<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`

    }

   
}



function numeroInvalido(numero) {
    return numero > maiorValor || numero < menorValor
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}


document.body.addEventListener('click', e=>{
    if(e.target.id=='jogar-novamente'){
        window.location.reload()
    }
})