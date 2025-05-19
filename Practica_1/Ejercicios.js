// a. Corrige el siguiente código para que siga las buenas prácticas de JavaScript
// moderno (usa let y const en lugar de var) y asegúrate de que las variables no se
// puedan reasignar si no es necesario. 
// var nombre = "Armando"; 
// var edad = 25;
// nombre = "Ana María"; 
// var saludo = "Hola, " + nombre + ". Tienes" + edad + " años";

// const nombre = "Armando";
// let edad = 25;
// const saludo = `Hola, ${nombre}. Tienes ${edad} años`;
// console.log(saludo);  

// b. Convierte esta función tradicional a una arrow function que haga exactamente lo
// mismo: 
// function cuadrado(numero){
//     return numero * numero;
// }
// console.log(); 
//muestra en consola en probando con 3 números diferentes 

// const cuadrado = (numero) => numero * numero; 
// console.log(cuadrado(3)); 
// console.log(cuadrado(5));
// console.log(cuadrado(2));  

//c. Crea un arrow function llamada saludoPersonalizado que reciba dos parámetros: nombre y edad, 
// y retorne una cadena como la siguiente: "Hola, me llamo Vanessa y tengo 20 años". 

const saludoPersonalizado = (nombre, edad) => `Hola, me llamo ${nombre} y tengo ${edad} años`;
console.log(saludoPersonalizado("Vanessa", 20));