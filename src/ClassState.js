import React from "react";

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
    };
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    if (this.state.loading) {
      setTimeout(() => {
        this.setState({ loading: false });
        console.log("validando");
      }, 3000);
    }
  }

  render() {
    return (
      <React.Fragment>
        <h2>Eliminar ClassState</h2>
        <p>Escriba el codigo de seguridad para eliminar ClassState</p>
        {this.state.error && <p>Error: Codigo no valido</p>}
        {this.state.loading && <p>Cargando...</p>}
        <input type="text" placeholder="Codigo de seguridad" />
        <button onClick={() => this.setState({ loading: true })}>
          Confirmar
        </button>
      </React.Fragment>
    );
  }
}

export { ClassState };
