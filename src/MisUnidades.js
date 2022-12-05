import './App.css';
import React, { useState, useEffect } from "react";
import CardUnidad from './CardUnidad';

import { useMutation, useQuery, useQueryClient } from "react-query";
import { baseUrl, httpClient } from "./utils/httpClient";

function MisUnidades({ usuarioLogueado,setPage, setParam }) {

    const [misUnidades, setMisUnidades] = useState([]);

    let numeroDocumento = usuarioLogueado.documento.replace(/\D/g, '');
    let tipoDocumento = usuarioLogueado.documento.replace(/[0-9]/g, '');
    useEffect(() => {
        fetch(baseUrl + "persona/unidades/"+tipoDocumento+"/" + numeroDocumento)
            .then((resp) => resp.json())
            .then((data) => {
                let unidades = [];
                data?.duenioDe.forEach(unidadDuenio => {
                    unidadDuenio["duenio"] = true;
                    unidades.push(unidadDuenio);
                });
                data?.inquilinoDe.forEach(unidadInquilino => {
                    unidadInquilino["duenio"] = false;
                    unidades.push(unidadInquilino);
                });
                setMisUnidades(unidades);
            }).catch(
                ()=>{alert("Problema al traer unidades.")}
            );
    }, []);





    if (misUnidades === []) {
        return <h3 className='container'>Usted no tiene unidades asociadas</h3>
    }

    return (
        <div>

            <div className='d-flex justify-content-around'>
                <h2 className='pageTitle'>Mis Unidades</h2>
            </div>
            <hr></hr>
            <div className='container'>
                {(misUnidades.length == 0)?"Cargando":""}
                {misUnidades.map((unidad) => {
                    return (
                        <CardUnidad usuarioLogueado={usuarioLogueado} unidad={unidad} key={unidad.id}
                        setPage = {setPage} setParam = {setParam}></CardUnidad>
                    );
                })}

            </div>
        </div>
    );
}

export default MisUnidades;