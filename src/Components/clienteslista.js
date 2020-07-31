import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ClientesLista() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const getClientes = () => {
      axios.get('http://localhost:3000/clientes').then(res => {
        console.log(res);
        setClientes(res.data);
      });
    };

    getClientes();
  }, []);

  return (
    <ul>
      {clientes.map(cliente => (
        <li>{cliente.nome}</li>
      ))}
    </ul>
  );
}
