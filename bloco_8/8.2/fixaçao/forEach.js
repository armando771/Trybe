const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email,index,s) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
    console.log(`Sua posicao na lista de emails e ${index}`) 
    console.log(`foram enviados emails para ${s.length} pessoas`)
    console.log("---------------------------------------------------------")
  };
  
emailListInData.forEach(showEmailList)
  
// o primeiro parametro da nossa SHowEmailList pelo parametro forEach(); recebe todos os valores dos indices
// o segundo recebe os indices dele [0],[1],etc
// o terceiro retorna o array, se usado com .length retorna em todos o numero total de indices, assim como faz a propiedade!!
  