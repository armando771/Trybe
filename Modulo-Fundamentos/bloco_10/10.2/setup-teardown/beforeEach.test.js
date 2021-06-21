/*
O beforeEach é executado antes de cada teste, evitando que você tenha que repetir trechos de código, como por exemplo a criação de cidades utilizada no vídeo, dentro de cada teste. Dessa forma, você escreve o trecho de código uma única vez e garante que o "ambiente" esteja preparado para os testes que precisarem.
*/

/*
Além do beforeEach , temos também o afterEach que foi citado no vídeo e que executa um trecho de código após cada teste. Ele é especialmente útil para resetar configurações, dados, entre outras coisas.
*/

/*
Assim como vimos que pode acontecer dentro dos testes, durante o vídeo tivemos a execução de código assíncrono no beforeEach . Isso reforça, novamente, que é importante sempre se atentar a esse fator e que ele pode aparecer em diferentes cenários.
*/
// Este beforeEach e este afterEach serão aplicados a todos os testes

beforeEach(() => {
    retrieveCitiesFromCache();
  });
  
  afterEach(() => {
    resetCities();
  });
  
  it("should have only 1 city after remove Belo Horizonte", () => {
    removeCity("Belo Horizonte");
    expect(getCities().length).toBe(1);
  });
  
  it("should have the city of Belo Horizonte", () => {
    expect(isCity("Belo Horizonte")).toBeTruthy();
  });
  
  describe('Requesting cities from api', () => {
    // Este beforeEach e este afterEach serão aplicados apenas aos testes
    // do bloco do describe
    beforeEach(() => {
      return requestCities();
    });
  
    afterEach(() => {
      resetCities();
    });
  
    it("should have 8 cities after request", () => {
      let cities = getCities();
      expect(cities.length).toBe(8);
    });
  
    it("should have the city of Belo Horizonte", () => {
      expect(isCity("Belo Horizonte")).toBeTruthy();
    });
  
    it("should have the city of Fortaleza", () => {
      expect(isCity("Fortaleza")).toBeTruthy();
    });
  });