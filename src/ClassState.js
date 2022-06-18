import React from "react";
const SECURITY_CODE = "paradigma";

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      error: false,
      loading: false,
    };
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    if (this.state.loading) {
      setTimeout(() => {
        if (SECURITY_CODE !== this.state.value) {
          this.setState({ loading: false, error: true });
        }
        this.setState({ loading: false });
      }, 3000);
    }
  }

  render() {
    return (
      <React.Fragment>
        <h2>Eliminar ClassState</h2>
        <p>Escriba el codigo de seguridad para eliminar ClassState</p>
        {this.state.error && !this.state.loading && (
          <p>Error: Codigo no valido</p>
        )}
        {this.state.loading && <p>Cargando...</p>}
        <input
          type="text"
          placeholder="Codigo de seguridad"
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <button onClick={() => this.setState({ loading: true })}>
          Confirmar
        </button>
      </React.Fragment>
    );
  }
}

export { ClassState };
