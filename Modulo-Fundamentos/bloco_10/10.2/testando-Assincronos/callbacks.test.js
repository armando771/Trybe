// test("Não deveria passar!", (done) => {
//     setTimeout(() => {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!')
//       done();
//     }, 500);
//   });
  // Para o jest esperar a função assincrona ser finalizada, e necessario ultilizar a callback done(), que precisa ser chamada apos os testes assincronos.

  const SumNumbers = (a, b, callback) => {
    setTimeout(() => {
      const result = a + b;
      callback(result);
    }, 500)
  }
  
  test('Testando SumNumbers, soma 5 mais 10', (done) => {
    SumNumbers(5, 10, (result) => {
      expect(result).toBe(15);
      done();
    });
  })