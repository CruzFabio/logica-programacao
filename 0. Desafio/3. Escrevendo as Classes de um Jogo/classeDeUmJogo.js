/**
 * VERSÃO 1
 * Utilizando switch case
 */

class hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let tipoHero = this.tipo
        
        switch (tipoHero){
            case "Mago":
                console.log(`O ${this.tipo} atacou usando magia`)
                break
            case "Guerreiro":
                console.log(`O ${this.tipo} atacou usando a espada`)
                break
            case "Monge":
                console.log(`O ${this.tipo} atacou usando artes marciais`)
                break
            case "Ninja":
                console.log(`O ${this.tipo} atacou usando shuriken`)
                break
        } 

    }
}

let tipoHeroi = new hero("Fabio", 44, "Monge")

tipoHeroi.atacar()

/**
 * 
// ==== VERSÃO 2 ===
//   Utilizando função e variável
//------------------------------------------------------
    class hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let ataque = {
            mago: `magia`,
            guerreiro: `espada`,
            monge: `artes marciais`,
            ninja: `shuriken`
        }
        let tipoAtaque = ataque[this.tipo]
        console.log(`O ${this.tipo} atacou usando ${tipoAtaque}`)
    }
}

let typeHero = new hero(`Preston`, 16, `monge`)

typeHero.atacar()
 */
