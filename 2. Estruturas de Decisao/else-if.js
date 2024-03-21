/*
Recapitulando:
    if -> é executado quando uma condição for atendida (true)
    else -> é executado quando nenhuma condição for atendida

O uso do ELSE IF permite testar uma nova condição. 
Sua sintaxe é:
if(condição){
    codigo
    { else if(nova condição){
        codigo
    }
}
*/

let nivelDeFome = 4

if(nivelDeFome === 1) {
    console.log("Pouca fome")
} else if (nivelDeFome === 2) {
    console.log("Com fome")
} else if (nivelDeFome === 3) {
    console.log("Faminto")
} else {
    console.log("Só quero a sobremesa")
}

