import React from 'react';
import {Create, Edit, List, Datagrid, TextField, TextInput, SimpleForm} from 'react-admin';

export const ListCliente = props => (
    <List {...props}>
    <Datagrid rowClick ="edit">
        <TextField source="id"/>
        <TextField source="nome"/>
        <TextField source="endereço"/>
        <TextField source="telefone"/>
        <TextField source="telefone2"/>
    </Datagrid>
</List>
)

export const CreatePessoa = props => (
    <Create {...props}>
    <SimpleForm>
        <TextInput source="nome"/>
    </SimpleForm>
</Create>
)

export const EditPessoa = props => (
    <Create {...props}>
    <SimpleForm>
        <TextInput source="nome"/>
    </SimpleForm>
</Create>
)

export const DeletePessoa = props => (
    <Edit {...props}>
    <SimpleForm>
        <TextInput source="id"/>
        <TextInput source="nome"/>
    </SimpleForm>
</Edit>
)