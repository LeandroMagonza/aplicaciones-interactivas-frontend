import './App.css';
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import ModalGenerarReclamo from './ModalGenerarReclamo';

import Reclamos from './Reclamos';
import LogIn from './LogIn';
import Personas from './Personas';
const logo = require('./buildingLogo.png');

function App() {
  const [usuarioLogueado, setUsuarioLogueado] = useState(null);
  function Logout() {
    setUsuarioLogueado(null);
  }
  let contenido;
  if (usuarioLogueado != null) {
    contenido = <Personas usuarioLogueado={usuarioLogueado}></Personas>;
  }
  else {
    contenido = <LogIn setUsuarioLogueado={setUsuarioLogueado}></LogIn>;
  }

  return (
    <div className="App">


      <nav class="navbar navbar-dark bg-dark">
        <img src={logo} width="60" height="60" alt=""></img>

        <span class="navbar-brand mb-1 h1">Consorciapp</span>
        <div>

          <span class="navbar-brand mb-1 h1">{(usuarioLogueado != null) ? usuarioLogueado.nombre : ''}</span>
          <Button onClick={Logout}>Logout</Button>
        </div>
      </nav>

      <br></br>
      {
        contenido
      }
    </div>
  );
}

export default App;
