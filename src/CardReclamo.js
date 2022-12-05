import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const logo = require('./buildingLogo.png');

function CardReclamo(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="card" id="headingOne">

            <h5 className="card-header">
            {props.reclamo.edificio.direccion}
            &nbsp;
            Piso: {props.reclamo.unidad.piso}
            &nbsp;
            Dto: {props.reclamo.unidad.numero}

            </h5>
            <div className="card-body">
                <h5 className="card-title">Creador: {props.reclamo.usuario.nombre}</h5>
                <p className="card-text">Descripcion: {props.reclamo.descripcion}</p>
                <p className="card-text">Ubicacion: {props.reclamo.ubicacion}</p>
                <p className="card-text">Estado: {props.reclamo.estado}</p>
                {/*<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>*/}
                {/*<a href="#" class="btn btn-primary">Go somewhere</a>*/}
            </div>
        </div>
    );
}
export default CardReclamo;