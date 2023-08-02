const { resolve } = require("path");

function getUserById(id){
  return fetch(`https://reqres.in/api/users?id=${id}`)
   .then((data) => 
     data.json()).catch((err) =>{
        console.log(err);
    })
}

async function getUser(id){
    const user = await getUserById(id)
    console.log(user);
    console.log(`O nome do utilizador é ${user.data.first_name}`)
}

getUser(5)