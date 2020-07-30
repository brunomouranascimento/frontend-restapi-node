import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server'
import { CreatePessoa, EditPessoa, ListPessoa } from './pages/index';


const dataProvider = jsonServerProvider ("http://localhost:3000");

const App = () => (
  <Admin dataProvider={dataProvider}>
  <Resource name ="pessoa" edit={EditPessoa} list ={ListPessoa} create ={CreatePessoa}/>
  </Admin>

)

export default App;