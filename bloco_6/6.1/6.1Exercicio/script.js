let states = document.getElementById("states");

let allOfStates = ["Acre","Alagoas","Amapá","Amazonas","Bahia", "Ceará", "Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];

for(let index = 0; index < allOfStates.length; index +=1){  
   let createOption = document.createElement("option");
   createOption.classList = "content"; 
   createOption.textContent = allOfStates[index];
   states.appendChild(createOption); 

};

