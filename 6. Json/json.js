/**
JSON (JavaScript Object Notation)

## O que é JSON?
✅ Trata-se de um objeto simples composto por uma chave (identificador) e seu valor com o objetivo de tranferir dados.
✅ Sua estrutura básica é: Pares de chave-valor delimitados por ":" e separados por ","
✅ A finalidade de um JSON é armazenar e trocar dados estruturados entre diferentes sistemas

 */
/**
//EXEMPLO 1 
let invoice = {
    name: "Fabio",
    age: 44,
    products: {
        0: ["Mouse series G", 159.90],
        1: ["Teclado MK", 328.90],
        2: ["Monitor LG 21''", 490.90]

    } 

}

console.log(invoice)
//Para pegar um dado específico basta passar a variável + a chave que deseja
console.log(invoice.name)
console.log(invoice.products)

console.log("-----------------------------------------------------------")
*/

/**
//EXEMPLO 2 - Utilizando uma função para pegar os dados.
let invoice = {
    name: "Fabio",
    age: 44,
    products: {
        0: ["Mouse series G", 159.90],
        1: ["Teclado MK", 328.90],
        2: ["Monitor LG 21''", 490.90]

    } 

}
//💡 Ao invés de concatenação, vamos utilizar a crase para realizar a interpolação de String, desta forma é possível concatenar variáveis com texto de maneira mais prática.
//Utilizaremos o $ passando entre as chaves a variável e o dado que desejamos. 
function generateInvoice(invoice){
    console.log("----------------------------------------------------")
    console.log(`Comprador:  ${invoice.name}`)
    console.log(`Idade: ${invoice.age}`)
    console.log("----------------------------------------------------")
    console.log(`Descrição do Produto: ${invoice.products}`)
}

generateInvoice(invoice)

console.log("----------------------------------------------------")
\\A saída dos produtos exibirá [object Object] por se tratar de uma lista há uma maneira específica de tratar isso. Veremos a seguir.
 */

//EXEMPLO 3 - Exibindo uma lista com o uso do FOR IN 
let invoice = {
    name: "Fabio",
    age: 44,
    products: {
        0: ["Mouse series G", 159.90],
        1: ["Teclado MK", 328.90],
        2: ["Monitor LG 21''", 490.90],
        3: ["PS5", 3459.89]

    } 
}

function generateInvoice(invoice){
    console.log("----------------------------------------------------")
    console.log(`Comprador:  ${invoice.name}`)
    console.log(`Idade: ${invoice.age}`)
    console.log("----------------------------------------------------")

    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(` - ${productName}: R$ ${productPrice}`)
        //no for in não precisamos indicar a posição especifica, basta passar a variável de nosso for in dessa forma será implementado automaticamente.
    }

    //Sempre que existir um FOR IN sabemos que estamos percorrendo um objeto ou uma lista no JS.
}

generateInvoice(invoice)

console.log("----------------------------------------------------")

/**
 * Este é um exemplo de como seria transferir os dados sem o uso do JSON. Perceba o quanto seria trabalhoso seguir desta forma, pois a cada inclusão de ítens teremos de alterar dados em várias partes do código.
 * 
let name = "Fabio"
let age = 44;
let products = ["Mouse series G", "Teclado MK", "Monitor LG 21''"]
let productsValues = [159.90, 328.90, 490.90]

function generateInvoice(name, age, products, productsValues){
    console.log("----------------------------------------------------")
    console.log("Comprador: " + name)
    console.log("Idade: " + age)
    console.log("----------------------------------------------------")
    console.log("Descrição do Produto: " + products[0])
    console.log("Valor: " + productsValues[0])

}

generateInvoice(name, age, products, productsValues)

console.log("-----------------------------------------------------------")

 */