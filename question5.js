// Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.

let students = [
    {
        name: "Paulo Diego",
        grade1: 9,
        grade2: 8.25,
    },
    {
        name: "João Gabriel",
        grade1: 10,
        grade2: 8.25,
    },
    {
        name: "Marcos Antonio",
        grade1: 7,
        grade2: 6.75,
    },
    {
        name: "João Vitor",
        grade1: 7,
        grade2: 4.5,
    },

]

for (const student of students) {
    function calculateAvg() {
        let avgGrades = (student.grade1 + student.grade2) / 2;
        return avgGrades;
    }
    console.log("Estudante: "+student.name+" Média: "+calculateAvg());
}