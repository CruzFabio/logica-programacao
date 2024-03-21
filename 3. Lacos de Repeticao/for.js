/*
São estruturas que irão se repetir até que determinada ação seja verdadeira.

>>> FOR
    Tem a inicialização e incremento da variável de controle na própria declaração, enquanto a estrutura "while" exige a declaração fora dela. 
   
    Sintaxe:
    informamos a variável contadora, depois a regra para que quando atingir ele sair do laço e por último a quantidade de incremento. 
        for(let i = 0; i < 4; i++){
            codigo
        }
*/

console.log("-----------------------------------")
console.log("|            EXEMPLO 1            |")
console.log("-----------------------------------")

for(let contador = 0; contador < 4; contador++){
    console.log(contador)
    console.log("Agora o contador vale " + contador)
}
console.log("...................................")


console.log("-----------------------------------")
console.log("|            EXEMPLO 2            |")
console.log("-----------------------------------")

let pontosDeVida = 0

for(let i = 0; i <=10; i++){
    pontosDeVida +=1
    console.log("Pontos de vida adquiridos: " + i)
}

console.log("Total de interação: " + pontosDeVida)

console.log("...................................")