import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./App.css";

import logo from "./buildingLogo.png";
import LogIn from "./LogIn";
import Personas from "./Personas";

import { QueryClient, QueryClientProvider } from "react-query";
import Edificios from "./Edificios";

const Layout = ({ children, onLogout, onNavigate }) => {
  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-dark">
        <img src={logo} width="60" height="60" alt=""></img>

        <span class="navbar-brand mb-1 h1">Consorciapp</span>
        <div>
          <Button onClick={onLogout}>Logout</Button>
        </div>
      </nav>
      <nav class="navbar navbar-expand bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <button
                  class="btn btn-link"
                  onClick={() => onNavigate("personas")}
                >
                  Personas
                </button>
              </li>
              <li class="nav-item">
                <button
                  class="btn btn-link"
                  onClick={() => onNavigate("edificios")}
                >
                  Edificios
                </button>
                <button
                  class="btn btn-link"
                  onClick={() => onNavigate("departamentos")}
                >
                  Departamentos
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br></br>

      {children}
    </div>
  );
};

function App() {
  const [usuarioLogueado, setUsuarioLogueado] = useState(null);
  const [page, setPage] = useState("personas");

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
      <Layout onLogout={logout} onNavigate={setPage}>
        <Personas usuarioLogueado={usuarioLogueado} />
      </Layout>
    );
  }
  if (page === "edificios") {
    return (
      <Layout onLogout={logout} onNavigate={setPage}>
        <Edificios />
      </Layout>
    );
  }

  return null;
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
