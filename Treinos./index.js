// TREINO IF / ELSE..

/*


let a = 2415;
let b = 1600;
let c = 3500;
console.log(a+b)
console.log(a-b)
console.log(a/b)
console.log(a*b)
console.log(a%b)

if (a > b) {
    console.log(a)
} else {
    console.log(b)
}

if (a > b && a > c) {
    console.log(a)
} else if (b > a && b > c ) {
    console.log(b)
} else {
    console.log(c)
}

let d = 0;
if ( d > 0 ) {
    console.log("POSITIVE")
} else if ( d < 0 ) {
    console.log("Negative") 
} else {
    console.log("Zero")
}

let tri1 = 10;
let tri2 = 100;
let tri3 = 69;

if ( tri1 + tri2 + tri3 == 180) {
    console.log(true)
} else {
    console.log(false)
}

let peça = "BiSpO";

switch (peça.toLowerCase()){

  case "cavalo":
     console.log("Anda em L")   
break;

  case "peao":
      console.log("Anda 1 diagonal por vez")
break;

  case  "rainha":
      console.log("horizontal, vertical e diagonal")
break;
 
  case "rei" :
      console.log("anda o quadrado em volta dele")
break;

  case "torre" :
       console.log("Horizontal e vertical")
break; 

   case "bispo" :
       console.log("Diagonal")
break;

   default: 
   console.log("Erro Peça invalida")
break;   
}

let nota = 100;

if ( nota > 90 && nota < 101) {
    console.log("A")
} else if (nota > 80 && nota < 90 ) {
    console.log("B")
} else if (nota > 70 && nota < 80 ) {
    console.log("C")
} else if (nota > 60 && nota < 70 ) {
    console.log("D")
} else if (nota > 50 && nota < 60 ) {
    console.log("E")
} else if (nota < 50 && nota > 0 ) {
    console.log("F")
} else {
    console.log("VALOR INVALIDO !! ERRO !!!!")
}
let n1 = 11;
let n2 = 10;
let n3 = 12;

if (n1 % 2 == 0 || n2 % 2 == 0 || n3 % 2 == 0  ) {
    console.log(true)
} else {
    console.log(false)
}

if (n1 % 2 != 0 || n2 % 2 != 0 || n3 % 2 != 0  ) {
    console.log(true)
} else {
    console.log(false)
}

let custo = 100;
let venda = 300;
let lucro;

if (custo >= 0 && venda >= 0 ) {
    console.log(lucro = (venda -custo * 1.2)*1000 )
}

let salariobruto = 6000;
let salariobrutoinss ; 
let salarioliquido;
let faixa = 8;

switch (faixa) {
  
case 1:   
    if(salariobruto <= 1556,94 ) {
 console.log(salarioliquido = salariobruto * 0.92)
    }
break;   

case 2:
    if(salariobruto <= 1903.98 ) {
        console.log(salarioliquido = salariobruto * 0.91)
    }
break;  

case 3: 
    if(salariobruto > 1903.98 && salariobruto <= 2594.92) {
        salariobrutoinss = salariobruto * 0.91;
        console.log((salarioliquido = salariobrutoinss * 0.925)+ 142.80);
    }
break;    
    
case 4:
    if(salariobruto > 2594.92 && salariobruto <= 2826.65) {
        salariobrutoinss = salariobruto * 0.89;
        console.log((salarioliquido = salariobrutoinss * 0.925 )+ 142.80);
    }
break;

case 5: 
    if(salariobruto > 2826.65 && salariobruto <= 3751.05) {
        salariobrutoinss = salariobruto * 0.89;
        console.log((salarioliquido = salariobrutoinss * 0.85) + 354.80)
    } 
break;

case 6: if(salariobruto > 3751.05 && salariobruto <= 4664.68) {
    salariobrutoinss = salariobruto * 0.89;
    console.log((salarioliquido = salariobrutoinss * 0.775 ) + 636.13)
} 
break;

case 7:
    if(salariobruto > 4664.68 && salariobruto <= 5189.82 ) {
        salariobrutoinss = salariobruto * 0.89;
        console.log((salarioliquido = salariobrutoinss * 0.725) + 869.36)
    } 
break;

case 8:
    if(salariobruto > 5189.82 )  {
        salariobrutoinss = salariobruto - 570.88;
        console.log((salarioliquido = salariobrutoinss * 0.725) + 869.36)
    } 
break;

}  */ 

// FINALIZANDO O TREINO DE IF/ ELSE.



let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
let resultado = 0;
let maiorNumero =0;
let numerosImpares = 0;
let menorNumero = numbers[0];


for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

for (let index = 0; index < numbers.length; index +=1) {
     result += numbers[index];
}
console.log(result); 


for(let index = 0; index < numbers.length; index +=1) {
    resultado += (numbers[index]);
}

let media = resultado / numbers.length;

console.log(media);

if (media > 20) {
    console.log("Valor Maior Que 20!")
} else {
    console.log("Valor menor ou igual a 20.")
}

for (index = 0; index < numbers.length; index +=1) {
  if(numbers[index] > maiorNumero){
      maiorNumero = numbers[index]
  }
 
}

console.log(maiorNumero)

for (index = 0; index < numbers.length; index +=1) {
    if (numbers[index] % 2 != 0){
        numerosImpares+= 1;
}
}
if (numerosImpares == 0){
    console.log("Nenhum valor IMPAR encontrado")
}
console.log(numerosImpares);

for (index = 0; index < numbers.length; index +=1) {
    if(numbers[index] < menorNumero){
        menorNumero = numbers[index]
    }
   
  }
  console.log(menorNumero)

let contador = [];

for(index = 0; index <= 25 ; index += 1) {
    contador.push(index)
}
console.log(contador)

// falta a 9;