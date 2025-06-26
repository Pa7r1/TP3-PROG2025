const contenedor = document.getElementById("contenedor-mayor");
const contenedorLista = document.getElementById("lista-tareas");
const boton = document.getElementById("btn");
const miError = document.getElementById("error");
const url = "https://jsonplaceholder.typicode.com/todos";

boton.addEventListener("click", async () => {
  const response = await fetch(url);
  if (!response.ok) {
    miError.textContent = `Hubo un problema: ${response.status} - ${response.statusText}`;
  }

  const data = await response.json();
  if (data && data.length > 0) {
    const completadas = data.filter((t) => t.completed === true);
    completadas.forEach((t) => {
      console.log(t);
      const li = document.createElement("li");
      li.innerHTML = `
      titulo: ${t.title} <br/>
      completada: si`;
      const br = document.createElement("br");
      contenedorLista.appendChild(li);
      contenedorLista.appendChild(br);
    });
  }
});
