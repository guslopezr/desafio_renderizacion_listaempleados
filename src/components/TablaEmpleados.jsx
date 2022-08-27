import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const TablaEmpleados = (props) => {

    return (
<div>

        <h3 className="listadofinal" >Listado de Colaboradores</h3>


        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id de Empleado</th>
                    <th>Nombre Empleado</th>
                    <th>Correo Empleado</th>
                </tr>
            </thead>
            <tbody>
                {props.empleados.map((empleado) => (
                    <tr key={empleado.id}>
                        <td>{empleado.id}</td>
                        <td>{empleado.name}</td>
                        <td>{empleado.mail}</td>
                    </tr>

                ))}

            </tbody>
        </Table>

        </div>

    )


}

export default TablaEmpleados;