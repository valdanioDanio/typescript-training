const { error } = require("console");

const promise = new Promise((resolve, reject) => {
  const res = false;
  if(res){
    resolve("Feito!")
  }else{
    reject("Not feito!")
  }
});

promise.then((res) =>{
  console.log(res)
}).catch(err => {
  console.log(err)
})

const bestDev = "Simão"

const promise2 = new Promise((resolve, reject) => {

  if(bestDev != "valdanio"){
    reject({
      nome: bestDev,
      messagem: "é o melhor?"
    })
  }else{
    resolve({
      nome: bestDev,
      messagem: "é o melhor"
    })
  }

})

promise2.then((resultado) => {
  console.log(resultado.nome + " "+ resultado.messagem)})
  .catch((error) => {
    console.log(error.nome + " "+ error.messagem)
  })

/*
promise2((resultado) => {
  console.log(resultado.nome + " "+ resultado.messagem)
}, (error) => {
  console.log(resultado.nome + " "+ resultado.messagem)
})*/

const url = "https://jsonplaceholder.typicode.com/users"

fetch(url).then(result => {
  return result.json()
}).then(rs => {

  rs.map((user) =>{
    console.log(user.name)
  }) 

}).catch(err => { 
  console.log("ups!! an error "+err)
})