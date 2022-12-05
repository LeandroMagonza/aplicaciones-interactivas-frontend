import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useState } from "react";

function ModalCambiarEstadoReclamo({ open, onClose, onSubmit,reclamoID }) {
  const form = useForm();

  return (
    <>
      <Modal show={open} onHide={onClose} backdrop="static" keyboard={false}>
        <Form onSubmit={form.handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>Cambiar Estado de Reclamo</Modal.Title>
          </Modal.Header>
          
          <Modal.Body>
            <Form.Group>
              <Form.Label>Medidas Tomadas:</Form.Label>
              <Form.Control
                {...form.register("medidas")}
                label=""
                required
                placeholder="El dia sabado 23 el plomero reviso...."
                />
            </Form.Group>
                <Form.Label>Nuevo Estado:</Form.Label>
            <Form.Select {...form.register("estado")} required>
              <option value={1}>Abierto</option>
              <option value={2}>En Proceso</option>
              <option value={3}>Desestimado</option>
              <option value={4}>Anulado</option>
              <option value={5}>Terminado</option>
            </Form.Select>
            <Form.Group>
            
            </Form.Group> 
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onClose}>Cancelar</Button>
            <Button variant="success" type="submit">
              Generar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
export default ModalCambiarEstadoReclamo;
