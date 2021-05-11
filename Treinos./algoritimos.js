let n =71;
let repeticao = " ";

// EX:001

for(index =0;index < n;index+=1 ) {
  repeticao = repeticao + "*";
}
for(index =0; index < n;index +=1) {
  //  console.log(repeticao)
}

//Ex:002

let rep = " ";

  for(index =0; index < n;index +=1) {
       rep +="*"
  //   console.log(rep)
  }

//Ex:003

let espacos = "";

for(let index=0;index < n;index +=1) {
   espacos += " ";
} ;

for(let index=0;index < n;index +=1){
    espacos = espacos.substr(1);
    espacos += "*";

 //   console.log(espacos)
};

// EX:004
 
let espace = "";
let quadradomeio = (n+1) / 2;
let simbolo = "*";

let esquerda = quadradomeio;
let direita = quadradomeio;

for(let index = 0; index <= quadradomeio;index +=1 ) {
    for(let index1 =0; index1 <= n;index1 +=1){
    if (index1 > esquerda && index1 < direita ) {
        espace = espace + simbolo;
    } else{
        espace = espace + " ";
     }
    } 
     console.log(espace)
     espace = '';
     direita +=1;
     esquerda -=1;
};