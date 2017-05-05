/**
 * Estamos usando o construtor para inserir o texto na  mensagem criada, para isso usamos let mensagem = new Mensagem('Texto'), para que não seja obrigatório o parâmetro no construtor podemos usar o recurso do ES6 onde podemos passar um valor padrão aos parâmetros do construtor caso nada seja passado na criação de uma instância deste objeto.
 * 
 * Essa regra de valor padrão de parâmetros se aplica também aos métodos e funções além dos construtores.
 */

class Mensagem {
  constructor (texto = '') {
    this._texto = texto;
  }

  get texto () {
    return this._texto
  }

  set texto (texto) {
    this._texto = texto;
  }
}