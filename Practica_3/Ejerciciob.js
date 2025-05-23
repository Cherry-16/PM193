/* b.
1.Crea una función verificarUsuario(usuario) que retorne una promesa.
2. Si el nombre de usuario es "admin", la promesa se resuelve con "Acceso concedido", si no,
se rechaza con "Acceso denegado". 
function verificarUsuario(usuario) {
//retorna pormesa aquí 
}
// Usa .then y .catch para manejar el resultado. 
verificarUsuario("admin")
  .then(res => console.log(res)) // Acceso concedido
    .catch(err => console.log(err)); 
    verificarUsuario("Ivan")
    .then(res => console.log(res)) 
    .catch(err => console.log(err)); // Acceso denegado
*/ 
function verificarUsuario(usuario) {
  return new Promise((resolve, reject) => {
    if (usuario === "admin") {
      resolve("Acceso concedido");
    } else {
      reject("Acceso denegado");
    }
  });
}
// Usa .then y .catch para manejar el resultado.
verificarUsuario("admin")
  .then(res => console.log(res)) // Acceso concedido
  .catch(err => console.log(err));
verificarUsuario("Ivan")
    .then(res => console.log(res)) 
    .catch(err => console.log(err)); // Acceso denegado