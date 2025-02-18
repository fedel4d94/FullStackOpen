/*Servidor web simple
Cambiemos la aplicación para que sea un servidor web al editar el archivo index.js de la siguiente manera:
*/
const express = require("express");

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
const app = express();

app.use(express.json());
//cuando se entra al path (/) la responde devuelve...
app.get("/", (request, response) => {
  response.send("<h1> hello world! </h1>");
});

app.get("/api/notes", (request, response) => {
  response.json(notes);
});

app.get("/api/notes/:id", (request, response) => {
  // una forma dinamica de pasarle parametros por la url,
  // el tema es q SIEMPRE LLEGAN STRINGS y el id es un numero dentro de Notes.
  const id = Number(request.params.id); // solucionado pasandolo a number
  const note = notes.find((note) => note.id === id);

  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/notes/:id", (request, response) => {
  console.log("delete");
  const id = Number(request.params.id);
  notes = notes.filter((note) => note.id !== id);
  console.log("delete" + id);

  response.status(204).end();
});

const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
  return maxId + 1;
};

app.post("/api/notes", (request, response) => {
  const body = request.body;

  if (!body.content) {
    return response.status(400).json({
      error: "content missing",
    });
  }

  const note = {
    content: body.content,
    important: Boolean(body.important) || false,
    id: generateId(),
  };

  notes = notes.concat(note);

  response.json(note);
});

const PORT = 3001; // el servidor de arriba le decimos en q puerto queremos que escuche
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // mensaje de q el servidor se levanto ponele.
});
