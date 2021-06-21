// o metodo destructuring nos permite acessar propiedades de objetos de forma mais dinamica e acertiva.



const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };

// passando a chave que queremos acessar logo em seguida o objeto, podemos assim acessar seu valor.

//   const { name } = product;
// console.log(name); // Smart TV Crystal UHD

// podemos acessar mais de 1 propiedade ao mesmo tempo

const { name, seller } = product;
console.log(name); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas


// SEGUNDO EXEMPLO

// PODEMOS TAMBEM REATRIBUIR NOMES A PROPIEDADE AO DECLARA-LA COM UMA VARIAVEL

  const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };
  

  // seguindo a sintaxe: { propriedade:nomeVariável } = objeto . Essa forma de acessar um valor de um objeto e atribuí-lo a uma variável é equivalente ao que temos abaixo: 

  const { a: name, b: classAssigned, c: subject } = student;
  
  console.log(name); // Maria
  console.log(classAssigned); // Turma B
  console.log(subject); // Matemática

// passando valores de um objeto como parametro para uma funcao


  const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };
  
  const printProductDetails = ({ name, price, seller }) => {
    console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
  };
  
  printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas
  