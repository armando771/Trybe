const newUser = (id, name, email) => {
    return {
      id: id,
      name: name,
      email: email,
    };
  };
  
  console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }


  // e exatamente essa repeticao que a featue property shorthand elimina, podemos simplesmente substituir: id: id por id!.
  
  const newUser = (id, name, email) => {
    return {
      id: id,
      name: name,
      email: email,
    };
  };
  
  console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' };


  // FIX

  const getPosition = (latitude, longitude) => ({
    latitude: latitude,
    longitude: longitude});
  
  console.log(getPosition(-19.8157, -43.9542));


  const getPositions = (latitud, longitud) => ({
      latitud,
      longitud,
  })

console.log(getPositions(-19.8157, -43.9542));