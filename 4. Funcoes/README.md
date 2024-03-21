Funções são ações que serão realizadas no código, elas promovem a reutilização de código e modularizar a lógica em partes gerenciáveis. 
Funções criam um pequeno mecanismo inteligente para processar algo no meio da aplicação.
Ela pode ou não receber um parâmetro de entrada/saída, mas ela sempre tem uma ação a realizar.

## Chamada 🆚 Declaração de uma função
    Uma declaração de função cria uma função, enquanto uma chamada de função executa o código dentro dela. 

## Boas práticas:
    ❌ nomes de funções não devem começar com números ou espaços;
    ✅ funções são ações, então utilize verbos como nomenclatura;
    ✅ Crie funções que executem apenas suas respectivas tarefas, se houver outras ações crie funções para elas.
    ✅ utilize a identação para criar uma organização no código.

## Funções ou Métodos?
    Em orientação a objetos as funções são chamadas de métodos.

## Sintaxe:

    function enviarEmail() {
        //lógica implementada aqui
    }

## Parâmetros
    As variáveis passadas dentro das funções são denominadas *Parâmetros*. 
    Passamos Parâmetros quando desejamos que a mesma função tenha resultados diferentes, a variável dentro da função irá variar de acordo com o que for chamado após o nome da função.
    ❌ Não é necessário utilizar let/const, etc.  
    Seu uso consiste na chamada da função passar entre os parênteses algum parâmetro, com isso toda vez que ele receber esse elemento será gravado dentro da variável que criarmos. 

    Ex. Sintaxe:

    ler("disco")

    function ler(armazenamento){
        console.log("Iniciando leitura do " + armazenamento)
  }

    ❗Atenção: as variáveis criadas dentro de uma função só existem em seu escopo

## Multiplos Parâmetros
    Podemos fazer uso de multiplos parâmetros em uma função, para isso passamos o parâmetro seguido de (,)
    Sintaxe:
        ler("disco", "vinil")

        function ler(armazenamento, tipo){
            codigo...
        }

    Em casos onde o parâmetro pode não existir ou ser opcional, por boa prática sempre deixamos este parâmetro para o final e colocamos uma informação como default.
    Sintaxe:
        f(nome, codigo)
        function(nome, codigo, valor = "a consultar"){
            codigo...
        }

### Usando o Undefined para parâmetros opcionais
    Em casos onde for necessário passar um parâmetro opcional e que está no meio de outros obrigatórios, fazemos uso da palavra "undefined"
    Sintaxe:
        f(nome, undefined, codigo)
        function(nome, valor, codigo){
            codigo...
        }
    ❌ Em geral não é uma boa prática utilizar o undefined por tornar o código burocrático
    ✅ O recomendado é deixar o valor opcional por último onde ficará mais fácil sua utilização e também será mais agradável a leitura.


## Variáveis de Escopo 🆚 Globais
    As variáveis de escopo existem apenas dentro das chaves, ou seja, não é possível ler dados dela fora do escopo, já as variáveis globais podem ser lidas em qualquer local do código, daí seu nome global.
    No JS existe além do let e do const a váriável chamada var, a diferença entre elas que está última possui escopo global.
    Não é recomendado seu uso justamente pelo "vazamento" de sua informação para todo o código. 