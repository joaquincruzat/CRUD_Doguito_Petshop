import { clientServices } from "../service/client-service.js";

const crearNuevaLinea = (name, email) => {
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
            >
              Eliminar
            </button>
          </li>
        </ul>
      </td>`;
  line.innerHTML = content;
  return line;
};

const table = document.querySelector("[data-table]");

clientServices
  .listaClientes()
  .then((data) => {
    data.forEach((perfil) => {
      const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
      table.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("ocurrió un error"));
