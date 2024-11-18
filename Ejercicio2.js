// Pedir al usuario que ingrese tres números
const prompt = require("prompt-sync")({ sigint: true }); 
let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
let numero3 = parseFloat(prompt("Ingresa el tercer número:"));

// Comparar los tres números para determinar cuál es el mayor
if (numero1 >= numero2 && numero1 >= numero3) {
    console.log("El número mayor es: " + numero1);
} else if (numero2 >= numero1 && numero2 >= numero3) {
    console.log("El número mayor es: " + numero2);
} else {
    console.log("El número mayor es: " + numero3);
}
