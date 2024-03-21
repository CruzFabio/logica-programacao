var sapatos = {cor: "marrom", marca: "Nike", tamanho: 41}
console.log(sapatos.marca)
sapatos.marca = "Adidas"
console.log(sapatos.marca)
console.log(sapatos)
console.log(sapatos.par) //Tentar ler uma propriedade inexistente terá como valor "undefined".

console.log("------------------------------------------------------")

var vazio = {};
vazio.soQueNao = 1000;
console.log(vazio.soQueNao)

console.log("------------------------------------------------------")

var artigo = {"titulo": "Introdução ao JS", "5": 22};
console.log(artigo["5"]);
artigo["5"] = 20;
console.log(artigo[2 + 3]);
delete artigo["titulo"];
console.log(artigo)

console.log("------------------------------------------------------")
var nomePropriedade = "length";
var text = "alguma coisa"
console.log(text[nomePropriedade]);
