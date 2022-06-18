import React from "react";

const SECURITY_CODE = "paradigma";
function UseState() {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    console.log("iniciando useEffect");
    if (loading) {
      setTimeout(() => {
        if (value !== SECURITY_CODE) {
          setError(true);
        }
        setLoading(false);
      }, 3000);
    }
    console.log("finalizando useEffect");
  }, [loading]);

  const onValueChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <React.Fragment>
      <h2>Eliminar UseState</h2>
      <p>Escriba el codigo de seguridad para eliminar UseState</p>
      {error && !loading && <p>Error: Codigo no valido</p>}
      {loading && <p>Cargando...</p>}

      <input
        type="text"
        placeholder="Codigo de seguridad"
        value={value}
        onChange={onValueChange}
      />
      <button onClick={() => setLoading(true)}>Confirmar</button>
    </React.Fragment>
  );
}

export { UseState };
