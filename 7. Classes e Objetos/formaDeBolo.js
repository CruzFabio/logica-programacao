/**
 * Criando nossa primeira classe
 * 
 * Sintaxe:
 * class nomeDaClasse{
 * 
 * }
 * 
 * Toda classe deve possuir um método especial chamado de "CONSTRUCTOR()" que trata-se de uma função. Além de guardar informações e funções a classe pode possuir um comportamento.
 * 
 * ## THIS
 * O "this" representa o nome da classe, usamos para nos referir a classe.
 * 
 * Para criar um objeto a partir da uma classe usamos a palavra-chave "NEW" seguida do nome da classe.
 * 
 * 
 */
/*
class formaDeBolo{
    //dentro do constructor passamos os parâmetros de como iremos receber a informação
    constructor(saborDaMassa, saborDoRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborDoRecheio = saborDoRecheio
    }
}
//Agora vamos criar nosso objeto, que é quando usamos de fato nossa classe.
let boloDeFesta = new formaDeBolo("Massa de baunilha", "Morango")
//Criamos uma variável que irá instanciar (criar) nosso objeto para isso fazemos uso da palavra "NEW" seguido do nome da classe. Também devemos passar os parâmetros necessários para a criação deste objeto, conforme destamos no construtor.

console.log(boloDeFesta)

//também é possível pegar só o valor da uma variável passando o nome dela
console.log(boloDeFesta.saborDoRecheio)
*/

/**
 * Exemplo 2 - vamos implementar uma função com métodos usando o mesmo código
 * Quando declaramos funções dentro das classes não usamos a palavra "FUNCTION" assim como para variáveis não usamos as palavras "LET" ou "CONST" e apenas o "THIS".
 */

class formaDeBolo{
    constructor(saborDaMassa, saborDoRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborDoRecheio = saborDoRecheio
    }
    //Vamos criar uma função que irá receber a informação e devolver com um texto pronto
    escrever(){
        console.log(`Sua encomenda é de um bolo com massa de ${this.saborDaMassa} e recheio de ${this.saborDoRecheio}`)
    }
}

let boloDeFesta = new formaDeBolo("Chocolate", "Nutella")
let boloSimples = new formaDeBolo("Simples", "Mandioca")

//também podemos atribuir outro valor após executar
boloDeFesta.saborDoRecheio = "Floresta Negra" 

//agora que temos uma funçao que escreve o console.log podemos chamar a função direto passando a variável + a ação (função)
boloDeFesta.escrever()
boloSimples.escrever()
