import React from'react';
import { List, Create, Edit, SimpleForm, Datagrid, TextField, TextInput } from 'react-admin';


export const ListTipo =  props =>(
<List {...props}>
    <Datagrid>
        <TextField source = "id" label = "#" />
        <TextField source = "nome" label = "Nome" />
    </Datagrid>
</List>
)

export const EditTipo =  props =>(
    <Edit {...props}>
        <SimpleForm>
            <TextField source = "id" label = "#" />
            <TextField source = "nome" label = "Nome" />
        </SimpleForm>
    </Edit>
    )

export const CreateTipo =  props =>(
        <Create {...props}>
            <SimpleForm>
                <TextInput source = "id" label = "#" />
                <TextInput source = "nome" label = "Nome" />
            </SimpleForm>
        </Create>
        )
    
