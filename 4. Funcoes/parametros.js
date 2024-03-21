/*
 As variáveis passadas dentro das funções são denominadas *Parâmetros*. 
    Não é necessário utilizar let/const, etc, seu uso consiste em chamar a função e dentro dela passar algum parâmetro dentro, com isso toda vez que ele receber esse elemento será gravado dentro de uma variável.

  sintaxe:
  ler("disco")

  function ler(armazenamento){
    console.log("Iniciando leitura do " + armazenamento)
  }

  Passamos Parâmetros quando desejamos que a mesma função tenha resultados diferentes.
*/

torrar("Australiano")

function torrar(pao){
    console.log("Pão do tipo: " + pao + " colocado na chapa...")
}

console.log("-------------------------------------------------")

/*
  Utilizando variáveis globais

*/

var nomeCliente = "Sidnelson"
emissorPedidos("Coca-Cola Zero")

function emissorPedidos(pedido){
    console.log("Item do pedido: " + pedido)
    console.log("Entregar ao cliente: " + nomeCliente)
}

console.log("-------------------------------------------------")


//Alternativa 2 - Declarando a variável dentro do escopo

emissorPedidos2("Sanduiche de Presunto e Queijo")
var nomeCliente

function emissorPedidos2(pedido){
    nomeCliente = "Carolina"
    console.log("Item do pedido: " + pedido)
    console.log("Entregar ao cliente: " + nomeCliente)
}

console.log("-------------------------------------------------")

/*
  Utilizando multiplos parâmetros

*/

tocar("vinil", "12 - Sometimes a fell like screaming")
tocar("CD", "7 - Aonde você mora")

function tocar(origem, faixa){
        console.log("Tipo de tocador: " + origem)
        console.log("Tocando a faixa " + faixa)
}

console.log("-------------------------------------------------")

//Se esquecer ou não tiver um segundo valor, podemos colocar alguma informação default que será executada nesses casos. Por boa prática, utilizamos ele sempre no final. exemplo: 

emissorPedidos3("Suco de tamarindo", 14.90)

function emissorPedidos3(itemPedido, valor, nomeCliente = "Não informado"){
        console.log("Pedido: " + itemPedido)
        console.log("Cliente: " + nomeCliente)
        console.log("Valor do Pedido: " + valor)
}

console.log("-------------------------------------------------")

/*
Utilizando o undefined
*/

emissorPedidos4("Suco de tamarindo", undefined, "Antonio Nunes")

function emissorPedidos4(itemPedido, valor = "99.90", nomeCliente){
        console.log("Pedido: " + itemPedido)
        console.log("Cliente: " + nomeCliente)
        console.log("Valor do Pedido: " + valor)
}

console.log("-------------------------------------------------")

