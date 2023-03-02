const clientes = require("./clientes.json");

function filtrarApartamentoSemComplemento(clientes) {
  return clientes.filter((cliente) => {
    return (
      cliente.endereco.apartamento &&
                        //verifica se tem a propriedade 'complemento'
      !cliente.endereco.hasOwnProperty("complemento")
    );
  });
}

const filtrados = filtrarApartamentoSemComplemento(clientes);

console.log(filtrados);