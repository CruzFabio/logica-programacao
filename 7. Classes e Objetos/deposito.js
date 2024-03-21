class criaConta{
    constructor(titular, cpf){
        this.titular = titular
        this. cpf = cpf
    }

    geraConta(){
        return Math.random()
    }

    contaCriada(){
        console.log("Conta criada com sucesso!")
        console.log(`Titular: ${this.titular}, CPF: ${this.cpf}`)
        console.log(`Conta número: ` + this.geraConta())
    }
}

let novaConta = new criaConta("Fabio Cruz", 2345678901)

novaConta.contaCriada()