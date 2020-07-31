import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';

export const ClientesLista = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="nome" />
            <TextField source="endereco" />
            <TextField source="telefone" />
            <TextField source="telefone2" />
        </Datagrid>
    </List>
);
