let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// EX:01  console.log(numbers) 

 /*    EX: 002 
let result = 0;
for(let index = 0; index < numbers.length; index += 1){
    result += numbers[index];
}                                      
console.log(`A soma do array numbers e : ${result}`);  */

let media = 0;
let resultado = 0;

for (let index = 0; index < numbers.length;index =+1) {
   resultado += numbers[index];
    media = resultado / numbers[index];
 
} 

console.log(`A media do array numbers e ${media}`)