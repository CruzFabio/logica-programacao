class perfilDeJogador{
    constructor(nome, idade, tipoDeJogo = "Todos"){
        this.nome = nome
        this.idade = idade
        this.tipoDeJogo = tipoDeJogo
    }
    escrever(){
        console.log(`O jogador ${this.nome} possui ${this.idade} anos e seu estilo de jogo favorito é ${this.tipoDeJogo}`)
    }
}

let jogador = new perfilDeJogador("Fabio", 44)

jogador.escrever()