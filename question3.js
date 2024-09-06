// Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

let product = {
    name: "Livro",
    price: 120,
    available: true,
    freight: 25
};
//variaveis de testes de filtro
let value1 = 100;
let value2 = 150;

//novo objeto
let newFilter = {};

//função que retorna um novo objeto com filtro
function toFilterValue(object,value) {
    for (const price in object) {
        if (object[price] > value) {
            newFilter[price] = object[price]
        }
    }
    return newFilter;
}

console.log(toFilterValue(product, value1));