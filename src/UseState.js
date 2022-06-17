import React from "react";

function UseState() {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    console.log("iniciando useEffect");
    if (loading) {
      setTimeout(() => {
        setLoading(false);
        console.log("validando");
      }, 3000);
    }
    console.log("finalizando useEffect");
  }, [loading]);

  return (
    <React.Fragment>
      <h2>Eliminar UseState</h2>
      <p>Escriba el codigo de seguridad para eliminar UseState</p>
      {error && <p>Error: Codigo no valido</p>}
      {loading && <p>Cargando...</p>}

      <input type="text" placeholder="Codigo de seguridad" />
      <button onClick={() => setLoading(true)}>Confirmar</button>
    </React.Fragment>
  );
}

export { UseState };
