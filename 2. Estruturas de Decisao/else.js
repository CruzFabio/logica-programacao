/*
>>> ELSE 
É executa um bloco de código quando a condição dentro do IF for falsa.
*/
let possuiOvos = false
let itensComprados = ""

if(possuiOvos) {
    itensComprados = "Leite"
} else {
    console.log("Passar na sessão de congelados")
    itensComprados = "Lasanha"
}

console.log("Item comprado: " + itensComprados)
