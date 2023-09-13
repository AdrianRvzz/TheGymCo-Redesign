import React, {useState, useContext} from  'react';


import {Modal, Button, Alert, CloseButton} from 'react-bootstrap'

import {Form} from 'react-bootstrap'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, browserSessionPersistence,setPersistence, browserLocalPersistence  } from "firebase/auth";
import {useFirebaseApp} from 'reactfire'
import { getDatabase, ref,set } from 'firebase/database';

import TheGymCoLogo from '../../images/logos/GLogo.png'; // Importa la imagen del logotipo
import RegistroUsuarioModal from './ModalRegistro';
import wallpaper from '../../images/wallpaper.png'
import { UserContext } from '../../UserContext';

function AlertDismissible({ show, setShow }) {
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          Las contraseñas no coinciden
        </Alert>
      );
    }
    return null;
  }
  

function LoginUsuarioModal({ showModal, closeModal }) {
  
  const [showRegistroModal, setShowRegistroModal] = useState(false);
  const openRegistroModal = () => {
    setShowRegistroModal(true);
  };
  const closeRegistroModal = () => {
    setShowRegistroModal(false);
  };
  const [correo, setCorreo] = React.useState('');
  const [contrasena, setContrasena] = React.useState('');
  

  const [aceptaGuardarSesion, setaceptaGuardarSesion] = useState(false);
  const [error, setError] = useState('');

  const [showAlert, setShowAlert] = useState(false);
  const firebase = useFirebaseApp();

  const { setUser } = useContext(UserContext);

  const submit = async () => {
    // Verificar que no haya campos vacíos
    if (
      
      correo.trim() === '' ||
      contrasena.trim() === '' 
      
    ) {
      setError('No deje campos vacios');
      return;
    }
  
    
  
    try {
      // Crear el usuario en Firebase Authentication
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        correo,
        contrasena
      );
  
      // Obtener el usuario registrado
      const user = userCredential.user;
      console.log('Usuario sesion iniciada:', user.uid);
      setUser({name: correo});
      closeModal()
  
    if(aceptaGuardarSesion){
        await setPersistence(auth, browserLocalPersistence);
        console.log("Guardar sesion")
    }
    else{
        await setPersistence(auth, browserSessionPersistence);
        console.log("No guardar sesion")
    }
     
    
      
      
    } catch (error) {
      // Manejar los errores específicos de Firebase
      console.error('Error al iniciar sesión:', error);
  if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
    setError('Credenciales de inicio de sesión inválidas');
  } else if (error.code === 'auth/invalid-email') {
    setError('El correo electrónico no es válido');
  } else {
    setError('Error al iniciar sesión. Por favor, inténtelo nuevamente.');
  }
    }
  };
  

  
  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
    setError('')
  };
  
  const handleContrasenaChange = (event) => {
    setContrasena(event.target.value);
    setError('')
  };


  const handleGuardarSesionChange = (event) => {
    setaceptaGuardarSesion(event.target.checked);
  };

  return (
    
        
 
        <section className="h-100 d-flex flex-column align-items-end justify-content-end">

          <div className="container  h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col" style={{maxWidth:"500px"}}>
                <div className="card card-registration my-4">
                  <div className="row g-0">
                   
                    <div className="col-xl-12">
                      <div className="card-body p-md-3 text-black">
                        <div className='d-flex flex-column justify-content-center align-items-center '>
                        <img src={TheGymCoLogo} className='bg-black mb-4 text-center ' style={{maxHeight:"50px", maxWidth:"50px"}}></img>
                        <h3 className="mb-4 text-uppercase">
                          Iniciar sesion
                        </h3>
                        </div>
                        {error && <Alert variant="danger">{error}</Alert>}
                        
                      
                         

                          <Form.Group className="mb-4" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Ingrese su email"
                              value={correo}
                              onChange={handleCorreoChange}
                              required
                            />
                          </Form.Group>

                          <Form.Group className="mb-4" controlId="password">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                              type="password"
                              placeholder="Ingrese su contraseña"
                              value={contrasena}
                              onChange={handleContrasenaChange}
                              required
                            />
                          </Form.Group>

                        

                          <Form.Group className='mb-4' controlId="aceptaGuardarSesion">
                            <Form.Check
                              type="checkbox"
                              label="Mantener sesión"
                              checked={aceptaGuardarSesion}
                              onChange={handleGuardarSesionChange}
                              required
                              variant='dark'
                            />
                          </Form.Group>

                          <Button className='mb-4 w-100' type="submit"variant='dark' onClick={submit}>Iniciar sesión</Button>
                          
                          <Form.Group className='mb-2' controlId="registrate">
                            
                           <span className='text-secondary '>¿No tienes cuenta? <Button variant='link' onClick={openRegistroModal}>Registrate aquí</Button></span>
                            
                          </Form.Group>

                          
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <RegistroUsuarioModal showModal={showRegistroModal} closeModal={closeRegistroModal} />
        </section>
   
  );
}

export default LoginUsuarioModal;
