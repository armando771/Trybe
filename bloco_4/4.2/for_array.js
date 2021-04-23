
let taskList = ["Estudar", "Fazer exercicio", "Almoçar", "Dormir"]


let taskList1 = taskList.indexOf("Almoçar")

console.log(taskList1) 

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let frutas = 0; frutas < groceryList.length; frutas +=1 ) {
     console.log(groceryList[frutas])
}
 
let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 5;
  console.log(sum);  
} 
  

// 11
// 21
// 31

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let contNames of names) {
    console.log(contNames)
}


let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}

//------------------------------------------------------------------------//

let megaSenaNumbers = [];

let number1 = Math.ceil(Math.random()*60 );
let number2 = Math.ceil(Math.random()*60 );
let number3 = Math.ceil(Math.random()*60 );
let number4 = Math.ceil(Math.random()*60 );
let number5 = Math.ceil(Math.random()*60 );
let number6 = Math.ceil(Math.random()*60 );

megaSenaNumbers = [number1,number2,number3,number4,number5,number6];
console.log(megaSenaNumbers)

// ceil vem de teto - sempre arredonda um numero para cima
// random gera um numero aleatorio, nesse caso de 0 a 60
// Math diz que e algo matematico,, numeros

