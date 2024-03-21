let nome = "Baldur"
let nivelXp = 6500
let mensagem = "O Herói chamado " + nome + " está no nível de " 

if(nivelXp <= 1000){
    console.log(mensagem + "Ferro")
} else if (nivelXp > 1000 && nivelXp <= 2000){
    console.log(mensagem + "Bronze")
} else if (nivelXp > 2000 && nivelXp <= 5000){
    console.log(mensagem + "Prata")
} else if (nivelXp > 5000 && nivelXp <= 7000){
    console.log(mensagem + "Ouro")
} else if (nivelXp > 7000 && nivelXp <= 8000){
    console.log(mensagem + "Platina")
} else if (nivelXp > 8000 && nivelXp <= 9000){
    console.log(mensagem + "Ascendente")
} else if (nivelXp > 9000 && nivelXp <= 10000){
    console.log(mensagem + "Imortal")
} else if (nivelXp > 10000 ){
    console.log(mensagem + "Radiante")
}