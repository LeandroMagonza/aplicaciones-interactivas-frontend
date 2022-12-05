import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

function ModalGenerarReclamo({ open, onClose, onSubmit,edificio }) {
  const form = useForm();
  return (
    <>
      <Modal show={open} onHide={onClose} backdrop="static" keyboard={false}>
        <Form onSubmit={form.handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>Generar Nuevo Reclamo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Mi unidad</Form.Label>

              <Form.Check
                {...form.register("miUnidad")}
                type="radio"
                value={edificio}
                label="Mi Unidad"
                required
              />

              <Form.Check
                {...form.register("miUnidad")}
                type="radio"
                required
                value={edificio}
                label="Area General"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Detalle de ubicacion:</Form.Label>
              <Form.Control
                {...form.register("ubicacion")}
                label=""
                required
                placeholder="Techo de la cocina, piso del baño"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Descripción:</Form.Label>
              <Form.Control
                {...form.register("descripcion")}
                rows="3"
                required
                as="textarea"
                placeholder="Techo de la cocina, piso del baño"
              />
            </Form.Group>
{/* 
            <Form.Group>
              <Form.Label>Fotos:</Form.Label>

              <Form.Control {...form.register("fotos")} type="file" required />
            </Form.Group> */}
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
export default ModalGenerarReclamo;
