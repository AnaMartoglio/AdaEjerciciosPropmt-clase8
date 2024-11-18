// Paso 1: Pedir los números al usuario

const prompt = require("prompt-sync")({ sigint: true }); 

let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));

// Paso 2: Pedir la operación al usuario
let operacion = prompt("Ingresa la operación que deseas realizar (suma, resta, multiplicacion, division):");

// Paso 3: Definir la lógica para realizar la operación
let resultado;

if (operacion === "suma") {
    resultado = numero1 + numero2;
} else if (operacion === "resta") {
    resultado = numero1 - numero2;
} else if (operacion === "multiplicacion") {
    resultado = numero1 * numero2;
} else if (operacion === "division") {
    if (numero2 !== 0) {
        resultado = numero1 / numero2;
    } else {
        console.log("Error: No se puede dividir por cero");
    }
} else {
    console.log("Operación no válida");
}

// Paso 4: Mostrar el resultado
if (resultado !== undefined) {
    console.log("El resultado de la operación es: " + resultado);
}
