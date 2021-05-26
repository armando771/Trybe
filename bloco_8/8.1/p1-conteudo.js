const soma = (numb1,numb2) => numb1 + numb2;

const sub = (numb1,numb2) => numb1 - numb2;

const calculadora = (equacao) => equacao(10,6)

// console.log(calculadora(sub))

// EXEMPLO DE COMO IMPORTAR UMA FUNÇAO DENTRO DE OUTRA 


const wakeUp = () => {
    return 'acordando!';
}

const cofe = () => {
    return 'Bora tomar cafe!!'
}

const sleep = () => {
 return 'Partiu dormir!!'
}

const doingThings = (func,func1) => {
  return [func(), func1()]
}
    
console.log(doingThings(wakeUp,sleep))
