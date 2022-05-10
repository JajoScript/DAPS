// Dependencias.
import React, { Component } from "react";

// Estilos.
import "./App.scss";

// Definición componente App.
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Daps</h1>
        <h2 className="subTitle">Historia y vida de un conchesumadre</h2>
      </div>
    );
  }
}

// Exportación del componente.
export default App;
