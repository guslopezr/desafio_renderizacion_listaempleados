import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";


const Buscador = ({ buscarEmpleado }) => {
  return (
    <div id="idsearch">
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Buscar artista, escribir todo en minúsculas"
          aria-label="Buscar"
          aria-describedby="basic-addon1"
          onChange={buscarEmpleado}
        />
      </InputGroup>
    </div>
  );
};

export default Buscador;
