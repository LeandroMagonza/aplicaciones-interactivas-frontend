import './App.css';
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import ModalGenerarReclamo from './ModalGenerarReclamo';

import Reclamos from './Reclamos';
import LogIn from './LogIn';
import Personas from './Personas';
const logo = require('./buildingLogo.png');

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const httpClient = () => {
  const request = (method) => (url, data) => fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
   body: data ? JSON.stringify(data) : undefined 
  })

  return {
    get: request("GET"),
    post: request("POST"),
    put: request("PUT"),
    patch: request("PATCH"),
    delete: request("DELETE")
  }
}

const Layout = ({children}) => {
return <div className="App">


<nav class="navbar navbar-dark bg-dark">
  <img src={logo} width="60" height="60" alt=""></img>

  <span class="navbar-brand mb-1 h1">Consorciapp</span>
  <div>

    
    <Button onClick={Logout}>Logout</Button>
  </div>
</nav>

<br></br>
{
  children
}
</div>
}

function App() {
  const [usuarioLogueado, setUsuarioLogueado] = useState(null);
  
  function Logout() {
    setUsuarioLogueado(null);
  }
  
  if(usuarioLogueado === null){
    return <Layout>
<LogIn setUsuarioLogueado={setUsuarioLogueado}></LogIn>
    </Layout>
  }

  return <Layout><Personas usuarioLogueado={usuarioLogueado}></Personas></Layout>;
  
  
}

const queryClient = new QueryClient()

const AppWrapper = () => {
<QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
}

export default App;
