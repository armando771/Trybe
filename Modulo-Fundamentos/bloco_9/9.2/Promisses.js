// const promise = new Promise((resolve,reject) => {

const { resolve } = require("path/posix");

// })

/*
     A PROMISSE POSSUI TRES ESTADOS:
O Pending   O Fulfiled     O Rejected

Quando a promisse e executada ela entra automaticamente no estado 
Pending! E quando ela sai da fila e vai para sua 'area' 'especial':

ao retornar ela pode apresentar um dos 2 estados:
Fullfiled: Se ocorreu tudo certo com sua execucão:

Rejected: Se ocorreu algum erro:

Aqui que nossos parametros RESOLVE E REJECT ENTRAM!!!

*/


//  USANDO um exemplo abaixo:


const promise = new Promise((resolve,reject) => {
    const number = Math.floor(Math.random() * 11);
  if(number <= 5) {
      return reject(console.log(`Que fracasso =( nosso numero foi ${number}`));
  }
  resolve(console.log(`Que sucesso =) nosso numero foi ${number}`));
    
});


// ULTILIZANDO OS GESTORES DE FLUXO .THEN() e .CATCH()


const promise = new Promise((resolve,reject) => {
    const number = Math.floor(Math.random() * 11);
     if (number <=5) {
         return reject(number);
     }
     resolve(number);
})
.then(number => `Que sucesso =) nosso numero foi ${number}`)
.then(msg => console.log(msg))
.catch(number => console.log(`Que fracasso =( nosso numero foi ${number}`))



// const fetch = require('node-fetch');

// function verifiedFetch(url) {
//   return new Promise((resolve, reject) => {
//     if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
//          fetch(url)
//         .then((r) => r.json())
//         .then((r) => resolve(r.value));
//     } else {
//       reject(new Error('endpoint não existe'));
//     }
//   });
// }

// function sendJokeToFriend(name) {
//     const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
//       .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
//       .catch((err) => err);
//     console.log(message);
//   }
  
//   sendJokeToFriend("Anna");

// sem ultilizar o metodo async Ele retorna para nos pendente 

const fecth = require('node-fetch');

async function verifiedFetch(url) {
    if(url === 'https://api.chucknorris.io/jokes/random?category=dev') {
        return fecth(url)
        .then((r) => r.json())
        .then((r) => r.value);
    }
    throw new Error('endpoint nao existe'); 
}

async function sendJokeToFriend(name) {
    const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa ${joke}`)
    .catch((err) => err);
    console.log(message);
}
sendJokeToFriend('Anna');