class NegociacaoController {

  /**
   * Construtor acessa o DOM para evitar que as funções
   * necessitem acessar a todo momento de sua execução
   * assim temos melhora na performance.
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
    /**
     * Usando o function quando usamos o 'this' em uma função o contexto é dinâmico ou seja vai alterar de acordo ao contexto onde está sendo usado e como opção podemos usar a API Reflections do JavaScript passando o contexto através do this como parâmetro do construtor e nos métodos de destino usamos o método estatico da classe Reflect.apply(this._trap, this._contexto, [this]); passando como parâmetro a função e o contexto enviado ao construtor e um array com os parametros que irão receber, assim podemos pegar o contexto anterior ao contexto de execuçãodo método.
     * 
      this._listaNegociacoes = new ListaNegociacoes(this #Contexto NegociacaoController#, function(model){
        this._negociacoesView.update(this._listaNegociacoes(model));
      });
     * 
     * Atualização do ES6, quando usamos a arrow function o 'this' possúi escopo léxico e o this passado sempre será o this do escopo atual e não será alterado.
     * this._listaNegociacoes = new ListaNegociacoes(model => this._negociacoesView.update(model));
     */

    /**
     * Bind é a associação entre o modelo (primeiro parametro construtor do Bind) e a view (segundo parâmetro), com o Bind podemos monitorar os parametros ou metodos passados (terceiro parâmetro).
     */

    this._listaNegociacoes = new Bind(
      new ListaNegociacoes(),
      new NegociacoesView($('#negociacoesView')),
      'adiciona','removeLista'
    );

    this._mensagem = new Bind(
      new Mensagem(),
      new MensagemView($('#mensagemView')),
      'texto',
    );

  }

  adiciona(event) {

    event.preventDefault();

    this._listaNegociacoes.adiciona(this._criaNegociacao());

    this._mensagem.texto = 'Negociação Adicionada com Sucesso';

    this._limpaFormulario();
  }

  _criaNegociacao() {
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }

  apaga() {
    this._listaNegociacoes.removeLista();
    this._mensagem.texto = 'Negociações Apagadas com Sucesso';
  }

  _limpaFormulario() {
    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;
    this._inputData.focus();
  }
}