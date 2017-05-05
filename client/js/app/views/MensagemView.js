class MensagemView extends View{
  constructor(elemento) {

  /**
   * super irá chamar o construtor da classe "pai", ou seja, o método constructor da classe View
   */

    super(elemento);
  }

/**
 * Usando operador ternário para exibir o parágrafo apenas se a string da mensagem estiver preenchida
 */

  _template (model){
    return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
  }

}