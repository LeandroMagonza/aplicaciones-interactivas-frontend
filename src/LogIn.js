import React from "react";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";

import { useMutation, useQuery, useQueryClient } from "react-query";
import { httpClient } from "./utils/httpClient";
function LogIn(props) {

  const getPersona = async () => {
    const response = await httpClient.get("persona");
    return response.json();
  }
  const { data } = useQuery('persona', getPersona);
  
  const form = useForm();

  const handleValidarContrasenia = (form) => {
    let personaEncontrada = null;
    console.log(data);
    data.forEach(persona => {
      if (persona.documento == form.documento && persona.password == form.password) {
        console.log(form.documento, form.password, "encontrada");
        personaEncontrada = persona;
      }
    });

    if (personaEncontrada == null) {
      console.log("Nombre de usuario y contraseña no validos.")
    }
    else{
     props.setUsuarioLogueado(personaEncontrada);
    }

  }


  return (
    <div className="container">
      <Form onSubmit={form.handleSubmit(handleValidarContrasenia)}>
        <Form.Group>
          <Form.Label>Documento:</Form.Label>
          <Form.Control {...form.register("documento")} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Contraseña:</Form.Label>
          <Form.Control {...form.register("password")} required type="password" />
        </Form.Group>
        <Button variant="success" type="submit">Log In</Button>
      </Form>
    </div>
  );
}

export default LogIn;
