// const numbers = [32, 15, 3, 2, -5, 56, 10];

// let maior = 0;

// for(let index = 0; index < numbers.length; index +=1) {
//   if (numbers[index] > maior ) {
//       maior = numbers[index];
//   }
// }
// console.log(maior)


// const numbers = [32, 15, 3, 2, -5, 56, 10];

// const BiggerNumber = (acumulador,number) => ((acumulador > number) ? acumulador : number);

// const reduce = numbers.reduce(BiggerNumber)

// console.log(reduce);



      // 1 MANEIRA DE SER FEITA

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const filt = (numero) => numero % 2 === 0;
// const somaReduce = (acumulador,number) => acumulador + number;

// const juntando = (arrayNumber) => arrayNumber.filter(filt).reduce(somaReduce)

// console.log(juntando(numbers))

 
        // SEGUNDA MANEIRA DE SER FEITA 

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const AllInOne = numbers.filter((number) => number % 2 ===0).reduce((acumulador,number)=> acumulador + number);

// console.log(AllInOne)



// USANDO APENAS REDUCE

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const somaReduce = (acumulador,numero) => {
//     if(numero % 2 === 0){
//         return acumulador + numero
//     } else {
//         return acumulador
//     }
// };

// const Reduce = (numberss) => numberss.reduce(somaReduce,0);

// console.log(Reduce(numbers))



