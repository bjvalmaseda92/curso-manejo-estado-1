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

  const onError = () => {
    setState({
      ...state,
      loading: false,
      error: true,
    });
  };

  const onConfirm = () => {
    setState({
      ...state,
      loading: false,
      error: false,
      confirmed: true,
    });
  };

  const onWrite = (value) => {
    setState({ ...state, value: value });
  };

  const onCheck = () => {
    setState({ ...state, loading: true });
  };

  const onDelete = () => {
    setState({ ...state, deleted: true });
  };

  const onReset = () => {
    setState({ ...state, confirmed: false, value: "", deleted: false });
  };

  React.useEffect(() => {
    console.log("iniciando useEffect");
    if (state.loading) {
      setTimeout(() => {
        if (state.value !== SECURITY_CODE) {
          onError();
        } else {
          onConfirm();
        }
      }, 3000);
    }
    console.log("finalizando useEffect");
  }, [state.loading]);

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
          onChange={(e) => onWrite(e.target.value)}
        />
        <button onClick={onCheck}>Confirmar</button>
      </React.Fragment>
    );
  } else if (!state.deleted && state.confirmed) {
    return (
      <React.Fragment>
        <p>Esta seguro que desea eliminar?</p>
        <button onClick={onDelete}>Si, estoy seguro</button>
        <button onClick={onReset}>No, me arrepenti</button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <p>Elininado con exito</p>
        <button onClick={onReset}>Recuperar</button>
      </React.Fragment>
    );
  }
}

export { UseState };
