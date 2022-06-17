import React from "react";

function UseState() {
  const [error, setError] = React.useState(false);
  return (
    <React.Fragment>
      <h2>Eliminar UseState</h2>
      <p>Escriba el codigo de seguridad para eliminar UseState</p>
      {error && <p>Error: Codigo no valido</p>}
      <input type="text" placeholder="Codigo de seguridad" />
      <button onClick={() => setError(!error)}>Confirmar</button>
    </React.Fragment>
  );
}

export { UseState };
