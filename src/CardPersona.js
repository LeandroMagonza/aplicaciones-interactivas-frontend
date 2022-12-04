import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const logo = require('./buildingLogo.png');

function CardPersona(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div class="card" id="headingOne">

            <h5 class="card-header">
            {props.persona.nombre}
            &nbsp;
            Documento: {props.persona.documento}
            &nbsp;
            
            </h5>
            <div class="card-body ">
                <h5 class="card-title">Rol: {props.persona.rol}</h5>
                <Button>Editar</Button>
            </div>
        </div>
    );
}
export default CardPersona;