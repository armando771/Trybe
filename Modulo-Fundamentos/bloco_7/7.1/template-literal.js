// template literals é mais uma feature do ES6 que nos permite criar strings complexas de forma mais fácil. Você certamente já concatenou strings e variáveis em Javascript da seguinte forma:


const myName = "Isabella"
console.log('Hello' + ' ' + myName + '!');

// dessa forma usamos a concatenação!

const myName = "Isabella"
console.log(`Welcome ${myName}!`);

// dessa forma usando template strings para facilitar a digitaçao e compreensao do nosso codigo!,


//Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
)

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n') 

// com template literals, podemos executar quebras de linha sem precisar usar a tag de quebra "/n" e sem precisar concatenas os itens, fazendo assim que nosso codigo seja mais dinamico e simples