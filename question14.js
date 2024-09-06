// Crie um objeto empresa com uma propriedade departamentos,
// que é um array de objetos. Cada departamento tem um nome e uma lista
// de funcionarios. Use for in e for f opara iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.

let company = {
    departments: [
        {
            name: "Recursos Humanos",
            employees: ["Ana Costa", "Pedro Almeida", "Clara Nogueira"]
        },
        {
            name: "Tecnologia da Informação",
            employees: ["Paulo Guedes", "João Vitor", "Rafael Lima"]
        },
        {
            name: "Marketing",
            employees: ["Juliana Mendes", "Fernanda Lima", "Roberto Pinto"]
        },
        {
            name: "Vendas",
            employees: ["Marcelo Santos", "Carla Dias", "Lucas Pereira"]
        }
    ]
};

let departmentName = "";
let employeesName = "";

for (const department in company.departments) {
    
    departmentName = company.departments[department].name
    console.log("--- "+ departmentName+"---");
    
    for (const employee of company.departments[department].employees) {
        console.log("Funcionário: "+employee);
    }
}