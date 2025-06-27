const { useState } = React;

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");
  const [claseColor, setClaseColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const p = parseFloat(peso);
    const a = parseFloat(altura);

    if (!p || !a || p <= 0 || a <= 0) {
      setResultado("ingrese valor valido");
      return;
    }

    const imc = p / (a * a);
    const imcRedondeado = imc.toFixed(2);

    let res = "";
    let clase = "";

    if (imcRedondeado < 18.5) {
      res = `nivel bajo de imc`;
      clase = "amarillo";
    } else if (imcRedondeado >= 18.5 && imcRedondeado <= 24.9) {
      res = `nivel normal de imc`;
      clase = "verde";
    } else if (imcRedondeado >= 25 && imcRedondeado <= 29.9) {
      res = `nivel sobre peso de imc`;
      clase = "naranja";
    } else if (imcRedondeado >= 30) {
      res = `nivel obesidad de imc`;
      clase = "rojo";
    }

    setResultado(`Su IMC es: ${imcRedondeado} - ${res}`);
    setClaseColor(clase);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <span>Altura en metros </span>
            <input
              type="number"
              name="segundo"
              id="segundoNumero"
              value={altura}
              onChange={(e) => setAltura(Number(e.target.value))}
            />
          </div>
          <br />
          <div>
            <span>Peso en Kg </span>
            <input
              type="number"
              name="segundo"
              id="segundoNumero"
              value={peso}
              onChange={(e) => setPeso(Number(e.target.value))}
            />
          </div>

          <br />
          <input type="submit" value="Calcular" />
        </form>
        <p className={claseColor}>{resultado}</p>
      </div>
    </>
  );
}
