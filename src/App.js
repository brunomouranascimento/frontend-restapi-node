import React from 'react';

import { ClientesLista } from './Components/ClientesLista'
import simpleRestProvider from 'ra-data-simple-rest';
import { Admin, Resource } from 'react-admin';

const App = () => (
  <Admin dataProvider={simpleRestProvider('http://localhost:3000')}>
      <Resource name="clientes" list={ClientesLista} />
  </Admin>
);

export default App;
