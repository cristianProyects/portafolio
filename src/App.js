import { BrowserRouter, HashRouter, useRoutes } from "react-router-dom";

import { Layout } from './components/Layout'
import { Context } from "./context/context";
import Knowladges from "./pages/Knowladges";
import { Proyects } from "./pages/Proyects";
import ProyectDetail from "./components/ProyectDetail";
import Contact from "./pages/Contact";
import Me from "./pages/Me";
import Home from "./pages/Home";

function App() {
  function Routes(){
    return (useRoutes([
      { path:'/' , element: <Home /> },
      { path:'/me' , element: <Me /> },
      { path:'/knowladges' , element: <Knowladges/> },
      { path:'/proyects' , element: <Proyects /> },
      { path:'/contact' , element: <Contact /> },
    ]))
  } 
  return (
    <Context>
      <HashRouter>
        <Layout >
          <Routes />  
        </Layout>
        <ProyectDetail  />    
      </HashRouter>
    </Context>
  );
}

export default App;
