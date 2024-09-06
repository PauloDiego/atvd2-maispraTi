// Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console.

let carro = {
    marca:"Chevrolet",
    modelo:"Chevette SL",
    ano:1990,
    cor:"Bege",
}
//mostrar as propriedades e valores
for (const dados in carro) {
    console.log(carro[dados]); 
}