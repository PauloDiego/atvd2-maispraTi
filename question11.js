// Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.

let order = [
    { client: "João Silva", product: "Camiseta", amount: 2 },
    { client: "Maria Oliveira", product: "Calça Jeans", amount: 1 },
    { client: "Carlos Souza", product: "Tênis", amount: 1 },
    { client: "Ana Costa", product: "Jaqueta", amount: 3 },
    { client: "Fernanda Lima", product: "Boné", amount: 4 }
]; 

let newFilterAmount = {};

order.forEach(array => {
    if (newFilterAmount[array.client]) {
        newFilterAmount[array.client] += array.amount
    } else {
        newFilterAmount[array.client] = array.amount
    }
});

console.log(newFilterAmount);