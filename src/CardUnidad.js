import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
    useCreateReclamoMutation,
    useDeleteEdificioMutation,
    useEdificiosQuery,
    useEditEdificioMutation,
} from "./utils/api";
import ModalGenerarReclamo from './ModalGenerarReclamo';
const logo = require('./buildingLogo.png');

function CardUnidad({ unidad, setPage, setParam, usuarioLogueado }) {
    const [createOpen, setCreateOpen] = useState(false);
    const createMutation = useCreateReclamoMutation();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    function verReclamos(codigo) {
        setPage("reclamos");
        setParam(codigo);
    }

    return (
        <div className="card" id="headingOne">

            <h5 className={(unidad.duenio) ? "card-header bg-warning" : "card-header bg-primary"} >
                U{unidad.id}
                &nbsp;
                Piso: {unidad.piso}
                &nbsp;
                Dto: {unidad.numero}
                &nbsp;
                {(unidad.duenio) ? "Dueño" : "Inquilino"}

            </h5>
            <div className="card-body">
                <h5 className="card-title">Nombre de edificio: {unidad.edificio.nombre}</h5>
                <p className="card-text">Direccion de edificio: {unidad.edificio.direccion}</p>
                {/*<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>*/}
                {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                <Button
                    onClick={() => verReclamos(unidad.edificio.codigo)}>Ver Reclamos</Button>

                <Button variant="primary" onClick={() => setCreateOpen(true)}>
                    Generar Reclamo
                </Button>
                <ModalGenerarReclamo open={createOpen}
                    onClose={() => setCreateOpen(false)}
                    onSubmit={async (values) => {
                        let url = "";
                        if(values.imagenes.length){
                            const formData  = new FormData();
                            formData.set("key", "5b248df3f9d9593d8ee67f293cf7eb17");
                            formData.append("image", values.imagenes[0]);

                            const res = await fetch("https://api.imgbb.com/1/upload?key=5b248df3f9d9593d8ee67f293cf7eb17", {
                                method: "POST",
                                headers: {
                                    'Accept': 'application/json',
                                    'Access-Control-Allow-Origin': '*',
                                    'Connection': 'keep-alive',
                                    'Content-Type': 'application/json',
                                },
                                body: formData,
                            }).then((data)=>url =data.url).catch((error) => {
                                console.log("Problema al subir imagenes al servidor.")
                              });
                        }

                        await createMutation.mutate({
                            ...values,
                            usuario: usuarioLogueado,
                            unidad,
                            edificio: unidad.edificio,
                            estado: 0,
                            imagenes: []
                        });
                        setCreateOpen(false);
                    }}
                />
            </div>
        </div>
    );
}
export default CardUnidad;