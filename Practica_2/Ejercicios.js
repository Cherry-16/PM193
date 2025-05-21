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

/*c.
Ahora con un arreglo de personas, realiza lo siguiente:
1. Usa .find() para buscar a la persona con nombre "Luis".
2. Usa .forEach() para imprimir el nombre de cada persona con su edad.
3. Usa .reduce() para sumar todas las edades y obtener un total. 
const personas=[
{nombre: "Ana", edad: 22}
{nombre: "Luis", edad: 35}
{nombre: "María", edad: 28}
]; 
*/

const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "María", edad: 28 }
];
const luis = personas.find(persona => persona.nombre === "Luis");
console.log(luis); 
personas.forEach(persona => {
    console.log(`${persona.nombre} tiene ${persona.edad} años.`);
});
const totalEdad = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
console.log(`La suma de todas las edades es: ${totalEdad}`);