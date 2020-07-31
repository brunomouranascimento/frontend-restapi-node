import React, { Component } from 'react';
// import { Admin } from 'react-admin';
import ClientesLista from './Components/ClientesLista'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header></header>
        <ClientesLista />

        {/* Esse componente Admin precisa de uma prop chamada dataProvider */}
        {/* <Admin></Admin> */}
        
      </div>
    );
  }
}

export default App;
