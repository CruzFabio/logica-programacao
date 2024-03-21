let resultado = soma(5, 10)

console.log("O resultado desta função é "+ resultado)

function soma(numA, numB){
    let somatorio = numA + numB
    return somatorio
}
console.log("---------------------------------------")

/*
    Uma função só pode retornar um valor ou um objeto. Observe o exemplo abaixo, neste caso o retorno será de apenas de um valor (5 ou 10) 
*/
let resultado2 = soma2(5, 10)

console.log("O resultado desta função é "+ resultado2)

function soma2(numA, numB){
    return numA, numB
}
console.log("---------------------------------------")

let resultado3 = soma3(5, 10)

console.log("O resultado desta função é "+ resultado3)

function soma3(numA, numB){
    return numA + numB
}
console.log("---------------------------------------")



function setNome1(nome){
    nome_usuario = nome;
}

/*function setNome2(nome){
    var nome_usuario2 = nome;
}
*/
setNome1("Fabi")
console.log(nome_usuario)
//setNome2("Cida")
//console.log(nome_usuario2)

console.log("---------------------------------------")

var nome = "Nickolas"
function getNome() {
    return nome
}

console.log(getNome())


console.log("---------------------------------------") 


var nome_user = "Campos"
function setNome3() {
    nome_user = nome2;
}

console.log(nome_user)
setNome3("Alice")
console.log(nome_user)