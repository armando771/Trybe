const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
 const ordened = (peoples) => {
  
peoples = people.sort((a,b) => a.age -b.age)
return peoples
 };

  console.log(ordened(people));

//-------------------------------------------------------//  

  const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
 const ordened = (peoples) => {
  
peoples = people.sort((a,b) => b.age -a.age)
return peoples
 };

  console.log(ordened(people));


  