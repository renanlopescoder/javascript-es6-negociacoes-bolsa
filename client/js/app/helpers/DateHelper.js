/**
 * Classe Helper para criação de datas e transformação para apresentação
 */

class DateHelper {

/** 
 * Ao usar a palavra chave static antes da declaração do método ele poderá ser chamado sem uma instancia da classe, ou seja, sem necessitar do new DateHelper, em seu lugar podemos executar o método com DateHelper.nomeDoMetodo, desta forma podemos economizar memória.
 * 
 * Para garantir que os desenvolvedores do projeto não acabem instanciando a classe por engano, podemos colocar um erro ao instanciar a classe, ou seja, no constructor com uma mensagem informando que esta classe não pode ser instanciada.
 * 
 */

  constructor (){
    throw new Error('Esta classe não pode ser instanciada');
  }

  /**
   * textoParaData
   * @param {String} texto
   * @return {Date} ano-mes-dia
   */

  static textoParaData (texto) {

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
   * Usando Arrow function '=>' do ES6
   * Como temos apenas uma linha podemos remover o bloco {}
   * Usando o arrow function => mesmo sem o return ele "entende" 
   * que iremos retornar o resultado
   */

    /**
     * Fail Fast
     * Fazer uma verificação rápida para retornar um erro caso a String não passe pela Expressão Regular
     */
    if (!/\d{4}-\d{2}-\d{2}/.test(texto))
      throw new Error('Data em texto deve estar no formato aaa-mm-dd');

      return new Date(
        ...texto.split('-')
          .map((item, indice) => item - indice % 2)
      );
    
    /** 
     * Função sem usar Arrow function
     * 
     * let data = new Date(...this._inputData.value.split('-').map(function(item, indice){
     *     return item - indice % 2;
     *   })
     * );
     */
  }

/**
 * Transformar data em texto formatada para dia/mes/ano usada para apresentação dos dados
 * @param {Date} data 
 * @return {String} 'dd/mm/aaaa'
 */

  static dataParaTexto (data) {
      /**
       * Uso do template String evita ficar concatenando as strings, podemos passar as expressões por ${} e interpolar as variáveis dentro da string.
       */
      return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
     
  }
}