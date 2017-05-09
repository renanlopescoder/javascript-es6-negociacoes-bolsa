class ListaNegociacoes {

/**
 * Trap é uma 'armadilha' que será executada ao chamar as funções irá atualizar a view caso tenha alguma alteração no modelo.
 * 
 * Caso usamos uma função de contexto dinâmico usando a API Reflect do JavaScript para pegar escopo anterior ao de execução passando o contexto devemos receber o contexto no construtor.
 * @param {function} trap
 * 
 * constructor (contexto, trap) {
    this._negociacoes = [];
    this._trap = trap;
    this._contexto = contexto;
    }
 */

/** Usando a Arrow function não precisamos do contexto pois a arrow function possui escopo léxico */
  // constructor (trap) {
  //   this._negociacoes = [];
  //   this._trap = trap;
  // }

  /**
   * Parão modelo Proxy
   */

  constructor () {
    this._negociacoes = [];
  }

  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
    //this._trap(this); /*Contexto NegociacaoController (Contexto Léxico da Arrow Function)*/
    /**
     * Mais Informações para entendimento no construtor da classe NegociacaoController
     */
    /**
     * Reflect.apply(this._trap #Contexto ListaNegociacoes#, this._contexto #Contexto NegociacoesController por causa do Reflect.apply#, [this] #Modelo com ListaNegociacoes#);
     */
  }



  get negociacoes () {
    return [].concat(this._negociacoes);
  }

  removeLista () {
    this._negociacoes = [];
  }
}