const formulario = document.getElementById("formulario");
const boton = document.getElementById("btn");
const palabra = document.getElementById("palabra");
const resultado = document.getElementById("resultado");

const lista = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];

boton.addEventListener("click", (e) => {
  e.preventDefault();

  resultado.innerHTML = "";
  const palabraFormateada = palabra.value.trim().toLowerCase();

  if (!palabraFormateada) {
    return (resultado.innerHTML = `Ingrese texto`);
  }

  const coincidencias = lista.filter((p) =>
    p.toLowerCase().includes(palabraFormateada)
  );

  if (coincidencias.length === 0) {
    resultado.innerHTML = `no hay coincidencias`;
  } else {
    coincidencias.forEach((p) => {
      const prod = document.createElement("p");
      prod.innerHTML = `${p}`;
      resultado.appendChild(prod);
    });
  }
});
