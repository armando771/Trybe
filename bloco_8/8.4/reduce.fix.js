// const estudantes = [
//     {
//       nome: 'Jorge',
//       sobrenome: 'Silva',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 67 },
//         { name: 'Português', nota: 79 },
//         { name: 'Química', nota: 70 },
//         { name: 'Biologia', nota: 65 },
//       ],
//     },
//     {
//       nome: 'Mario',
//       sobrenome: 'Ferreira',
//       idade: 15,
//       turno: 'Tarde',
//       materias: [
//         { name: 'Matemática', nota: 59 },
//         { name: 'Português', nota: 80 },
//         { name: 'Química', nota: 78 },
//         { name: 'Biologia', nota: 92 },
//       ],
//     },
//     {
//       nome: 'Jorge',
//       sobrenome: 'Santos',
//       idade: 15,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 76 },
//         { name: 'Português', nota: 90 },
//         { name: 'Química', nota: 70 },
//         { name: 'Biologia', nota: 80 },
//       ],
//     },
//     {
//       nome: 'Maria',
//       sobrenome: 'Silveira',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 91 },
//         { name: 'Português', nota: 85 },
//         { name: 'Química', nota: 92 },
//         { name: 'Biologia', nota: 90 },
//       ],
//     },
//     {
//       nome: 'Natalia',
//       sobrenome: 'Castro',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 70 },
//         { name: 'Português', nota: 70 },
//         { name: 'Química', nota: 60 },
//         { name: 'Biologia', nota: 50 },
//       ],
//     },
//     {
//       nome: 'Wilson',
//       sobrenome: 'Martins',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 80 },
//         { name: 'Português', nota: 82 },
//         { name: 'Química', nota: 79 },
//         { name: 'Biologia', nota: 75 },
//       ],
//     },
//   ];

// //Agora crie uma função usando os dados dos estudantes que usamos no conteúdo do dia anterior, para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce !

// const FindBetterOfStudent = (acumulador,materia) => {
//    if(acumulador.nota > materia.nota){
//        return acumulador;
//    } else {
//        return materia;
//    }
// };

// const better = (estudantes) => estudantes.map((estudante) =>({
// name: estudante.nome,
// materia: estudante.materias.reduce(FindBetterOfStudent).name
// }))

// console.log(better(estudantes));







// TREINOS !!


const pessoas = [
    {
      nome: 'Ayrton',
      idade: 27
    },
    {
      nome: 'João',
      idade: 14
    },
    {
      nome: 'Maria',
      idade: 23
    },
    {
      nome: 'Joana',
      idade: 21
    },
    {
      nome: 'Lucas',
      idade: 32
    },
    {
      nome: 'Mateus',
      idade: 15
    },
    {
      nome: 'Isa',
      idade: 23
    },
    {
      nome: 'Luiza',
      idade: 17
    }
  ];


  // Agrupe as pessoas em 2 grupos de objetos sendo eles. maiores e menores:


const PessoasA = pessoas.reduce((valorAC, arrayV) =>  {
    const MaiorMenor = arrayV.idade >= 18 ? 'maiores' : 'menores';

    valorAC[MaiorMenor].push(arrayV);
    return valorAC;

}, {maiores:[], menores: [] } );

console.log(PessoasA)


