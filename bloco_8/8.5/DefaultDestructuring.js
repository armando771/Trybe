const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
  const { nationality } = person;

  console.log(nationality)

  // retorna undefined ao tentar acessar uma propiedade inexistente
  // com o metodo defaultDestructuring podemoss fazer isso igual no exemplo a baixo.

  const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
  const { nationality = 'Brazilian' } = person;
  console.log(nationality); // Brazilian



   // o mesmo pode ser feito na hora de desestruturar um array
const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0





