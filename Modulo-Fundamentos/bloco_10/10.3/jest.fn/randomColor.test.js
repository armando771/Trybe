const service = require('./randomColor');

test("#randomRgbColor", () => {
  // testando se a função foi chamada
  service.randomRgbColor = jest.fn();
  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
});

// ao declarar o service.RgbColor = jest.fn();
// estamos dizendo ao teste que a partir daquele momento estamos tomando controle funcao. e ela sera uma simulaçao da original.

// Por ser uma simulação podemos especificar qual vai ser o retorno da função 

// Duas propiedades que nos permitem fazer essa declaração:

// mockReturnValue(value) e mockReturnValueOnce(value).

// o mockReturnValue define um valor padrao de retorno
// ja o mockReturnValueOnce retorna o valor definido apenas uma vez

test("#randomRgbColor", () => {
    // testando se a função foi chamada e qual seu retorno
    service.randomRgbColor = jest.fn().mockReturnValue("rgb(255, 255, 255)");
  
    service.randomRgbColor();
    expect(service.randomRgbColor).toHaveBeenCalled();
    expect(service.randomRgbColor()).toBe("rgb(255, 255, 255)");
  });

  // a propiedade toHaveBeenCalled() espera que a funcao dentro do expect tenha sido executada por alguma chamada anterior a essa linha dentro do contexto desse test

  // alem disso podemos tambem testar quantas vezes a função foi chamada. para isso usamos a propiedade toHaveBeenCalledTimes(number)


  test("#randomRgbColor", () => {
    // testando quantas vezes a função foi chamada e qual seu retorno
    service.randomRgbColor = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call')
  
    expect(service.randomRgbColor).toHaveBeenCalledTimes(0);
  
    expect(service.randomRgbColor()).toBe("first call");
    expect(service.randomRgbColor).toHaveBeenCalledTimes(1);
  
    expect(service.randomRgbColor()).toBe("second call");
    expect(service.randomRgbColor).toHaveBeenCalledTimes(2);
  
    expect(service.randomRgbColor()).toBe("default value");
    expect(service.randomRgbColor).toHaveBeenCalledTimes(3);
});