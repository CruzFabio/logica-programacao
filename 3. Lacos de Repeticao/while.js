/*
>>> WHILE (enquanto)
    Sintaxe:
        while(i < 4){
            codigo
            i++
        }

É uma alternativa ao FOR

ATENÇÃO: se não for colocado o incremento(contador) o bloco irá entrar em um looping infinito.


*/

console.log("-----------------------------------")
console.log("|            EXEMPLO 1            |")
console.log("-----------------------------------")

let contador = 0
while(contador < 3){
    console.log("Olá")
    contador++
}

console.log("...................................")

//Neste exemplo observe que a variável inicia com 3 como a o exemplo do código informa que ele executará em caso de valores menores que 3 nada será feito, o comando irá pular e prosseguir. (diferente do do-while)
console.log("-----------------------------------")
console.log("|            EXEMPLO 2            |")
console.log("-----------------------------------")

let i = 3
while(i < 3){
    console.log("Olá")
    i++
}

console.log("...................................")