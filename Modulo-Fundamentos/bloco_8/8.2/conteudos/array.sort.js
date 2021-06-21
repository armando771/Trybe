
// FUNÇAO SORT(): Permite ordenar um array de acordo com algum criterio estabelecido.

const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();

console.log(food);


// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]



// EXEMPLOS COM ARRAY DE NUMEROS!

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort();
console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

// POR PADRAO A HOF SORT(), RETORNA DE MANEIRA ERRADA UM ARRAY NUMERICO,
// POR ISSO E NECESSARIO IMPLEMENTAR ESTE METODO PARA SEU FUNCIONAMENTO CORRETO

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]


const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => b - a);
console.log(points); // [ 100, 40, 25, 10, 5, 1 ]