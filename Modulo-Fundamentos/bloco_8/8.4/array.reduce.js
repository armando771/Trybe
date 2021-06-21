
//   O ARRAY.REDUCE E diferente das outras HOF'S: Ele possui um parametro a mais para a funçao que recebe como parametro. 
// esse parametro e chamado de ACUMULADOR, comumente referido como acc,
// Ele serve para acumular dentro de si os resultados das funçoes:


// METODO USANDO ARRAYS 

const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0;
// A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}
console.log(sumNumbers); // 113

// USANDO O REDUCE

const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113






const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 10 42 57 60 62 57 113
  return result + number;
  };

const sumNumbers = numbers.reduce(getSum, 11);

// console.log(sumNumbers); // 123

// Ao adicionar o segundo parametro ao reduce (no caso o 11), esse parametro sera colocado como valor inicial do nosso acumulador (result)
// caso nao seja passado nenhum parametro o valor sera a primeira posicao do array! 




