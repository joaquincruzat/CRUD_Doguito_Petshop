import { clientServices } from "../service/client-service.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;
  console.log(nombre, email);
  clientServices
    .createClient(nombre, email)
    .then(
      (response) => (window.location.href = "/pages/registro_completado.html")
    )
    .catch((error) => console.log(error));
});
