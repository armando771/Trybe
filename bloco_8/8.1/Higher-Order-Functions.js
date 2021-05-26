

// FUNÇOES DE ORDEM SUPERIOR - HIGHER ORDER FUNCTIONS OU HOF!



// AS HIGH ORDEM FUNCTIONS  SAO FUNÇOES QUE USAM OUTRAS FUNÇOES EM SUAS OPERAÇOES, DEVENDO ACEITA-LAS COMO PARAMETRO E/OU RETORNALAS. 

// EXEMPLO!

const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);

//Construímos uma função que simula o registro de uma nova pessoa e passamos como argumento de uma segunda função. Logo, addEventListener é uma HOF.



// FIRST CLASS FUNCTIONS E O CONCEITO QUE DEFINE A FORMA QUE A LINGUAGEM TRATA SUAS FUNÇOES, PERMITINDO QUE SEJAM SUPORTADAS EM OPERAÇOES QUE SAO USADAS EM OUTROS TIPOS EX: (ATRIBUIÇÃO, RETORNO, PARAMETRO)

// E HOF E UMA FUNÇAO QUE ATENDE AO CRITERIO DE RECEBER COMO PARAMETRO OU RETORNAR OUTRA FUNÇÃO.

