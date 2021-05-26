                //PARTE 1

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => name.some((nome) => nome === arr)
    
console.log(hasName('Ana', names))
 

               // PARTE 2

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
    
  return arr.every((compare) => compare === minimumAge)
  
  };
  
  console.log(verifyAges(people, 18));