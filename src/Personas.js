import './App.css';
import React, { useState } from "react";
import ModalAgregarPersona from './ModalAgregarPersona';
import CardPersona from './CardPersona';

function Personas() {
    const [personas, setPersonas] = useState([
      {
        "documento": "DNI39374915",
        "nombre": "MAGONZA, LEANDRO",
        "email": "LMAGONZA@gmail.com",
        "password": "1234",
        "rol": "ADMIN"
    },
    {
      "documento": "DNI33016247",
      "nombre": "MESSI, LIONEL ANDRÉS",
      "email": "mailprueba@gmail.com",
      "password": "1234",
      "rol": "USER"
  },
    {
      "documento": "DNI23088947",
      "nombre": "DI MARIA, ANGEL",
      "email": "angelito@gmail.com",
      "password": "1234",
      "rol": "USER"
  },
      ]);


  return (
    <div>

      <div className='d-flex justify-content-around'>
        <h2 className='pageTitle'>Personas</h2>
        <ModalAgregarPersona></ModalAgregarPersona>
      </div>
      <hr></hr>
      <div className='container'>

        {personas.map((persona) => {
          return (
            <CardPersona persona={persona}></CardPersona>
          );
        })}

      </div>
    </div>
  );
}

export default Personas;