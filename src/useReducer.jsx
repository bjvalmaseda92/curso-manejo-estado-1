import React from "react";

const SECURITY_CODE = "paradigma";
function UseReducer({ name }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    console.log("iniciando useEffect");
    if (state.loading) {
      setTimeout(() => {
        if (state.value !== SECURITY_CODE) {
          dispatch({ type: "ERROR" });
        } else {
          dispatch({ type: "CONFIRM" });
        }
      }, 3000);
    }
    console.log("finalizando useEffect");
  }, [state.loading]);

  if (!state.confirmed && !state.deleted) {
    return (
      <React.Fragment>
        <h2>Eliminar {name}</h2>
        <p>Escriba el codigo de seguridad para eliminar UseState</p>
        {state.error && !state.loading && <p>Error: Codigo no valido</p>}
        {state.loading && <p>Cargando...</p>}

        <input
          type="text"
          placeholder="Codigo de seguridad"
          value={state.value}
          onChange={(e) => dispatch({ type: "WRITE", payload: e.target.value })}
        />
        <button onClick={() => dispatch({ type: "CHECK" })}>Confirmar</button>
      </React.Fragment>
    );
  } else if (!state.deleted && state.confirmed) {
    return (
      <React.Fragment>
        <p>Esta seguro que desea eliminar?</p>
        <button onClick={() => dispatch({ type: "DELETE" })}>
          Si, estoy seguro
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>
          No, me arrepenti
        </button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <p>Elininado con exito</p>
        <button onClick={() => dispatch({ type: "RESET" })}>Recuperar</button>
      </React.Fragment>
    );
  }
}

const initialState = {
  error: false,
  loading: false,
  value: "",
  confirmed: false,
  deleted: false,
};

const reducerObject = (state, payload) => ({
  ERROR: {
    ...state,
    loading: false,
    error: true,
  },
  CONFIRM: {
    ...state,
    loading: false,
    error: false,
    confirmed: true,
  },
  WRITE: { ...state, value: payload },
  CHECK: { ...state, loading: true },
  DELETE: { ...state, deleted: true },
  RESET: { ...state, confirmed: false, value: "", deleted: false },
});

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  } else {
    return state;
  }
};

export { UseReducer };
