/**
O laço for...in interage sobre propriedades enumeradas de um objeto, na ordem original de inserção. O laço pode ser executado para cada propriedade distinta do objeto.

Syntax
for (variavel in objeto) {...
}

variavel
Uma propriedade diferente do objeto é atribuida em cada iteração.

objeto
Objeto com as propriedades enumeradas.

Propriedades deletadas, adicionadas ou modificadas
O laço for...in iterage sobre as propriedades de um objeto em uma ordem arbitrária (veja o delete (en-US) ). Se uma propriedade é deletada durante a execução do loop, ela se torna indisponível para ser acessada depois. É recomendável não adicionar, remover ou alterar propriedades novas ao objeto durante a execução do laço (durante o loop)

Iteração em Arrays e for...in
Nota: for...in não deve ser usado para iteração em uma Array onde a ordem é importante, visto que ele iterage em uma ordem arbitrária.

Indices de arrays somente se tornam propriedades enumeradas com inteiros (integer). Não há garantia de que utilizando o laço for...in os indices de um array serão retornados em uma ordem particular ou irá retornar todas as propriedades enumeráveis. É recomendável utilizar o laço for com índices numéricos ou Array.prototype.forEach() ou ainda for...of quando iteragir sobre arrays onde a ordem é importante.


 */
let mercado = {
    corredor1: ["massas", "molhos", "temperos", "condimentos"],
    corredor2: ["açúcar", "sal", "arroz", "feijão"],
    corredor3: ["biscoito", "chocolate", "balas", "salgadinhos"],
    
    frios: {
        laticinios: ["queijo", "presunto", "mortadela", "manteiga", "salame"],
        acougue: {
            bovino: ["paleta", "acem", "patinho", "figado", "maminha"],
            porco: ["costela", "pernil", "filé mignon"],
            peixaria: ["cação", "polaca", "sardinha", "salmão", "cavala", "pescado"]
        } 
    }
}

function estoque(mercado){
    console.log(`No corredor 1 temos ${mercado.corredor1}`)
    console.log(`No corredor 2 temos ${mercado.corredor2}`)
    console.log(`No corredor 3 temos ${mercado.corredor3}`)
    console.log(`Na ilha de laticínios há ${mercado.frios.laticinios}`)

    for(let index in mercado.frios.acougue){
        console.log(mercado.frios.acougue[index])
    }

}

estoque(mercado)