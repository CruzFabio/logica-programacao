# Return
    Uma função só pode retornar um valor ou um objeto.
    Sempre que desejamos retornar algo leve em consideração que:
    ✅ Pode ser utilizada uma expressão diretamente no return ex. return numA + numB
    ✅ Ou também uma variável ex. return somatorio

    Sintaxe:

    let resultado = soma(5, 7)

    function soma(numA, numB){
        let somatorio = numA + numB
        return somatorio
    }

    O return irá devolver o valor para quem chamá-lo, neste caso podemos utilizar de exemplo um console.log. Ex.
    console.log("O resultado desta função é "+ resultado)

    ❌ Não podemos utilizar o RETURN para retornar dois valores, primeiro ele irá resolver a expressão para depois retornar o valor e no caso de dois valores será retornado apenas um deles. ex. return numA, numB
