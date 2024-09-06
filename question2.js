// Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

let livro = {
    titulo: "Por que fazemos o que fazemos? ",
    autor: "Mário Sérgio Cortella",
    anoPublicacao: 2016,
    genero: "Filosofia",
    editora: "Elemental"
}
//verifacação se a propriedade existe, se n, cria ela
if (livro.hasOwnProperty("editora")) {
    console.log("Já existe uma editora no livro.");
    console.log(livro);
} else {
    for (const dados in livro) {
        livro.editora = "Planeta"
    }
    console.log(livro);
}

