const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!

const greeting = (user) => {
    const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
    console.log(`Welcome ${userDisplay}!`);
  };
  
  greeting(); // Welcome usuário!

  // Para nao voltarmos undefined podemos usar esse codigo acima porem ele nao se apresenta nem um pouco funcional
  // com os defalult parameters podemos fazer isso de forma mais pratica!!!!


  const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting('Armando'); // // Welcome usuário!


// FIXAÇÃO 


const multiply = (number, value = 1) => {
    return number * value;
  };
  
  console.log(multiply(8));