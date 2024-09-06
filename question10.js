// Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

let sales = [
    { product: "Camiseta", amount: 3, value: 150 },
    { product: "Calça Jeans", amount: 2, value: 240 },
    { product: "Tênis", amount: 1, value: 200 },
    { product: "Jaqueta", amount: 4, value: 1000 },
    { product: "Boné", amount: 5, value: 150 },
    // { product: "Mochila", amount: 2, value: 300 },
    // { product: "Relógio", amount: 1, value: 500 },
    // { product: "Óculos de Sol", amount: 3, value: 450 },
    // { product: "Carteira", amount: 4, value: 200 },
    // { product: "Fones de ouvido", amount: 2, value: 400 }
];

let totalSum = 0;
sales.forEach(array => {
    totalSum += (array.value * array.amount);
});
console.log("A soma total das vendas é: "+totalSum);