const resultadoFinal = (resultado) => {
    console.log(resultado);
}

const funcSoma = (num1,num2) => num1 + num2;

let resultado = funcSoma(10,8);// numero 10 e passado para o parameto num1  /  numero 8 e passado para o parametro num2                         
resultadoFinal(resultado);

// a funçao funcSoma recebe a minha variavel resultado para atribuir seus valores 

// a variavel resultado e o parametro passado para minha funcao resultadoFInal como callback

// Para deixar o codigo de maneira mais dinamica podemos fazer o seguinte:

const resultadoFinal = (resultado) => {
    console.log(resultado);
}

const funcSoma = (num1,num2) => {
    let soma = num1 + num2;
    resultadoFinal(soma)
}
funcSoma(10,8)

// ambos os codigos funcionam, porem o segundo se comporta de maneira mais dinamica e interativa, pois para alterarmos valores da soma basta colocarmos o valor desejado ao chamar nossa funcao.

// Refatorando a funcao para o melhor uso do conceito de funçoes callback

const resultadoFinal = (resultado) => {
    console.log(resultado);
}

const funcSoma = (num1,num2,callback) => {
    let soma = num1 + num2;
    callback(soma);
}
funcSoma(10,8,resultadoFinal)

// nesse codigo, ao inves de chamarmos uma funçao dentro de outra, atribuimos essa funcao ao nosso callback passado como terceiro parametro, para que ao chamar a funcao funcSoma a funcao resultado que ira imprimir nosso resultado seja passada como funcao callback atraves do parametro callback!
