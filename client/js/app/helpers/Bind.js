class Bind {
  /**
   * 
   * @param {model} model 
   * @param {view} view 
   * @param {propriedades} props com uso do parâmetro REST
   */
  constructor(model, view, ...props){
    let proxy = ProxyFactory.create(model, props, model => view.update(model));

    view.update(model);

    return proxy;
  }
}