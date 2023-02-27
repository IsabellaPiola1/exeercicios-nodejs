/*
temp < 0          Está congelando
0 < temp < 10     Está frio
10 < temp <= 15   Está uma pouco frio
15 < temp <= 20   Está agradavel
20 < temp <= 30   Está calor
temp > 30         está muito calor
*/
const prompt = require("prompt-sync").prompt();

let temperatura = parseInt(prompt("Por favor, digite a temperatura: "));
console.log("Temperatura: ", temperatura);

if (temperatura < 0) {
    console.log("Está congelando");
} else if (temperatura > 0 && temperatura < 10){
    console.log("Está frio");
} else if (temperatura > 10 && temperatura <= 15){
    console.log("Está um pouco frio");
} else  if (temperatura > 20 && temperatura <= 30){
    console.log("Está calor");
} else if (temperatura > 15 && temperatura <= 20){
    console.log("Está agradavel");
} else {
    console.log("Está muito calor");
}

console.log("Fim do programa");