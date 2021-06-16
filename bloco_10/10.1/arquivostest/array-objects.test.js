test('array and object equality', () => {
    const arr = [1, 2 ,3];
    const obj = { a: 1, b: 2, c: 3};
  
    expect(arr).toBe([1, 2, 3]); // fails
    expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
    expect(arr).toEqual([1, 2, 3]); // OK
    expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
  });
  
  // teste em objetos e arrays

  const shoppingList = [
    'fraldas',
    'kleenex',
    'sacos de lixo',
    'papel toalha',
    'leite',
  ];
  
  test('a lista de compras tem leite nela', () => {
    expect(shoppingList).toContain('leite');
    expect(new Set(shoppingList)).toContain('leite');
  }); 

// teste em .toHaveLength(number)

test('existe' , () => {
expect([1, 2, 3]).toHaveLength(3);
expect('abc').toHaveLength(3);
expect('').not.toHaveLength(5);
})