const customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  console.log(customer1);
  
  customer1.lastName = 'Faria';
  console.log(customer1);
  
  const customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
  };
  
  console.log(customer2);
  customer2['lastName'] = 'Silva';
  console.log(customer2);


  const customer3 = {
      firstName: 'Armando',
      age: 21,
      job: 'student',
      heigth: '182 cm',
      hair: 'blond'
  }
  console.log(customer3)

  customer3.lastName = 'Guerra';

  console.log(customer3)

  customer3['SkinColor'] = 'white'

  console.log(customer3);


//   No exemplo acima, ao invés de reescrever o objeto inteiro, apenas adicionamos a nova propriedade. Para isso, basta seguir a sintaxe abaixo:

// objeto.nomeDaPropriedade .
// objeto[variavelQueContemONomeDaPropriedade] .


const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let newKey = 'lastName';
  const lastName = 'Ferreira';
  customer[newKey] = lastName;

  newKey = 'fullName';
  const fullName = `${customer.firstName} ${customer.lastName}`;
  customer[newKey] = fullName;
  console.log(customer);


const customerPremium = {
 
  firstName: 'Armando',
  age: 21,
  job: 'Student',
}; 
console.log(customerPremium)

let newKeyCustomerPremium = 'lastName';
let lastName = 'Guerra Starling';

customerPremium[newKeyCustomerPremium] = lastName;

console.log(customerPremium)

let newKeyFullName = 'fullName';
let fullName = `${customerPremium.firstName} ${customerPremium.lastName}`

customerPremium[newKeyFullName] = fullName;

console.log(customerPremium)

