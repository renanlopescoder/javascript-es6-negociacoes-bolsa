class View {
  constructor(elemento) {
    this._elemento = elemento;
  }

/**
 * Substituição do "Abstract" classe abstrata do Java lançando um erro caso o desenvolvedor não sobrescreva o método template (Override). 
 */
  template() {
    throw new Error('O método template deve ser implementado');
  }

  /**
   * Usamos o innerHTML para converter a String em elementos do DOM
   * @param {array} Array de Negociações
   */

  update(model){
    this._elemento.innerHTML = this._template(model);
  }
}
