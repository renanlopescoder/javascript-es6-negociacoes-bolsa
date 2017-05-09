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
          get(target, prop, receiver) {

            if (props.includes(prop) && typeof (target[prop]) == typeof (Function)) {

              return function () {

                console.log(`método '${prop}' interceptado`);

                Reflect.apply(target[prop], target, arguments);

                return acao(target);

              }
            }

            return Reflect.get(target, prop, receiver);
          }
        })
  }
}