const contenedor = document.getElementById("contenedor-mayor");
const formulario = document.getElementById("formulario");
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const selector = document.getElementById("operaciones");
const boton = document.getElementById("btn");

function verificarDivision() {
  if (selector.value === "division" && (n1.value == 0 || n2.value == 0)) {
    boton.disabled = true;
  } else {
    boton.disabled = false;
  }
}

n1.addEventListener("input", verificarDivision);
n2.addEventListener("input", verificarDivision);
selector.addEventListener("change", verificarDivision);

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  numero1 = Number(n1.value);
  numero2 = Number(n2.value);
  operacion = selector.value;
  resultado = Number;

  if (!numero1 || !numero2) {
    let span = document.createElement("span");
    span.innerHTML = "ingrese valores";
    let br = document.createElement("br");
    contenedor.appendChild(span);
    contenedor.appendChild(br);
    return;
  }
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
