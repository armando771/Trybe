
let a = 100;
let b = 66;
let c = 89;

let d = -20;

// ex:01
  console.log(a+b)
  console.log(a-b)
  console.log(a*b)
  console.log(a/b)
  console.log(a%b)
 // ex:02

if (a > b) {
    console.log(a)
} else {
    console.log(b)
} 
  // ex:03
if (a > b && a > c) {
    console.log(a)
} else if (b > a && b > c) {
    console.log(b)
} else {
    console.log(c)
} 
 //ex:004

if (d > 1) {
    console.log("Positive")
} else if (d < 0 ) {
    console.log("Negative")
} else {
    console.log("Zero")
} 

 // ex: 005
let tri1 = 10;
let tri2 = 50;
let tri3 = 120;
let trif = tri1 + tri2 + tri3;
 //ex: 005

if (trif == 180) {
    console.log("true")
} else {
    console.log("false")
}   
     //  ex:006

    let peça = "BisPo"

    switch (peça.toLowerCase()) {

    case  "cavalo":
    console.log('Anda em L');
    break;

    case "peao":
    console.log("Anda 1 diagonal por vez sempre para frente")
    break;

    case "torre":
    console.log("Anda em linha reta e para o lado")
    break;
 
    case "bispo":
    console.log("Anda na diagonal")   
    break;

    case "Rainha":
    console.log("Anda na diagonal para frente e para os lados")   
    break;

    case "Rei":
    console.log("Anda uma casa em qualquer direçao de onde esta")   
    break; 
                       
    default:
        console.log("Peça invalida")
}  
  // ex:007
let nota = 80;

if (nota >= 90 && nota < 100 ) {
    console.log("A")
} else if (nota >= 80) {
    console.log("B")       
} else if (nota >=70) {
    console.log("C")
} else if (nota >=60) {
console.log("D")
} else if (nota >=50) {
    console.log("E")
} else if (nota < 50 && nota > 0) {
    console.log("F")
} else { 
    console.log("Erro Numero invalido")
}  
 
 //EX: 008

let nb1 = 2;
let nb2 = 2;
let nb3 = 3;


if (nb1 % 2 == 0 | nb2 % 2 == 0 | nb3 % 2 == 0) {
    console.log(true)
} else {
    console.log(false)
}  

//EX: 009
if (nb1 % 2 != 0 | nb2 % 2 != 0 | nb3 % 2 != 0) {
    console.log(true)
} else {
    console.log(false)
} 

 // Ex: 0010

let preço= 100;
let venda= 300;
let lucro;

if(preço < 0 | venda < 0){
    console.log("erro");
}
else{
    console.log(lucro=(venda-preço* 1.2)*1000);
}  


 //EX: 0011
 
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