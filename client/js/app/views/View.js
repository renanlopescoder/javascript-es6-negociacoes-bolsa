class View {
  constructor(elemento) {
    this._elemento = elemento;
  }

  _template(model) {}

  /**
   * Usamos o innerHTML para converter a String em elementos do DOM
   * @param {array} Array de Negociações
   */

  update(model){
    this._elemento.innerHTML = this._template(model);
  }
}
