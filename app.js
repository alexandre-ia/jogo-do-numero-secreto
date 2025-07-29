let listaNumerosSorteados = [];
let numeroLimite = 10;
let numero = gerarNumeroAleatorio();
let tentativas = 1;
exibirMensagemInicial();


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {reat:1.2});
}

function exibirMensagemInicial(){
exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p','Escolha um número entre 1 e 10');
}




function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numero){
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTetentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p', mensagemTetentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else { 
        if (chute > numero) {
            exibirTextoNaTela('p', 'Número é menor');
        } else {
         exibirTextoNaTela('p', 'Número é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let nmeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementoLista = listaNumerosSorteados.length;

    if(quantidadeElementoLista == numeroLimite){
        listaNumerosSorteados = [];
    }

    if(listaNumerosSorteados.includes(nmeroEscolhido)){
            return gerarNumeroAleatorio();
    }else{
        listaNumerosSorteados.push(nmeroEscolhido);
        return nmeroEscolhido;
    }
    
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';

}

function reiniciarJogo(){
    numero = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
   exibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled', true);
}