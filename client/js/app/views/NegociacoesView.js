  class NegociacoesView {

    constructor (elemento){
      this._elemento = elemento;
    }
    
    /**
     * Usamos o Join para concatenar os dados e gerar uma grande string
     * @param {array} Array de Negociacoes
     */

    _template(model) {
      return `
          <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
              ${model.negociacoes.map( n => {
                return `
                  <tr>
                    <td>${DateHelper.dataParaTexto(n.data)}</td>
                    <td>${n.quantidade}</td>
                    <td>${n.valor}</td>
                    <td>${n.volume}</td>
                  </tr
                `;
              }).join('')}
            </tbody>
            
            <tfoot>
            </tfoot>
        </table>
      `;
    }

  /**
   * Usamos o innerHTML para converter a String em elementos do DOM
   * @param {array} Array de Negociações
   */

    update(model){
      this._elemento.innerHTML = this._template(model);
    }
  }