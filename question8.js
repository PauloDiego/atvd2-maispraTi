// Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.

let movies = [
    {
        title: "O Senhor dos Anéis: A Sociedade do Anel",
        director: "Peter Jackson",
        releaseYear: 2001
    },
    {
        title: "Matrix",
        director: "Lana Wachowski, Lilly Wachowski",
        releaseYear: 1999
    },
    {
        title: "Inception",
        director: "Christopher Nolan",
        releaseYear: 2010
    },
    {
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        releaseYear: 1994
    },
    {
        title: "O Poderoso Chefão",
        director: "Francis Ford Coppola",
        releaseYear: 1972
    }
];

let newFilterTitles = [];

movies.forEach(array => {
    newFilterTitles.push(array.title)
});

console.log(newFilterTitles);