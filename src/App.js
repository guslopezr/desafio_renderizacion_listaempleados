import * as React from "react";
import trabajadoresDB from "./trabajadoresDB.json";
import FormularioApp from "./components/FormularioApp";
import { useState } from "react";
import TablaEmpleados from "./components/TablaEmpleados";
import Buscador from "./components/Buscador";
import Header from "./components/Header";

function App() {
  const [empleados, setEmpleados] = useState(trabajadoresDB);
  const [empleado, setEmpleado] = useState({});
  //console.log(empleados);

  const guardarEmpleado = (empleado) => {
    setEmpleados([...empleados, empleado]);
  };

  const buscarEmpleado = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    if (e.target.value) {
      const search = empleados.filter((empleado) => {
        if (
          empleado.name
            .trim()
            .toLowerCase()
            .includes(e.target.value)
        ) {
          return empleados;
        }
      });
      console.log(search);
      setEmpleados(search);
    }
  };

  return (
    <div className="container">
      <Header class />
      <Buscador buscarEmpleado={buscarEmpleado} />

      <br />

      <FormularioApp guardarEmpleado={guardarEmpleado} />

      <TablaEmpleados
        key={empleado.id}
        empleados={empleados}
        setEmpleado={setEmpleado}
      />
    </div>
  );
}

export default App;

// voy en 1:57 de la clase
