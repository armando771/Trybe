
// Parâmetros
// callback
// Função executada a cada iteração do array, recebendo três argumentos:
// element
// O elemento atual que está sendo processado no array.
// indexOptional
// O índice do elemento atualmente sendo processado no array.
// arrayOptional
// O array sobre o qual find foi chamado.
// thisArgOptional
// Opcional. Objeto usado como this quando executando o callback.



const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.

const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30

