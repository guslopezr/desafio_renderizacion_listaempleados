//Componente de Formulario
import { useState } from "react";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Form,
    Button
} from 'react-bootstrap';



const FormularioApp = (props) => {

    const [alerta, setAlerta] = useState(null);

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [id, setId] = useState("");

    const capturarName = (e) => {
        if (e.target.value === "") {
            setAlerta("Campos no pueden estar vacíos")
        }
        setName(e.target.value)
    }

    const capturarMail = (e) => setMail(e.target.value)

    const guardarEmpleadoForm = (e) => {
        e.preventDefault();

        const empleado = {
            id: Date.now(),
            name: name,
            mail: mail
        }

        console.log(empleado);
        props.guardarEmpleado(empleado);
            ;

        setMail('');    
        setName('');    
        setId ('');

    
    }

    return (
        <div>
           
            <div className="form-empleados">
                <form onSubmit={guardarEmpleadoForm}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label >Nombre colaborador</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={capturarName}
 

                            type="text" placeholder="Ingresa nombre colaborador nuevo" />
                        <Form.Text className="text-muted">
                            Los datos son confidenciales
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Mail</Form.Label>
                        <Form.Control
                            value={mail}
                                onChange={capturarMail}


                            type="email" placeholder="Correo Electrónico" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Ingresar nuevo colaborador
                    </Button>
                </form>
                <br />

            </div>

        </div>
    )
}

export default FormularioApp;

