class NegociacaoController {

  /**
   * Construtor acessa o DOM para evitar que as funções
   * necessitem acessar a todo momento de sua execução
   * temos melhora na performance.
   * 
   * Essa é uma boa estratégia, realizar uma espécie de cache do 
   * elemento do DOM que você deseja manipular, ou seja, guardar
   * sua referência, para que você o busque apenas uma vez.
   */

  constructor() {

    /**
     * Para evitar repetição de código podemos 
     * criar uma variável $ com uma função
     * mas a mesma deve se referir a um escopo, ou seja, this necessita 
     * apontar para o document e para isso precisamos 
     * tratar o querySelector como associado ao document
     * então usamos o bind() mantendo esta associação
     * 
    */

    let $ = document.querySelector.bind(document);

    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
  }

  adiciona (event) {

    event.preventDefault();

    /**
     * Ao receber o valor do DOM verificamos que o tipo
     * de dado recebido é string com console.log(typeof(this._inputData.value));
     * e isso temos erro ao criar data em nossa classe  modelo de Negociacao 
     * pois string não terá os metodos comuns de Date
     * para resolver isso criamos um array com ano mes e dia passando o - no split da string
     * pois o date pode receber new Date(['2017','04','01'])
     */

    /**
     * Problema Date
     * No mês do Date temos de 0 a 11 então precisamos arruma esta criação de data
     * caso passamos a string de criação para data
     */

    /**
     * Esses ... ou "spread operator" no inicio do construtor na versão ES6 ele identifica que
     * cada posição do array será posicionado respectivamente em cada parâmetro do 
     * construtor, ou seja, primeira posição ou item do array será primeiro parâmetro do construtor
     * e assim sucessivamente.
     */

    /**
     * Todo Array possui uma função chamada map onde recebe uma função como parâmetro
     * e a mesma é executada a cada iteração do array
     * retornando um novo array modificado, neste caso estamos passando o indice e alterando 
     * apenas o segundo indice removendo um do mês resolvendo o problema do Date
     */

    /** 
     * Função sem Arrow function
     * 
     * let data = new Date(...this._inputData.value.split('-').map(function(item, indice){
     *     return item - indice % 2;
     *   })
     * );
     */

    /**
     * Usando Arrow function '=>' do ES6
     * Como temos apenas uma linha podemos remover o bloco {}
     * Usando o arrow function => mesmo sem o return ele "entende" 
     * que iremos retornar o resultado
     */

    let data = new Date(
      ...this._inputData.value
        .split('-')
        .map((item, indice) => item - indice %2)
    );


    let negociacao = new Negociacao(
      data,
      this._inputQuantidade.value,
      this._inputValor.value);

      console.log(negociacao);
  }

}