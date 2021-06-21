//  1: O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?

const exercicio1 = ' UM codigo executado de modo assincrono e um codigo que e executado pelo broswer de forma que nao interfira na execucao geral do codigo, ele e executado separadamente,                                       a Diferença entre um codigo assincrono e sincrono e que o sincrono espera uma ordem de cima para baixo para ser executado, o assincrono e executado fora dessa ordem, em lugares separados '

// 2: Quando você tem que enfileirar várias callbacks , que problema surge?

const exercicio2 = ' Quando enfileiramos varias callbacks surge um fenomeno que nosso codigo começa a crescer para frente e nao para baixo gerando assim um codigo de dificil leitura e manutençao'

// 3: Por que as Promises são uma forma de se resolver esse problema?

const execicio3 = ' Pois as promises sao uma nova maneira de lidar com funçoes assincronas de forma que possui metodos e gestores que ajudam a gerenciar de forma organizada essas funçoes:  Ultilizando as promisses podemos "Fazer com que nossa funçao promisse aja de forma dinamica ao ponto de quando ultizarmos ela como callback" para outras funçoes ela consiga executar o que foi proposto para cada uma das funçoes, sem ter que serem feitas multiplas funçoes dentro de nossa promisse: '

// 4: Quando você vai se comunicar com uma API , tal comunicação deve ser síncrona ou assíncrona? Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc:

const exercicio4 = 'Deve ser assincrona, pois ao nos comunicarmos com uma API, nao podemos deixar nosso programa parado enquanto esperamos a resposta dessa API, ultilizando ela de forma assincrona podemos eliminar varios possiveis problemas dentro do nosso codigo e deixar assim ele independente de minha API na hora de roda-lo '

// 5: Dada a resposta anterior, o que é fetch e para que ele serve?

const exercicio5 = 'a funçao fetch e quem manda requisiçoes para as API para podemos retorna-las ao nosso codigo em forma de "JSON" para recebemos ela semelhantemente como um OBJETO javaScript que segue o formato chave/ valor  O fetch tambem possui metodos para tratar e lidar com os erros, que sao os async e await: o async transforma qualquer funçao em uma promisse podendo assim ultilzar das ferramentas que a mesma provem, e o await e um metodo que trabalha juntamente com o async que basicamente faz com que a funcao espere uma resposta para continuar a execução:'

