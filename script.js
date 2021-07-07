var min=0
var max=10
var numero = Math.random() * (max - min) + min;
numero = Math.ceil(numero)
var resposta = Number(prompt("entre com um numero(de 1 ate "+ max))
if (resposta == numero) {
   alert("voce acertou") 
}else{
    alert("voce errou")
}
alert(numero)
