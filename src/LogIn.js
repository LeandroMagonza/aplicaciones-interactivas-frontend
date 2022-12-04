import React from "react";
import Button from "react-bootstrap/Button";

function LogIn(props) {
  function CheckearLogIn() {
    props.setUsuarioLogueado({
      documento: "DNI33016247",
      nombre: "MESSI, LIONEL ANDRÉS",
      email: "mailprueba@gmail.com",
      password: "1234",
      rol: "USER",
    });
  }

  return (
    <div className="container">
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Documento:</label>
          <input
            type="text"
            class="form-control"
            id="documento"
            placeholder="DNI25678910"
          ></input>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Contraseña:</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder=""
          ></input>
        </div>
        <Button onClick={CheckearLogIn}>Log In</Button>
      </form>
    </div>
  );
}

export default LogIn;
