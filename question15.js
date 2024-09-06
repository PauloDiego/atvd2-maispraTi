// Crie um array de objetos transacoes, onde cada transação tem
// tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
// somando as entradas e subtraindo as saídas.

let transactions = [
    { type: "entrada", value: 1000 },
    { type: "saida", value: 500 },
    { type: "entrada", value: 200 },
    { type: "saida", value: 300 },
    { type: "entrada", value: 1500 }
];

let balanceIn = 0;
let balanceOut = 0;
let totalBalance = 0;

transactions.forEach(array => {
    if (array.type == "entrada") {
        balanceIn += array.value
    }

    if (array.type == "saida") {
        balanceOut += array.value
    }

    totalBalance = balanceIn - balanceOut
});

console.log("O saldo total é de: "+totalBalance);
