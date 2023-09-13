
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState, useEffect } from 'react';

import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Gallery from './pages/Gallery.jsx'
import ProductPage from './pages/ProductPage.jsx'
import ClasesPage from './pages/ClasesPage.jsx'
import ServiciosPage from './pages/ServiciosPage.jsx'
import Horario from './pages/Horario.jsx'
import Mision from './pages/Mision.jsx'
import Vision from './pages/Vision.jsx'

import InfoUser from './pages/UserPage'
import ContactPage from './pages/ContactPage'
import MembresiasPage from './pages/MembresiasPage.jsx'

import SucursalesPage from './pages/SucursalesPage';
import ErrorPage from './pages/ErrorPage';

import Nosotros from './pages/Nosotros.jsx'
import {getDatabase} from 'firebase/database'

import { UserProvider } from './UserContext';

import { getAuth, onAuthStateChanged  } from "firebase/auth";



function App() {
  

  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log(user)
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
   
    <Router >
      <UserProvider value={{ user, setUser }}>
     
    <Routes>
    
      <Route path="/home" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="" element={<HomePage />} />
      <Route path="/galeria/riogrande" element={<Gallery route="riogrande"></Gallery> }/>
      <Route path="/galeria/lastorres" element={<Gallery route="lastorres"></Gallery> }/>
      <Route path="/galeria/hardbeat" element={<Gallery route="hardbeat"></Gallery> }/>
      <Route path="/beat" element={<ProductPage></ProductPage>}/>  
      <Route path="/clases" element={<ClasesPage></ClasesPage>}/> 
      <Route path="/servicios" element={<ServiciosPage></ServiciosPage>}/>   

      <Route path="/sucursales" element={<SucursalesPage></SucursalesPage>}/>

      <Route path="/sucursal/riogrande" element={<Horario route="riogrande"></Horario>}/>  
      <Route path="/sucursal/lastorres" element={<Horario route="lastorres"></Horario>}/>  
      <Route path="/sucursal/hardbeat" element={<Horario route="hardbeat"></Horario>}/>

      <Route path="/vision" element={<Vision ></Vision>}/> 
      <Route path="/mision" element={<Mision ></Mision>}/>
      <Route path="/nosotros" element={<Nosotros></Nosotros>}/>
      <Route path="/contacto" element={<ContactPage></ContactPage>}/>
      <Route path='/usuario' element={<InfoUser></InfoUser>}/>
      <Route path='/membresias' element={<MembresiasPage></MembresiasPage>}/>
      <Route path="*" element={<ErrorPage codeError={404}  help={"La página que estás buscando no existe. Por favor, verifica la URL o regresa a la página de inicio."} errorMessage="Página no encontrada" />} />

    </Routes>
    </UserProvider>
  </Router>


  );
}

export default App;
