/*
>>> DO WHILE (faça enquanto)
Executa um bloco de código pelo menos uma vez e depois repetir com base em uma condição.
    Sintaxe:
        do{

        } while(){
            codigo
            i++
        }

No DO-WHILE tudo que estiver dentro de seu escopo será executado pelo menos 1x, isso porque primeiro ele faz depois ele testa. Observe o exemplo 2.

ATENÇÃO: se não for colocado o incremento(contador) o bloco irá entrar em um looping infinito.


*/

console.log("-----------------------------------")
console.log("|            EXEMPLO 1            |")
console.log("-----------------------------------")

let contador = 0

do{
    console.log("ola")
    contador++
} while(contador < 3)

console.log("...................................")

console.log("-----------------------------------")
console.log("|            EXEMPLO 2            |")
console.log("-----------------------------------")

let i = 3

do{
    console.log("ola")
    i++
} while(i < 3)

console.log("...................................")