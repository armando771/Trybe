/*
let a = 30;
let b = 42;
let c = 72;

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

if (a>b) {
    console.log(a)
} else {
    console.log(b)
} 

if (a > b && a > c) {
    console.log(a)
} else if (b > a && b > c) {
    console.log(b)
} else {
    console.log(c)
} */ 


/*
let a = 0;

if (a < 0) {
    console.log("Negative")
} else if (a > 0 ) {
    console.log("Positive")
} else {
    console.log("Zero")
}

let ang1 = 20;
let ang2 = 40;
let ang3 = 60;


if (ang1 + ang2 + ang3 == 180 && ang1 != 0 && ang2 != 0 && ang3 != 0) {
    console.log(true)
} else if(ang1 + ang2 +ang3 != 180 && ang1 != 0 && ang2 != 0 && ang3 != 0) {
    console.log(false)
} else {
    console.log("ERRO")
}  */ 

/*
let peça = "CaVaLo"

switch(peça.toLowerCase())  {

case "cavalo" :
console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
break;

case "torre":
console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.");
break;

case "peao":
    console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.");
break;

case "bispo":
    console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.");
break;

case "rainha":

    console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças");
break;

case "rei":
    console.log("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez");
 break;

 default:
     console.log("Peça invalida")

} */ 


/*
let nota =  100;

if (nota >= 90 && nota <= 100) {
    console.log("A")
} else if (nota >= 80 && nota < 90) {
    console.log("B")
} else if (nota >= 70 && nota < 80) {
    console.log("C")
} else if (nota >= 60 && nota < 70) {
    console.log("D")
} else if (nota >= 50 && nota < 60) {
    console.log("E")
} else if (nota < 50 && nota > 0) {
    console.log("F")
} else {
    console.log ("Erro no programa")
} */

/*
let n1 = 5;
let n2 = 8;
let n3 = 7;

if (n1 % 2 == 0 | n2 % 2 == 0 | n3 % 2 == 0 ) {
    console.log(true)
} else {
    console.log(false)
} 

if (n1 % 2 != 0 | n2 % 2 != 0 | n3 % 2 != 0 ) {
    console.log(true)
} else {
    console.log(false)
}  */ 

/*
let custo = 180;
let venda = 400;
let lucro;

if(custo < 0 && venda < 0) {
    console.log("ERRO NO SISTEMA")
} else {
    console.log(lucro = (venda - custo * 1.2)*1000);
} */

let salariobruto = 2600;
let salarioliquidoinss;
let salarioliquido;
let faixasalarial = 3;

switch (faixasalarial) {

 case 1:
      if (salariobruto <= 1903.98 ) {
          console.log(salarioliquido = salariobruto * 0.92);
      }
break;
  
 case 2:
     if (salariobruto > 1903.98 && salariobruto <= 2594.92) {
         salarioliquidoinss = salariobruto * 0.91;
         console.log((salarioliquido = salarioliquidoinss * 0.925) + 142.8);
     }
break;

  case 3:
      if (salariobruto > 2594.92 && salariobruto <= 2826.65) {
          salarioliquidoinss = salariobruto * 0.89;
          console.log((salarioliquido = salarioliquidoinss * 0.925 ) + 142.8);
      }
break;

  case 4:
      if (salariobruto > 2826.66 && salariobruto <=3751.05 ) {
         salarioliquidoinss = salariobruto * 0.89;
         console.log((salarioliquido = salarioliquidoinss *0.85 ) + 354.80 ); 
      }
break;  

   case 5:
       if (salariobruto > 3751.06 && salariobruto <= 4664.68 ) {
           salarioliquidoinss = salariobruto * 0.89;
           console.log((salarioliquido = salarioliquidoinss * 0.775 ) + 636.13);
       }
break;
 
   case 6: 
   if(salariobruto > 4664.68 && salariobruto <= 5189.82 ) {
   salarioliquidoinss = salariobruto * 0.89;
   console.log((salarioliquido = salarioliquidoinss * 0.725)+ 869.36) 

   }
break;

  case 7:
      if (salariobruto > 5189.82) {
          salarioliquidoinss = salariobruto - 570.88;
          console.log((salarioliquido = salarioliquidoinss * 0.725)+ 869.36)

      }
break;

} 
