// Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.

let employees = [
    {
        name: "Rafael Lima",
        role: "Software Engineer SR",
        salary: 30000
    },
    {
        name: "Guedes",
        role: "CEO",
        salary: 100000
    },
    {
        name: "Angelo Artur",
        role: "Trainee - Software Developer",
        salary: 5000
    },
    {
        name: "Victor Costa",
        role: "Cleaner",
        salary: 1000
    },
    {
        name: "Rennan Mesaz",
        role: "Salesman",
        salary: 3000
    },
    {
        name: "Gustavo de Paula",
        role: "Administrator",
        salary: 4000
    }
]

//variaveis de teste de filtro
let value1 = 10000;
let value2 = 3000;
for (const employee of employees) {
    if (employee.salary >= value2) {
        console.log(employee);
    }
}



