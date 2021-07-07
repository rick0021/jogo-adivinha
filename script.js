var min=0
var max=10
var numero = Math.random() * (max - min) + min;
numero = Math.ceil(numero)
var resposta =0



var resposta_usuario="y"
var jogar= true
while(jogar==true){
    resposta = Number(prompt("entre com um numero(de 1 ate "+ max))
    if (resposta == numero) {
        alert("voce acertou") 
    }else{
         alert("voce errou")
    }
    alert(numero)
    
    
    resposta_usuario= prompt("jogar de novo?(y/n)")
    if(resposta_usuario=="y"){
        jogar=true
    }else{
        jogar=false
    }

}
alert("ate mais")