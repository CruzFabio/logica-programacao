var jogador = [
    {nome: "Baldur", win: 43, def: 13}
    {nome: "Kraven", win: 72, def: 41}
    {nome: "Leon", win: 159, def: 26}
]

function calculoPontos(win, def){
    return win - def
}

function rankDePartidas(nome, win, def){
    var pontos = calculoPontos(win, def)
    var rank

    switch (true) {
        case (pontos < 10):
            rank = "Ferro"
            break
        case (pontos > 10 && pontos <= 20):
            rank = "Bronze"
            break
        case (pontos > 20 && pontos <= 50):
            rank = "Prata"
            break
        case (pontos > 50 && pontos <= 80):
            rank = "Ouro"
            break
        case (pontos > 80 && pontos <= 90):
            rank = "Diamante"
            break
        case (pontos > 90 && pontos <= 100):
            rank = "Lendário"
            break
        case (pontos > 100):
            rank = "Imortal"
            break
        default:
            rank = "Inexistente"
            break
    }

    console.log("O jogador " + jogador + "tem saldo de " + pontos + " está no nível de " + rank)
}

for(var i = 0; i < jogador.length; i++); {
    var jogadorRank = jogador[i]
    rankDePartidas(jogadorRank.nome, jogadorRank.win, jogadorRank.def)
}

rankDePartidas()