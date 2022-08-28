import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';


const Buscador = ({buscarNombre}) => {

    return (

    <div>
        <Form className="d-flex" id='idsearch' >
            <Form.Control
                type="search"
                placeholder="Buscar empleado"
                className="me-2"
                aria-label="Search"
                onChange={buscarNombre}
            />
        </Form>
    </div>
    )
}


export default Buscador