const math = require('./mathFix')

describe('Testando as funçoes', () => {

  test("#subtrair", () => {
  const sub = jest.spyOn(math, "subtrair")

  expect(sub(2,1)).toBe(1)
  expect(sub).toHaveBeenCalled();
  })

  test("#multiplicar", () => {
  const mult = jest.spyOn(math, "multiplicar").mockReturnValue(10);
  mult();

  expect(mult).toHaveBeenCalled();
  expect(mult()).toBe(10);
  })
 
  test("somar", () => {
  const soma = jest.spyOn(math, "somar")
  expect(soma(2,5)).resolves.toBe(7)
   
  })
})

  test("dividir", () => {
    const div = jest.spyOn(math, "dividir")

    div.mockReturnValue(15);
    div.mockReturnValueOnce(2);
    div.mockReturnValueOnce(5);

    expect(div(8,4)).toBe(2);
    expect(div).toHaveBeenCalled();
    expect(div).toHaveBeenCalledTimes(1)
    expect(div).toHaveBeenCalledWith(8,4);

    expect(div(10,2)).toBe(5);
    expect(div).toHaveBeenCalled();
    expect(div).toHaveBeenCalledTimes(2)
    expect(div).toHaveBeenCalledWith(10,2);

    expect(div(30,2)).toBe(15)
    expect(div).toHaveBeenCalled();
    expect(div).toHaveBeenCalledTimes(3)
    expect(div).toHaveBeenCalledWith(30,2);
  })


  test("dividir e restaurar", () => {
    const sub = jest.spyOn(math, "subtrair")
  sub.mockImplementation((a,b) => a * b)
  sub.mockReturnValue(20);

  expect(sub(10,2)).toBe(20);
  expect(sub).toHaveBeenCalled();
  expect(sub).toHaveBeenCalledTimes(2);
  expect(sub).toHaveBeenCalledWith(10,2);
  
  sub.mockRestore();
  sub.mockReturnValue(8);
  
  expect(sub(10,2)).toBe(8)
  expect(sub).toHaveBeenCalled();
  expect(sub).toHaveBeenCalledTimes(1);
  expect(sub).toHaveBeenCalledWith(10,2);
  })