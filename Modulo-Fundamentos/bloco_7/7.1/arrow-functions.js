const printName = function () {
    const myName = "Lucas";
    return myName;
  }
  console.log(printName());

  // este e um dos metodos comuns de declarar uma funçao! 
  // Aqui vamos ver outra maneira de faze-lo!!

  // A expressão acima está correta. Mas como você verá nos exemplos a seguir, é possível deixá-la ainda mais direta e léxica. Você aprenderá com alguns exemplos as vantagens de usarmos mais essa novidade do Javascript ES6 - arrow functions . Uma das aplicações para arrow functions é em funções anônimas. Em Javascript, é muito comum não precisarmos nomear funções, como mostrado no exemplo acima. Isso pode acontecer quando criamos funções que não serão reutilizadas, ou que serão passadas como argumento para uma outra função. Chamamos funções sem um nome específico de funções anônimas.


// arrow function e uma forma simplificada de se declarar uma funçao!


function soma(num1 , num2) {
    return num1 + num2;
}
console.log(soma(5,2)) 

// aqui podemos ver o exemplo de uso de uma funçao.


const subtracao = function(num1 , num2) {
    return num1 - num2;
}
console.log(subtracao(5,2))

// podemos tambem declarar funçoes em variaveis.



// PARA ULTILIZAR UMA ARROW FUNCTION USAMOS => (IGUAL MAIOR)
// SEGUE EXEMPLO A BAIXO

const sub = (num1 , num2) => {
    return num1 - num2;
}
console.log(sub(5,2))

// Este e um exemplo do uso de uma arrow function


// Maneiras Muito SIMPLIFICADAS de usar uma ARROW FUNCTION

const adicao = (num1, num2) => num1 +num2 ;

console.log(adicao(5,2))

// Dessa maneira podemos simplificar ao maximo nossas funçoes!!





// Outro exemplo de funçoes!

function contapalavras(frase) {

 return frase.split(' ').length;   
}
console.log(contapalavras('E ai Galera Belezinha Demais'));


function contaLetras(frase) {
    return frase.split('').length;
}
console.log(contaLetras('Fala Galera'))


// Essas mesmas funçoes ultilizando arrow functions => 

const contarPalavras = frase => frase.split(' ').length;
console.log(contarPalavras('Fala Galera Belezinha Demais'))


const contarLetras = (frase) => frase.split('').length;
console.log(contarLetras('Fala Galera Belezinha Demais'))

// nao e necessario colocar entre parenteses se voce tive apenas 1 parametro, mas colocalo nao ira impactar em nada

// mais de um parametro se torna OBRIGATORIO o uso dos parenteses !!





// USANDO OBJETOS EM FUNÇOES!

function dadosPessoas (nome, idade) {
    return {
        nome: nome,
        idade: idade
    }
}
console.log(dadosPessoas('Armando', 21))

console.log(`o aluno`,dadosPessoas('Armando',21))


// ultizilando uma arrow function.

const dados = (nome, idade) => ({nome: nome, idade: idade});
console.log(dados('Armando', 21))

// e necessario o uso dos parenteses entre as chaves pois ao usar {} o javaScript entende que este e o corpo da funçao, e nesse caso nao e o que queremos indicar!







// EXEMPLOS DE ARROW FUNCTION!


const printName = () => {
    const myName = "Lucas";
    return myName;
  }
  console.log(printName());

  // Exemplo de arrow function

  const printName = () => "Lucas";
console.log(printName());

// exemplo resumido da mesma arrow function

const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

// em funçoes com apens 1 parametro podemos omitir os parenteses

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));

//Em funções que recebem mais de um parâmetro, os parênteses não são omitidos:
