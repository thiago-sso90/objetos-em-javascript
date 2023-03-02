const clientes = require("./clientes.json");


function encontrar (lista , chave, valor){
    return lista.find((item) => item[chave].includes (valor));

}
const encontrado = encontrar(clientes, "nome","Husein");

//console.log(encontrado);

const encontrado2 = encontrar(clientes,"telefone", "5193301028");

console.log(encontrado2);