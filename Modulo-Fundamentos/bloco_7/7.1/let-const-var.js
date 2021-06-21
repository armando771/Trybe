 if (true) {
     // inicio do escopo do if
     const userAge = "20";
     console.log(userAge); // 20
     // fim do escopo do if
   }
   console.log(userAge); // 20

// no Primeiro exemplo o uso do var foge do escopo da funçao, podendo gerar erros

// com let ou const o problema aponta um erro ao chamar a variavel fora do escopo onde foi criada!



const userName = "Isabella";
const userName = "Lucas";
console.log(userName); // com const = resultado: erro
                       // com let = resultado: erro
                       // com var = resultado: lucas


// no segundo exemplo o var permite uma reatribuiçao criando uma nova 


// com let ou const o programa aponta um erro pois nao se pode declarar  duas variaveis com mesmo nome em um mesmo escopo!


const favoriteLanguage = "Javascript";
favoriteLanguage = "Python";
console.log(favoriteLanguage); // Erro

let favoriteTechnology = "Machine learning";
favoriteTechnology = "Facial recognition";
console.log(favoriteTechnology); // Facial recognition

// no primeiro exemplo o programa retorna um erro pois ali tentamos reatribuir valor a uma constante

// no segundo exemplo o programa roda normalmente pois usando let e possivel reatribuir valor a nossa variavel!.


const info = {

  idade:  25,
  nome: 'lucas',
  altura: 185,
  peso: '92kg'  
}

info.idade = 28;
info.nome = 'joao';


console.log(info);
 
// reatribuindo valor a uma constante, alterando dados ja existentes atraves de parametros!

const userInfo = {
    name: "Cláudio",
    id: "5489-2",
    email: "claudio@email.com"
  };
  userInfo.name = "João"
  
  console.log(userInfo) // { name: "João", id: "5483-2", email: "claudio@email.com }

  // e possivel reatribuir alterar propiedades ja existentes de uma constante mas nao e possivel atribuir novas propiedades ou retirar propiedades ja existentes


  const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'HTML', 'React']
console.log(technologies); // Erro

// trabalhando com arrays tambem podemos reatribuir propiedades atraves de parametros, nunca atribuindo diretamente a nossa constante


// Em resumo, variáveis podem ser declaradas com o const , let e var . Apesar das três terem o mesmo propósito, é importante nos atentar às boas práticas para escrevermos códigos confiáveis. Assim, sempre que possível, usar o const para declarar variáveis é interessante porque conseguimos um comportamento mais previsível, já que o seu valor não pode ser alterado diretamente.






