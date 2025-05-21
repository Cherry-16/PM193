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