var win = 90
var def = 32

var jogador = [
    {nome: "baldur", win: 84, def: 23}
]

//var pontos = calcularPontos(win, def)
//var rank = rankeada(pontos)

function calcularPontos(win, def) {
    return win - def
    //rankeada()
}

function rankeada(nome, win, def){
    var pontuacao = calcularPontosS(win, def)
    var rank
    switch (true){
        case (pontos <= 10):
            rank = "ferro"
            //console.log("O total de pontos é " + pontos + " e seu nível é plástico")
            break
        case (pontos > 10):
            rank = "bronze"
            //console.log("O total de pontos é " + pontos + " e seu nível é latão")
            break
    }
        console.log(${rank})
}

