/*
>>> SWITCH/CASE 
    é uma estrutura de decisão semelhante ao "IF/ELSE", em seu uso faz-se necessário utilizar a expressão "BREAK" para que o código quando verdadeiro seja interrompido.
    Dentro de seu bloco podemos ter outras funções/atribuições de variáveis/if-else, etc é um bloco onde se pode programar.
    Também podemos utilizar para variáveis boleanas, mas neste caso podemos utilizar o if/else por ser algo de poucas decisões.

    Sintaxe:
        switch(variável) {
            case 1:
                codigo
                break
            case 2:
                codigo
                break
        }

    É parecida com o "if/else" mas em geral utilizamos quando trabalhamos com muitas opções desta forma evitamos o uso excessivo de "else if"
*/
console.log("-----------------------------------")
console.log("|            EXEMPLO 1            |")
console.log("-----------------------------------")

let fruta = "banana"

switch (fruta){
    case "laranja":
        console.log("Suco de Laranja")
    case "banana":
        console.log("Vitamina de banana")
    case "maçã":
        console.log("Suco de maçã")
}

console.log("...................................")

/* 
>>> BREAK

Sintaxe:
     switch(variável) {
            case 1:
                codigo
                break
            case 2:
                codigo
                break
        }

    Note que ao testarmos esta condição acima o código executou o bloco correspondente a fruta "banana" mas também executou o próximo comando "maçã" isso ocorre porque não sinalizamos para que o comando termine assim que o teste for concluído. 
    Para realizar a interrupção do comando, usamos o BREAK.
*/
console.log("-----------------------------------")
console.log("|            EXEMPLO 2            |")
console.log("-----------------------------------")
let fruta2 = "banana"

switch (fruta2){
    case "laranja":
        console.log("Suco de Laranja")
        break
    case "banana":
        console.log("Vitamina de banana")
        break
    case "maçã":
        console.log("Suco de maçã")
        break
}

console.log("...................................")

/*
>>> DEFAULT
    Seu uso faz com que no caso de todos os cases falhem ele retorne uma ação pré-determinada

    Sintaxe:
     switch(variável) {
            case 1:
                codigo
                break
            case 2:
                codigo
                break
            default:
                codigo
        }
*/
console.log("-----------------------------------")
console.log("|            EXEMPLO 3            |")
console.log("-----------------------------------")

let fruta3 = "Pera"

switch (fruta3){
    case "laranja":
        console.log("Suco de Laranja")
        break
    case "banana":
        console.log("Vitamina de banana")
        break
    case "maçã":
        console.log("Suco de maçã")
        break
    default:
        console.log("Fruta não relacionada")
}
console.log("...................................")

/*
    Algumas possibilidades de uso do Switch/Case.

    Podemos utilizar mais de um case para a mesma ação, basta inserir um acima do outro: 
*/
console.log("-----------------------------------")
console.log("|            EXEMPLO 4            |")
console.log("-----------------------------------")

let fruta4 = "abacate"

switch (fruta4){
    case "laranja":
    case "acerola":
        console.log("Suco de Laranja")
        break
    case "banana":
    case "abacate":
        console.log("Vitamina de " + fruta4)
        break
    case "maçã":
        console.log("Suco de maçã")
        break
}

console.log("...................................")

/*
    Também podemos utilizar números ao invés de strings.
*/
console.log("-----------------------------------")
console.log("|            EXEMPLO 5            |")
console.log("-----------------------------------")

let opcao = 1

switch (opcao){
    case 1:
        console.log("Consultar extrato")
        break
    case 2:
        console.log("Realizar depósito")
        break
    case 3:
        console.log("Realizar transferência")
        break
}

console.log("...................................")