import React from "react";

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  render() {
    return (
      <React.Fragment>
        <h2>Eliminar ClassState</h2>
        <p>Escriba el codigo de seguridad para eliminar ClassState</p>
        {this.state.error && <p>Error: Codigo no valido</p>}
        <input type="text" placeholder="Codigo de seguridad" />
        <button onClick={() => this.setState({ error: !this.state.error })}>
          Confirmar
        </button>
      </React.Fragment>
    );
  }
}

export { ClassState };
