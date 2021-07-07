var min=0
var max=10
var numero = Math.random() * (max - min) + min;
numero = Math.ceil(numero)
var resposta =0



var resposta_usuario="y"
var jogar= true


window.onload = ()=>{
    document.querySelector("#queijo").addEventListener("click",()=>{
        escolhe_numero()
        jogo()
    })
}



function jogo(){
    if (resposta == numero) {
        // alert("voce acertou")
        mostra_resultado("voce acertou")
    }else{
        // alert("voce errou")
        mostra_resultado("voce errou")
    }
}

function escolhe_numero(){
    numero = Math.random() * (max - min) + min;
    numero = Math.ceil(numero)
    resposta = Number(document.querySelector("#form_input").value)
    // resposta = Number(prompt("entre com um numero(de 1 ate "+ max))
}

function mostra_resultado(texto){
    document.querySelector("#game_result").innerHTML = texto
    document.querySelector("#game_number").innerHTML = "O numero era: " + numero
}
