/*Servidor web simple
Cambiemos la aplicación para que sea un servidor web al editar el archivo index.js de la siguiente manera:
*/
const http = require("http"); //importando el modulo de http como el import.

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];
const app = http.createServer((request, response) => {
  //basicamente app estamos creando un server
  // y a createServer le pasamos una funcion de callback q se ejecuta cuando ocurre algo, similar a un click
  response.writeHead(200, { "Content-Type": "application/json" }); // hay muchos tipos de conten-type
  //devuelve el codigo 200 OK, y el tipo de dato es json en este caso.
  response.end(JSON.stringify(notes)); //para terminar la respuesta devuelve este objeto notes
  //cada vez q le llegue una request a este servidor va a ejecutar esta funcion completa,
  //1er parametro es info de la request q le llega
  //2do parametro una respuesta con parametros para responder
});

const PORT = 3001; // el servidor de arriba le decimos en q puerto queremos que escuche
app.listen(PORT); //le decimos que escuche.
console.log(`Server running on port ${PORT}`); // mensaje de q el servidor se levanto ponele.
