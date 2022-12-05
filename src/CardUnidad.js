import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const logo = require('./buildingLogo.png');

function CardUnidad({unidad, setPage, setParam}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function verReclamos(codigo){
        setPage("reclamos");
        setParam(codigo);
    }

    return (
        <div className="card" id="headingOne">

            <h5 className={(unidad.duenio)?"card-header bg-warning":"card-header bg-primary"} >
            U{unidad.id}
            &nbsp;
            Piso: {unidad.piso}
            &nbsp;
            Dto: {unidad.numero}
            &nbsp;
            {(unidad.duenio)?"Dueño":"Inquilino"}

            </h5>
            <div className="card-body">
                <h5 className="card-title">Nombre de edificio: {unidad.edificio.nombre}</h5>
                <p className="card-text">Direccion de edificio: {unidad.edificio.direccion}</p>
                {/*<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>*/}
                {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                <Button 
                 onClick={() => verReclamos(unidad.edificio.codigo)}>Ver Reclamos</Button>
            </div>
        </div>
    );
}
export default CardUnidad;