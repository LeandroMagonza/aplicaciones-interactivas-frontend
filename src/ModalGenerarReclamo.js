import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalGenerarReclamo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Generar Nuevo Reclamo
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Generar Nuevo Reclamo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label for="exampleFormControlInput1">Ubicacion:</label>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                <label class="form-check-label" for="exampleRadios1">
                  Mi Unidad
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
                <label class="form-check-label" for="exampleRadios2">
                  Area General
                </label>
              </div>
            </div>
            
            <div class="form-group">
              <label for="exampleFormControlInput1">Detalle de ubicacion:</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Techo de la cocina, piso del baño"></input>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Descripcion</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <div class="form-group">
              <label for="exampleFormControlFile1">Fotos:</label>
              <br></br>
              <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success">Generar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalGenerarReclamo;