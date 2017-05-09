class ProxyFactory {
  constructor () {
  }

/**
 * 
 * @param {Object} objeto 
 * @param {array} props propriedades a monitorar
 * @param {Function} acao para se executar
 */

  static create (objeto, props, acao) {

        return new Proxy(objeto, {
          // Trabalhando com Método
          get(target, prop, receiver) {

            if (props.includes(prop) && ProxyFactory._verificaFuncao(target[prop])) {

              return function () {

                console.log(`método '${prop}' interceptado`);

                Reflect.apply(target[prop], target, arguments);

                return acao(target);

              }
            }

            return Reflect.get(target, prop, receiver);
          },
          // Trabalhando com Propriedades Ex.: get nome () {}
          set(target, prop, value, receiver){
            if(props.includes(prop)){
              target[prop] = value;
              acao(target);
            }            
            target(prop) = value;  
            return Reflect.set(target, prop, value, receiver);
            
          }
        })
  }

  static _verificaFuncao(func){
    return typeof(func) == typeof(Function);
  }
}