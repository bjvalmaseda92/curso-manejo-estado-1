import React from "react";

const SECURITY_CODE = "paradigma";
function UseState() {
  const [state, setState] = React.useState({
    error: false,
    loading: false,
    value: "",
    confirmed: false,
    deleted: false,
  });

  React.useEffect(() => {
    console.log("iniciando useEffect");
    if (state.loading) {
      setTimeout(() => {
        if (state.value !== SECURITY_CODE) {
          setState({
            ...state,
            loading: false,
            error: true,
          });
        } else {
          setState({
            ...state,
            loading: false,
            error: false,
            confirmed: true,
          });
        }
      }, 3000);
    }
    console.log("finalizando useEffect");
  }, [state.loading]);

  const onValueChange = (e) => {
    setState({ ...state, value: e.target.value });
  };

  if (!state.confirmed && !state.deleted) {
    return (
      <React.Fragment>
        <h2>Eliminar UseState</h2>
        <p>Escriba el codigo de seguridad para eliminar UseState</p>
        {state.error && !state.loading && <p>Error: Codigo no valido</p>}
        {state.loading && <p>Cargando...</p>}

        <input
          type="text"
          placeholder="Codigo de seguridad"
          value={state.value}
          onChange={onValueChange}
        />
        <button onClick={() => setState({ ...state, loading: true })}>
          Confirmar
        </button>
      </React.Fragment>
    );
  } else if (!state.deleted && state.confirmed) {
    return (
      <React.Fragment>
        <p>Esta seguro que desea eliminar?</p>
        <button onClick={() => setState({ ...state, deleted: true })}>
          Si, estoy seguro
        </button>
        <button
          onClick={() => setState({ ...state, confirmed: false, value: "" })}
        >
          No, me arrepenti
        </button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <p>Elininado con exito</p>
        <button
          onClick={() =>
            setState({ ...state, deleted: false, confirmed: false, value: "" })
          }
        >
          Recuperar
        </button>
      </React.Fragment>
    );
  }
}

export { UseState };
