/*
Desafios JavaScript na DIO tem funções "gets" e "print" acessíveis globalmente:
    - "gets" : lê uma linha com dado(s) de entrada(inputs) do usuário;
    - "print" : imprime um texto de saída(output), pulando uma linha.
*/

//lendo os valores de entrada
const valorSalario = parseFloat(gets());
const valorBeneficios = parseFloat(gets()); 

//Calcule o imposto através da função "calcularImposto"
const valorImposto = calcularImposto(valorSalario);
//Calcula e imprime a saída (com 2 casas decimais)
const saida = valorSalario - valorImposto + valorBeneficios;
print(saida.toFixed(2));

//Função útil para calculo do imposto (baseado nas alíquotas)
function calcularImposto(salario) {
    let aliquota;
    if (salario >= 0 && salario <= 1100){
        aliquota = 0.05;
    } else if (salario >= 1100.01 && salario <= 2500.00) {
        aliquota = 0.10;
    } else {
        aliquota = 0.15;
    }
    return aliquota * salario;
}


