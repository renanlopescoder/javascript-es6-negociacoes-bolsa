  class NegociacoesView extends View{
    
    constructor(elemento) {
    /**
     * super irá chamar o construtor da classe "pai", ou seja, o método constructor da classe View
     */
      super(elemento);
    }

    /**
     * Usamos o Join para concatenar os dados e gerar uma grande string
     * @param {array} Array de Negociacoes
     */

    /**
     * No tbody usamos o map para varrer todas as posições do array, como padrão das arrow functions do ES6 não necessitamos inserir os parênteses para apenas um parâmetro, também tiramos as chaves e o return pois estamos passando apenas uma instrução.
     */

    /**
     * Para contagens do total do volume "<tfoot>" uma das soluções é criar uma função dentro da expressão na template string qual se executa, para isso usamos funções que se chamam Immediately-Invoked Function Expression (IIFE)
     * 
     * Ex.: 
     * 
     *  ${
          (function(){
            let total = 0;
            model.negociacoes.forEach(negociacao => total += negociacao.volume);
            return total;
          })()
        }
      * 
      * Atualizando para o paradigma funcional a solução seria usar um método do array chamado reduce para retornar apenas um resultado, para inicializar o total passamos 0.0 como segundo parâmetro do método reduce.

      Ex.: 
        ${model.negociacoes.reduce( (total, negociacao) => total + negociacao.volume, 0.0)}
     */

    template(model) {
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
              ${model.negociacoes.map( negociacao => `

                  <tr>
                    <td>${DateHelper.dataParaTexto(negociacao.data)}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                    <td>${negociacao.volume}</td>
                  </tr>

              `).join('')}
            </tbody>
            
            <tfoot>
              <td colspan="3"></td>
              <td>
                ${model.negociacoes.reduce( (total, negociacao) => {
                  return total + negociacao.volume;
                }, 0.0)}
              </td>
            </tfoot>
        </table>
      `;
    }

  }