class ListaNegociacoes {

  constructor(){
    this._negociacoes = [];
  }

  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
  }

/**
 * Programação Defensiva
 * 
 * Para evitar que o desenvolvedor possa acessar o array fora da classe diretamente temos que passa um novo array adicionando todas as informações existentes no array original com o a função concat, assim se o array for alterado fora da classe será apenas uma cópia do nosso array original.
 */

  get negociacoes (){
    return [].concat(this._negociacoes);
  }
}