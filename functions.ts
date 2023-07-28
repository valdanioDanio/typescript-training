function simplify(nome: string, isactive: boolean) : string {
  return nome;
}

//console.log(simplify("Valdanio Alberto", false));

async function test(): Promise<any>  {
  let data: any = await "default string";
  console.log("The value of data is " + data);
}

console.log("Before function execution");
test();
console.log("After function execution");