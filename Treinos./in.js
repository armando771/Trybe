/*
let player = {
    name: "Marta",
    lastName: "Silva",
    age: 34,
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],

    medals: {
        golden: 2,
        silver: 3,
    }

};

console.log(`a jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade `);

console.log(`A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por 6 vezes ${player.bestInTheWorld}`)

console.log(`a jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata ` ) 
 
                           //For/in

let pizzas = {

sabor: "Palmito",    
preco: 39.90,
bordaCatupiry: true,
};

for(let key in pizzas) {
    console.log(pizzas[key])
}

// for in dentro de ARRAYS

let pizzasDoces = ["chocolate", "Banana", "Morango"];

for(let key in pizzasDoces){
    console.log(key ,pizzasDoces[key])
} */

//for (let position in food) {
// console.log(position);
//}

//resultado: 0, 1, 2;


//Se percorrermos um objeto, também teremos o mesmo resultado. O For/in irá percorrer a propriedade declarada, e não o seu valor em si.
//Já o For/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o For/in . Vejamos o exemplo:

//let food = ['hamburguer', 'bife', 'acarajé'];
//for (let value of food) {
//console.log(value);
//}
//resultado: hamburguer, bife, acarajé;

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge'
  };

  for(let index in names) {
      console.log(`Ola ${names.person1} ola  ${names.person2} ola ${names.person3} `)
  };


  let carro = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for(let index in carro) {
      console.log(`Modelo ${carro.model}, marca: ${carro.manufacturer}, ano ${carro.year}  `)
  }; 