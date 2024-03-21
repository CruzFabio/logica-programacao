function torrar(){
    console.log("Preparando a torrada...")
}

function prepararPao(){
    console.log("Iniciando o aquecimento da grelha...")
    console.log("Introduzindo o pão")
    torrar()
}

//torrar()

let estaLigada = true
if(estaLigada){
    prepararPao()
} else{
    console.log("Sem resposta")
}

//Exemplo do uso de funções, onde cada uma possui uma função específica.

function getData(){
    console.log("Lendo dados do usuário")
}

function checkValues(){
    console.log("Validando dados")
}

function sendToDataBase(){
    console.log("Gravando dados")
}

//Podemos ter uma função principal que chame as demais para executar a ação.

function main(){
    getData()
    checkValues()
    sendToDataBase()
}

main()