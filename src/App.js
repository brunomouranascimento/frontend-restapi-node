import React, { Component } from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import ClientesLista from './Components/clienteslista';




class App extends Component {
  render (){
    return (
      <div classname="App">
        <header></header>
        <ClientesLista/>
        <Admin></Admin>
      </div>
    )
  }
}

export default App;