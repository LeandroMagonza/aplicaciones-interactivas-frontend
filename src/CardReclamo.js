import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalCambiarEstadoReclamo from './ModalCambiarEstadoReclamo';
import {
    useEditEstadoReclamo,
} from "./utils/api";

function CardReclamo(props) {
    const [createOpen, setCreateOpen] = useState(false);
    const createMutation = useEditEstadoReclamo();
    const [show, setShow] = useState(false);
    return (
        <div className="card" id="headingOne">

            <h5 className="card-header">
                R{props.reclamo.numero}
                &nbsp;
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

                {(true) ?
                    <div>

                        <Button variant="primary" onClick={() => setCreateOpen(true)}>
                            Cambiar Estado
                        </Button>
                        <ModalCambiarEstadoReclamo open={createOpen}
                            onClose={() => setCreateOpen(false)}
                            onSubmit={async (values) => {
                                await createMutation.mutate({
                                    ...values,
                                    reclamoNumero: props.reclamo.numero
                                });
                                setCreateOpen(false);
                            }}
                            reclamoID = {props.reclamo.numero}
                        />
                    </div>
                    : ""}
            </div>
        </div>
    );
}
export default CardReclamo;