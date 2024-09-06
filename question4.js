// Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.

let peoples = [
    {
        name: "Paulo Diego",
        age: 22,
        city: "Fortaleza",
        state: "Ceará"
    },
    {
        name: "Rafael Lima",
        age: 22,
        city: "Horizonte",
        state: "Ceará" 
    },
    {
        name: "Rennan Oliveira",
        age: 21,
        city: "Itaitinga",
        state: "Ceará"
    },
    {
        name: "Eduardo Lopes",
        age: 21,
        city: "Itaitinga",
        state: "Ceará"
    },
    {
        name: "Gustavo de Paula",
        age: 21,
        city: "Sobral",
        state: "Ceará"
    }
]

for (const people of peoples) {
    console.log(people);
}