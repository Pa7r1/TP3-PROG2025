const { useState } = React;

function App() {
  const [n1, setN1] = useState();
  const [n2, setN2] = useState();
  const [resultado, setResultado] = useState();
  const [opcion, setOpcion] = useState("suma");

  const deshabilitarCalculo = opcion === "division" && (n1 == 0 || n2 == 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const numero1 = parseFloat(n1);
    const numero2 = parseFloat(n2);
    if (!numero1 | !numero2) {
      return setResultado(`ingrese un numero`);
    }
    let res = "";

    switch (opcion) {
      case "suma":
        res = numero1 + numero2;
        break;
      case "resta":
        res = numero1 - numero2;
        break;
      case "multiplicacion":
        res = numero1 * numero2;
        break;
      case "division":
        res = numero1 / numero2;
        break;
    }
    setResultado(`Resultado: ${res}`);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <span>ingrese numero </span>
            <input
              type="number"
              name="primer"
              id="primerNumero"
              value={n1}
              onChange={(e) => setN1(Number(e.target.value))}
            />
          </div>
          <br />
          <div>
            <span>ingrese numero </span>
            <input
              type="number"
              name="segundo"
              id="segundoNumero"
              value={n2}
              onChange={(e) => setN2(Number(e.target.value))}
            />
          </div>
          <br />
          <select value={opcion} onChange={(e) => setOpcion(e.target.value)}>
            <option value="suma">suma</option>
            <option value="resta">resta</option>
            <option value="multiplicacion">multiplicacion</option>
            <option value="division">division</option>
          </select>

          <input
            type="submit"
            value="Calcular"
            disabled={deshabilitarCalculo}
          />
        </form>
        <p>{resultado}</p>
      </div>
    </>
  );
}
