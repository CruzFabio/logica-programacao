import java.util.Scanner;

public class Desafio {
    public static void main(String[] args){
        //Lendo valores de entrada
        Scanner leitorDeEntrada = new Scanner(System.in);
        float valorSalario = leitorDeEntrada.nextFloat();
        float valorBeneficios = leitorDeEntrada.nextFloat(); 

        //Criando o processamento
        float valorImposto = 0;
        if(valorSalario >= 0 && valorSalario <= 1100.00){
            valorImposto = 0.05F * valorSalario;
        } else if(valorSalario >= 1100.01 && valorSalario <= 2500.00){
            valorImposto = 0.10F * valorSalario;
        } else {
            valorImposto = 0.15F * valorSalario;
        } 

        //Calcula e imprime a saída (com 2 casas decimais)
        float saida = valorSalario - valorImposto + valorBeneficios;
        System.out.println(String.format("%.2f", saida));
        
    }
}
