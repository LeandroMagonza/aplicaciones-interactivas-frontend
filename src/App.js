import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./App.css";

import logo from "./buildingLogo.png";
import LogIn from "./LogIn";
import Personas from "./Personas";
import MisUnidades from "./MisUnidades";

import { QueryClient, QueryClientProvider } from "react-query";
import Edificios from "./Edificios";

import Reclamos from "./Reclamos";

const Layout = ({ children, onLogout, onNavigate, usuarioLogueado }) => {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <img src={logo} width="60" height="60" alt=""></img>

        <span className="navbar-brand mb-1 h1">Consorciapp</span>
        <div>
          <Button onClick={onLogout}>Logout</Button>
        </div>
      </nav>
      <nav className="navbar navbar-expand bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {(usuarioLogueado != null) ?

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {(usuarioLogueado.rol == "ADMIN") ?
                  <div>
                    <li className="nav-item">
                      <button
                        className="btn btn-link"
                        onClick={() => onNavigate("personas")}
                      >
                        Personas
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="btn btn-link"
                        onClick={() => onNavigate("edificios")}
                      >
                        Edificios
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="btn btn-link"
                        onClick={() => onNavigate("reclamos")}
                      >
                        Reclamos
                      </button>
                    </li>
                  </div> : ""}
                <li className="nav-item">
                  <button
                    className="btn btn-link"
                    onClick={() => onNavigate("misUnidades")}
                  >
                    Mis Unidades
                  </button>
                </li>
              </ul> : ""}
          </div>
        </div>
      </nav >
      <br></br>

      {children}
    </div >
  );
};

function App() {
  const [usuarioLogueado, setUsuarioLogueado] = useState(null);
  const [page, setPage] = useState("misUnidades");
  const [param, setParam] = useState("");

  function logout() {
    setUsuarioLogueado(null);
  }

  if (usuarioLogueado === null) {
    return (
      <Layout onLogout={logout} onNavigate={setPage}>
        <LogIn setUsuarioLogueado={setUsuarioLogueado} />
      </Layout>
    );
  }


  if (page === "personas") {
    return (
      <Layout onLogout={logout} onNavigate={setPage} usuarioLogueado={usuarioLogueado}>
        <Personas usuarioLogueado={usuarioLogueado} />
      </Layout>
    );
  }
  if (page === "edificios") {
    return (
      <Layout onLogout={logout} onNavigate={setPage} usuarioLogueado={usuarioLogueado}>
        <Edificios usuarioLogueado={usuarioLogueado} />
      </Layout>
    );
  }
  if (page === "reclamos") {
    return (
      <Layout onLogout={logout} onNavigate={setPage} usuarioLogueado={usuarioLogueado}>
        <Reclamos usuarioLogueado={usuarioLogueado} edificio={param} />
      </Layout>
    );
  }
  if (page === "misUnidades") {
    return (
      <Layout onLogout={logout} onNavigate={setPage} usuarioLogueado={usuarioLogueado}>
        <MisUnidades usuarioLogueado={usuarioLogueado} setPage={setPage} setParam={setParam} />
      </Layout>
    );
  }


  return { page };
}

const queryClient = new QueryClient();

const AppWrapper = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};

export default AppWrapper;
