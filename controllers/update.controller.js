import { clientServices } from "../service/client-service.js";

const getClientData = async () => {
  //Obtener valores a traves de la url
  const value = window.location.search;
  const urlParams = new URLSearchParams(value);
  const id = urlParams.get("id");
  console.log(id);

  //Condicion para verificar que ID es el parametro de la URL y que existe en la DB
  if (id === null) {
    window.location.href = "/pages/error.html";
  }

  try {
    const profile = await clientServices.getClient(id);

    //Print valores en el formulario
    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");

    //Condicion para verificar que perfil existe a través de búsqueda URL del ID
    if (profile.nombre && profile.email) {
      nombre.value = profile.nombre;
      email.value = profile.email;
    } else {
      throw new Error();
    }
  } catch (error) {
    window.location.href = "/pages/error.html";
  }
};

getClientData();

const form = document.querySelector("[data-form]");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = window.location.search;
  const urlParams = new URLSearchParams(value);
  const id = urlParams.get("id");
  const formName = document.querySelector("[data-nombre]").value;
  const formEmail = document.querySelector("[data-email]").value;

  clientServices
    .updateClient(formName, formEmail, id)
    .then((window.location.href = "/pages/edicion_concluida.html"));
});
