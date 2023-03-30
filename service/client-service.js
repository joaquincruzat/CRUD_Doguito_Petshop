//Abrir http (método, url)
// CRUD - Métodos HTTP
// Create - POST
// Read - GET
// Update - PUT/PATCH
// Delete - DELETE

//Fetch API

const listaClientes = () =>
  fetch("http://localhost:3000/perfil").then((response) => response.json());

//
// const promise = new Promise((resolve, reject) => {
//   const http = new XMLHttpRequest();
//   http.open("GET", "http://localhost:3000/perfil");
//   http.send();
//   http.onload = () => {
//     const response = JSON.parse(http.response);
//     if (http.status >= 400) {
//       reject(response);
//     } else {
//       resolve(response);
//     }
//   };
// });
// return promise;

const createClient = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre,
      email,
      id: uuid.v4(),
    }),
  });
};

export const clientServices = {
  listaClientes,
  createClient,
};
