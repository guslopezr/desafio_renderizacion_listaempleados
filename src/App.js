
import * as React from 'react';
import trabajadoresDB from './trabajadoresDB.json';
import FormularioApp from "./components/FormularioApp";
import { useEffect, useState } from 'react';
import TablaEmpleados from './components/TablaEmpleados';
import Buscador from './components/Buscador';
import Header from './components/Header';

function App() {

  const [empleados, setEmpleados] = useState(trabajadoresDB);
  const [empleado, setEmpleado] = useState({});
  //console.log(empleados);

  const guardarEmpleado = (empleado) => {
    //e.preventDefault();
    //console.log(guardarEmpleado);
    setEmpleados([...empleados, empleado])
  }

  const borrarEmpleado = (e) => {
    console.log("borrarEmpleado");
  }

  //función para buscar empleados
  function buscarEmpleado(e) {
    e.preventDefault();
    console.log(e.target.value);

    if (e.target.value) {
      const search = empleados.filter((empleado) => {
        if (
          empleado.name.trim().toLocaleLowerCase().includes(e.target.value)
        ) {
          return empleado;
        }
      });
      setEmpleados(search);
    }
  }


  return (
    <div className='container' >
        <Header class />
      <Buscador
        buscarEmpleado={buscarEmpleado}

      />
      <br />

      <FormularioApp
        guardarEmpleado={guardarEmpleado}
      />


      <TablaEmpleados
        key={empleado.id}
        empleados={empleados}
        setEmpleado={setEmpleado}
        borrarEmpleado={borrarEmpleado}
      />



</div>
  );
}

export default App;

// voy en 1:57 de la clase 
