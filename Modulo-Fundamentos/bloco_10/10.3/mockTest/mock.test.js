// O objetivo de se mockar uma funcao, modulo ou requisiçao.
// E permitir a quem desenvolve ter controle sobre todo o funcionamento de seus testes.

// abaixo podemos ver um caso em que simular o comportamento da funçao seria necessario para o teste.

const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

const divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;

test('quando o número aleatório é par, a função retorna `true`', () => {
  expect(divisivelPorDois()).toBe(true); // Como garantimos que o número retornado será par?
});

// Mockar o comportamento da funcao, para garantir que ela esta nesse teste retornando numero par, seria a solucao para este impasse!

// Dentre as formas de se mockar algo em jest, destacam-se tres!

// jest.fn();

// jest.mock();

// jest.spyOn();

// o metodo jest.fn() configura-se como a forma mais simples de se mockar algo: ELE TRANSFORMA uma funçao em uma simulacao. ou seja ao mockar uma funçao com o jest.fn() e fazar a chamada da mesma. o comportamento definido no mock sera chamado, em vez da funçao original