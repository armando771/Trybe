      // E EXTREMAMENTE IMPORTANTE TER EM MENTE QUE AS HOF NOS PERMITEM COMPACTAR AÇOES E NAO SOMENTE REPASSAR VALORES. VEJA O EXEMPLO ABAIXO.

      const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(25, console.log);
repeat(25, console.group);

// CONSTITUIMOS ESSA FUNÇAO PARA IMPLEMENTAR UM LAÇO DE REPETIÇAO ENTRE 0 E O NUMERO ESPECIFICADO VIA PARAMETRO (NUMBER),
// E PARA MOSTRAR NO CONSOLE O VALOR DA VARIAVEL COUNT DE 0 A (NUMBER)       USAMOS O CONSOLE.LOG QUE E UMA FUNÇAO PROPIA DO JS, 



// VAMOS AUMENTAR UM POUCO A COMPLEXIDADE E VISUALIZAR COMO PODEMOS IR CONTRUINDO FUNÇOES MAIS ESPECIALIZADAS E BEM DEFINIDAS: VEJA ABAIXO.


    const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
        action(count);
    }
    };
   
    repeat(3, (number) => {
    if (number % 2 === 0) {
        console.log(number, 'is even');
    }
    });


// NESTE EXEMPLO PEGAMOS UMA IMPLEMENTAÇAO DO EXEMPLO ANTERIOR, EM QUE 
//   1 PARAMETRO - NUMERO ATE QUE PONTO GOSTARIAMOS DE TESTAR, NO CASO 3.

//   2 PARAMETRO- A AÇAO QUE SERA EXECUTADA QUANDO CHAMADA (ACTION) NA NOSSA FUNÇAO (REPEAT). NESTE CASO O SEGUNDO PARAMETRO E UMA FUNÇAO QUE RECEBE O (COUNT) COMO ARGUMENTO, NESSE CASO CASO COUNT PASSE PELA CONDIÇAO ESTABELECIDA PARA SER UM NUMERO PAR, SEJA EXECUTADA A MENSAGEM COM OS NUMEROS QUE ATENDEM AO CRITERIO DENTRO DO (IF). 

// SE QUISESSIMOS TESTAS AMBOS (PAR E IMPAR) OLHE COMO FICARIA 

const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  const isEven = (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  };
  
  const isOdd = (number) => {
    if ((number % 2) > 0) {
      console.log(number, 'is odd');
    }
  };
  
  repeat(6, isEven); // Testa quais números serão pares;
  repeat(6, isOdd); // Testa quais números serão ímpares;


  // NOTE QUE, APENAS AJUSTAMOS A LOGICA PARA IDENTIFICAR OS NUMEROS NAS DUAS NOVAS FUNÇOES CHAMADAS (isEven) (isOdd) APOS ISSO ALTERAMOS O SEGUNDO PARAMETRO AO CHAMAR A  FUNÇAO (REPEAT).


  //A função recebida como argumento pela HOF, também é conhecida por callback . No exemplo, repeat é uma HOF que recebe isEven ou isOdd como callback. Podemos encontrar mais sobre este assunto nos Recursos adicionais , no entanto não se preocupe com este conceito no momento, abordaremos isso nos conteúdos adiante.    