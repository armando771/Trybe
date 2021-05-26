

// Funcao some() retorna true se ao menos um elemento de um array satisfaz a condiçao

// FUncao every() retorna true se TODOS os elementos de um array satisfazem a condiçao


// O exemplo abaixo usa o some para verificar se possui algum nome que começa com a letra desejada:

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false


// O exemplo abaixo usará o every para verificar se o estudante passou em todas as matérias:

const grades = {
    portugues: 'Aprovado',
    matematica: 'Aprovado',
    ingles: 'Aprovado',
  };
  
  const verifyGrades = (studentGrades) => (
    Object.values(studentGrades).every((grade) => grade === 'Aprovado')
  );
  
  console.log(verifyGrades(grades));