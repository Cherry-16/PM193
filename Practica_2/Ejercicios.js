/*a.
1. Tienes el siguiente objeto persona.
2. Extrae los valores de nombre, edad y ciudad usando destructuración.
3. Luego, muestra un mensaje como: "Me llamo Ivan Isay, tengo 37 años y vivo en Qro." 
const persona={
nombre: "Ivan Isay", 
edad: 37, 
direccion: {
ciudad: "Qro",
pais: MX
}
};

Aplica desestructuración aquí 
Imprime el mensaje*/

// const persona = {
//     nombre: "Ivan Isay",
//     edad: 37,
//     direccion: {
//         ciudad: "Qro",
//         pais: "MX"
//     }
//     };
// const { nombre, edad, direccion: { ciudad } } = persona; 
// console.log(`Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`); 

/*b.
Con el siguiente arreglo de productos, realiza lo siguiente:
1. Filtra los productos cuyo precio sea mayor a 1000.
2. Usa .map() para convertir el resultado en un nuevo arreglo con solo los nombres de
esos productos.
const productos=[
{nombre: "Laptop", precio: 12000}
{nombre: "Mouse", precio: 250}
{nombre: "Teclado", precio: 750}
{nombre: "Monitor", precio: 3000}
];

Tú código aquí

console.log(nombres); [Laptop, Monitor]
*/ 

const productos = [
    { nombre: "Laptop", precio: 12000 },
    { nombre: "Mouse", precio: 250 },
    { nombre: "Teclado", precio: 750 },
    { nombre: "Monitor", precio: 3000 }
];
const nombres = productos
    .filter(producto => producto.precio > 1000)
    .map(producto => producto.nombre);
console.log(nombres); 
