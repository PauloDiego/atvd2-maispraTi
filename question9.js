// Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

let customers = [
    { name: "João Silva", age: 30, city: "São Paulo" },
    { name: "Maria Oliveira", age: 25, city: "Rio de Janeiro" },
    { name: "Carlos Souza", age: 40, city: "Belo Horizonte" },
    { name: "Ana Costa", age: 35, city: "Curitiba" },
    { name: "Fernanda Lima", age: 28, city: "Porto Alegre" },
    { nome: "Pedro Albuquerque", age: 45, city: "Salvador" },
    { nome: "Juliana Mendes", age: 32, city: "Fortaleza" },
    { nome: "Rodrigo Gonçalves", age: 27, city: "Recife" },
    { nome: "Sandra Pereira", age: 38, city: "Brasília" },
    { nome: "Eduardo Martins", age: 22, city: "Manaus" }
];

let countCustomers = 0;
customers.forEach(array => {
    if (array.age > 30) {
        countCustomers++;
    }
});
console.log("Há "+countCustomers+" com mais de 30 anos. ");