class Negociacao {

  /** 
   * JavaScript ES6 mesmo com a sua atualização 
   * não tem modificadores de acesso como Java (public / protected / private) 
   * por convenção entre os programadores devemos usar o underscore _ antes das variaveis para informar
   * que essas variáveis só podem ser acessadas dentro da própria classe
  */

  constructor(data, quantidade, valor) {

    /**
     * Criando um novo objeto data baseado na data passada no construtor
     * assim evitamos que manipulação externa da data
    */

    this._data = new Date(data.getTime());
    this._quantidade = quantidade;
    this._valor = valor;

    /**
     * Object.freeze(objeto) dessa forma "congelamos" a instancia com o this
     * assim não podemos alterar suas propriedades de fora da classe diretamente
    */

    Object.freeze(this);

  }

  /** 
   * Sintaxe Get
   * Método de acesso ( get data(){ ... } ) Acesso usando o método ( objeto.nomePropriedade )
   * Ex.: objeto.quantidade acessa o método get sem necessidade de indicar que é uma função usando o parêntese ()
  */

  get data() {

    /**
     * Programação Defensiva
     * O Object.freeze() é "raso", ou seja, podemos alterar a data usando 
     * funções internas como instancia.data.setDate(11) para evitar isso
     * usamos a "Programação Defensiva" ao lugar de passar em nossa classe
     * uma referencia a nosso objeto atual com return this._data passamos 
     * um novo objeto, uma nova referência com valor de nossa data
     * assim podemos evitar a alteração direta.
     * 
     * Estamos passando uma nova instância de data passando no return um Date com new
     * e atribuindo nossa data como valor.
     * 
    */

    return new Date(this._data.getTime());
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }

  get volume(){
    return this._quantidade * this._valor;
  }

}