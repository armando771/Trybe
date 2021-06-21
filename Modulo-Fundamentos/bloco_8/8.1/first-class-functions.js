                    // First-Class Functions
 
// FUNÇOES FIRST CLASS SAO FUNÇOES QUE  ESTAO DISPONIVEIS PARA OUTROS TIPOS POR EXEMPLO:

      // PODEM SER ATIBUIDAS A VARIAVEIS!!

 const sum = (a, b) => a + b;
   // console.log(sum(25,1))

   
   // PODEM PASSAR FUNÇOES COMO ARGUMENTO PARA OUTRAS FUNÇOES


   const sayHello = () => {
    console.log('hello trybers');
  }
  
  setTimeout(sayHello, 1000);


  // PODEM RETORNAR UMA FUNÇAO DE OUTRA FUNÇAO

  const sumFixAmount = (amount) => {
    return (number) => amount + number;
  }
  
