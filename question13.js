// Crie um objeto carrinho com uma propriedade itens, que é um
// array de objetos. Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
// para calcular o valor total do carrinho.

let cart = {
    items: [
        { name: "Camiseta", amount: 2, unityPrice: 50 },
        { name: "Calça Jeans", amount: 1, unityPrice: 120 },
        { name: "Tênis", amount: 1, unityPrice: 200 },
        { name: "Boné", amount: 3, unityPrice: 30 }
    ]
};

let checkout = 0;
cart.items.forEach(product => {
    checkout += (product.amount * product.unityPrice)
});

console.log("O valor do carrinho é: "+checkout);




