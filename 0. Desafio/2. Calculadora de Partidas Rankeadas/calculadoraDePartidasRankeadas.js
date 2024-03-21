let numVitoria = 6
let numDerrota = 35

let resultado = rankear(numVitoria, numDerrota)

function rankear(numVitoria, numDerrota){
    let saldoHankeada = numVitoria - numDerrota
    if(saldoHankeada > 0 && saldoHankeada < 10){
        ranking = "Ferro"
        } else if(saldoHankeada > 10 && saldoHankeada <= 20){
            ranking = "Bronze"
        } else if(saldoHankeada > 20 && saldoHankeada <= 50){
            ranking = "Prata"
        } else if(saldoHankeada > 50 && saldoHankeada <= 80){
            ranking = "Ouro"
        } else if(saldoHankeada > 80 && saldoHankeada <= 90){
            ranking = "Diamante"
        } else if(saldoHankeada > 90 && saldoHankeada <= 100){
            ranking = "Lendário"
        } else if(saldoHankeada >= 101){
            ranking = "Imortal"
        } else {
            ranking = "Poeira"
        }
        
        return "O herói tem um saldo de " + saldoHankeada + " e seu nível é " + ranking

}

console.log(resultado)

