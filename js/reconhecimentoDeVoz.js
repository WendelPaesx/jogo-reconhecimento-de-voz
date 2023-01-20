var elementoChute = document.querySelector("#chute")

var SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;
var recognition = new SpeechRecognition()

recognition.lang = 'pt-br'
recognition.start()


recognition.addEventListener('result', onSpeak)

function onSpeak(e) {

    var chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)

    verificaSeOchutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse:</div>
        <span class="box" >${chute}</span>`
}
