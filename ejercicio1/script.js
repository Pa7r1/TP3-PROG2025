const formulario = document.getElementById("formulario");
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const contenedor = document.getElementById("contenedor-mayor");
selector = document.getElementById("operaciones");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  numero1 = Number(n1.value);
  numero2 = Number(n2.value);
  operacion = selector.value;
  resultado = Number;

  switch (operacion) {
    case "suma":
      resultado = numero1 + numero2;
      break;
    case "resta":
      resultado = numero1 - numero2;
      break;
    case "multiplicacion":
      resultado = numero1 * numero2;
      break;
    case "division":
      if ((numero1 <= 0) | (numero2 <= 0)) {
        resultado = `Debe ser mayor a cero`;
        break;
      }
      resultado = numero1 / numero2;
      break;
  }
  let span = document.createElement("span");
  span.innerHTML = `Resultado de la ${operacion} es: ${resultado}`;
  let br = document.createElement("br");
  contenedor.appendChild(span);
  contenedor.appendChild(br);
});
