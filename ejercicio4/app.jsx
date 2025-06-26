const { useState } = React;
function App() {
  const [botonActivo, setBotonActivo] = useState("izquierdo");

  const habilitarDerecho = () => {
    setBotonActivo("derecho");
  };
  const habilitarIzquierdo = () => {
    setBotonActivo("izquierdo");
  };
  return (
    <>
      <div>
        <button
          onClick={habilitarDerecho}
          disabled={botonActivo != "izquierdo"}
        >
          izquierdo
        </button>
        <button
          onClick={habilitarIzquierdo}
          disabled={botonActivo != "derecho"}
        >
          derecho
        </button>
      </div>
    </>
  );
}
