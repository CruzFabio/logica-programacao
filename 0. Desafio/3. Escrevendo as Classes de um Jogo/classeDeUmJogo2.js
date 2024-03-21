class hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    pressStart(){
        console.log("| ------------------------------------- |")
        console.log("|  ...CARREGANDO DADOS..... aguarde     |")
        console.log("| ------------------------------------- |")

        console.log(`|  Jogador identificado: ${this.nome}          |`)
        console.log(`|  Idade ${this.idade}                             |`)
        console.log("| ------------------------------------- |")
        console.log("|  ESCOLHENDO LUTADOR.....              |")
        console.log("| ------------------------------------- |")

        console.log(`|  Seu combatente será o [${this.tipo}]        |`)
        console.log("|  === INICIANDO COMBATE ===            |")
        console.log("| ------------------------------------- |")
        console.log("|                                       |")

        
    }

    atacar(){
        this.pressStart()
        let ataque = {
            mago: `magia`,
            guerreiro: `espada`,
            monge: `artes marciais`,
            ninja: `shuriken`
        }
        let tipoAtaque = ataque[this.tipo]
        console.log(` >>> O ${this.tipo} atacou usando ${tipoAtaque}`)
    }
}

let typeHero = new hero(`Fabio`, 44, `monge`)

typeHero.atacar()