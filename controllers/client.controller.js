import { clientServices } from "../service/client-service.js";

const crearNuevaLinea = (name, email, id) => {
  const line = document.createElement("tr");
  const content = ` 
      <td class="td" data-td>${name}</td>
      <td>${email}</td>
      <td>
        <ul class="table__button-control">
          <li>
            <a
              href="../screens/editar_cliente.html"
              class="simple-button simple-button--edit"
              >Editar</a
            >
          </li>
          <li>
            <button
              class="simple-button simple-button--delete"
              type="button"
              id=${id}
            >
              Eliminar
            </button>
          </li>
        </ul>
      </td>`;

  line.innerHTML = content;
  const btn = line.querySelector("button");
  btn.addEventListener("click", () => {
    const id = btn.id;
    clientServices.deleteClient(id);
  });
  return line;
};

const table = document.querySelector("[data-table]");

clientServices
  .listaClientes()
  .then((data) => {
    data.forEach(({ nombre, email, id }) => {
      const nuevaLinea = crearNuevaLinea(nombre, email, id);
      table.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("ocurrió un error"));
