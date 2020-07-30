import React from 'react';
import axios from 'axios';




export default class ClientesLista extends React.component {
    state = {
        cliente: [],
    };

componentDidMount(){
    axios.get(`http:localhost:3000/clientes`)
        .then(res=>{
            console.log(res);
            this.setState({cliente:res.data})
        });
}
render (){
    return(
        <ul>
            {this.state.cliente.map(cliente=><li>{cliente.nome}</li>)}
        </ul>
    )
}
}