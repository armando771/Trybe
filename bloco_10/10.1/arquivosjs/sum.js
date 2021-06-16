const sum = (a, b) => a + b;

module.exports = sum;



// Expect e matchers:

// EXPECT: RECEBE O VALOR A SER TESTADO E RETORNA UM OBJETO REPRESENTANDO UMA EXPECTATION. Sobre esse objeto pode-se chamar os matchers que JEST fornece

// matchers mais comuns em Jest:


/*
 toBe:
        Esse matcher testa igualdade estrita entre o expect e seu argumento

 Exemplo:
expect(5).toBe("5"): Este teste falharia pois um apresenta uma string e outro um valor numerico
*/

// toEqual:
// Em tipos primitivos ocorre a atribuição por valor,

let name = "Pedro";
let firstName = name;

name = "Carol";

console.log(name); // Carol
console.log(firstName); // Pedro

// Por outro lado, objetos tem atibuiçao por referencia: 
// ou seja,  a cada vez que se cria um novo objeto cria-se um novo espaço na memoria para ele. Eles sao mutaveis, por tanto podemos considerar que  e uma forma de criar um 'apelido' para o original: Veja o exemplo 

let myName = { firstName: "Pedro" };
let identity = myName;

myName.firstName = "Carol";

console.log(myName.firstName); // Carol
console.log(identity.firstName); // Carol

// objetos funcionam de maneira diferente do que tipos primitivos:

//Para testar igualdade de objetos e arrays, é preciso usar o matcher toEqual , que acessa cada elemento do objeto ou array, fazendo um trabalho de comparação específico e que retorna uma resposta mais voltada para a necessidade dos testes:

// test('array and object equality', () => {
//     const arr = [1, 2 ,3];
//     const obj = { a: 1, b: 2, c: 3};
  
//     expect(arr).toBe([1, 2, 3]); // fails
//     expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
//     expect(arr).toEqual([1, 2, 3]); // OK
//     expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
//   });

// NESSE TESTE ACIMA: apenas o toEqual funciona, pois o mesmo acessa cada elemento do objeto ou array.

