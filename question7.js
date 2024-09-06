// Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.

let products = [
    { name: "Camiseta", price: 50, discount: 10 },
    { name: "Calça Jeans", price: 120, discount: 15 },
    { name: "Tênis", price: 200, discount: 20 },
    { name: "Jaqueta", price: 250, discount: 25 },
    { name: "Boné", price: 30, discount: 5 }
];

products.forEach(
    function (array) {
        array.discount = 10;
        let discountChange = array.price * (array.discount / 100);
        array.price = array.price - discountChange;
        console.log(array);
    }
);


