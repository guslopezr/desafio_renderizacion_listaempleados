import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Form,
    Button
} from 'react-bootstrap';


const Buscador = ({buscar}) => {

    return (

    <div>
        <Form className="d-flex" id='idsearch' >
            <Form.Control
                type="search"
                placeholder="Buscar empleado"
                className="me-2"
                aria-label="Search"
                onChange={buscar}
            />
            <Button variant="outline-success">Buscar</Button>
        </Form>
    </div>
    )
}


export default Buscador