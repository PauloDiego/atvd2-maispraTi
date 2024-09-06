// Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

let stock = [
    { product: "Camiseta", amount: 9, minimum: 10 },
    { product: "Calça Jeans", amount: 7, minimum: 5 },
    { product: "Tênis", amount: 5, minimum: 8 },
    { product: "Jaqueta", amount: 5, minimum: 3 },
    { product: "Boné", amount: 13, minimum: 15 }
];

let newFilterStock = [];

stock.forEach(array => {
    if (array.amount < array.minimum) {
        array.amount = array.amount * 2
    }
    newFilterStock.push(array);
});

console.log(newFilterStock);


