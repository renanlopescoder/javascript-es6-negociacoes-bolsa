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
    this._listaNegociacoes = new ListaNegociacoes();
    this._negociacoesView = new NegociacoesView($('#negociacoesView'));
    this._negociacoesView.update(this._listaNegociacoes);
    
  }

  adiciona (event) {

    event.preventDefault();

      this._listaNegociacoes.adiciona(this._criaNegociacao());
      this._negociacoesView.update(this._listaNegociacoes);
      this._limpaFormulario();
  }

  _criaNegociacao () {
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value);
  }

  _limpaFormulario () {
    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;

    this._inputData.focus();
  }

}