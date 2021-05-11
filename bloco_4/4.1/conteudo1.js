let nota = 80;

if (nota >= 80) {
    console.log("Parabens, voce foi aprovado")
} else if (nota < 80 && nota >= 60) {
    console.log("Voce esta na nossa lista de espera")
} else {
    console.log("Voce Foi Reprovado")
}

let statusProva = "aprovada"

switch (statusProva) {

    case "aprovada":
        console.log("aprovada")
        break;

    case "lista":
        console.log("Lista");
        break;

    case "reprovada":
        console.log("reprovada");
        break;

default:
    console.log("valor nao identificado")

}