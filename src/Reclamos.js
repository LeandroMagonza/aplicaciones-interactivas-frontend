import './App.css';
import React, { useState, useEffect } from "react";
import ModalGenerarReclamo from './ModalGenerarReclamo';
import CardReclamo from './CardReclamo';
import Button from "react-bootstrap/Button";


import { baseUrl, httpClient } from "./utils/httpClient";


function Reclamos({ usuarioLogueado, edificio }) {

  const [reclamos, setReclamos] = useState([]);
  

  useEffect(() => {
    fetch(baseUrl + "reclamo/edificio/" + edificio)
      .then((resp) => resp.json())
      .then((data) => {
        setReclamos(data);
      }).catch(
        ()=>{alert("Problema al traer reclamos del edificio nro "+edificio+".")}
    );



  }, []);



  return (
    <div>

      <div className='d-flex justify-content-around'>
        <h2 className='pageTitle'>Reclamos</h2>
      </div>
      <hr></hr>
      <div className='container'>

      {(reclamos.length == 0)?"No Hay Reclamos para el edificio "+edificio:
        reclamos.map((reclamo) => {
          return (
            <CardReclamo reclamo={reclamo} key={reclamo.numero} usuarioLogueado={usuarioLogueado}></CardReclamo>
          );
        })
        }

      </div>
    </div>
  );
}

export default Reclamos;