function f(g,h){

    if( 10 > 10){
      g("O nosso P")
    }else{
      h("O vosso Q")
    }
  
  }
  
  function executarSeRejeitado(valor){
    console.log("Rejeitada "+valor);
  }
  
  function executarSeAciete(valor){
    console.log("Aceite "+valor);
  }
  
  const minhaPromise = new Promise(f);

  minhaPromise.then(valor =>{
    console.log("Resolveu "+valor);
  }).catch(valor=>{
    console.log("Não resolveu "+valor);
  })