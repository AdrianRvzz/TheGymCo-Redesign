

import {Form, Alert, Button, Nav} from 'react-bootstrap'
import { useState } from 'react';

import NavBar from "./components/header";
import LandingPage from "./components/landingpage";
import Footer from "./components/footer";

function ContactPage(){
    const [error, setError] = useState('');

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [asunto, setAsunto] = useState('');
    const [mensaje, setMensaje] = useState('');

    
  const submit = async () => {
    // Verificar que no haya campos vacíos
    if (
      nombre.trim() === '' ||
    correo.trim() === '' ||
    telefono.trim() === '' ||
    asunto.trim() === '' ||
    mensaje.trim() === ''
      
    ) {
      setError('No deje campos vacios');
      return;
    }
  
    
  
   
  };
  

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
    setError('');
  };
  
  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
    setError('');
  };
  
  const handleTelefonoChange = (event) => {
    setTelefono(event.target.value);
    setError('');
  };
  
  const handleAsuntoChange = (event) => {
    setAsunto(event.target.value);
    setError('');
  };
  
  const handleMensajeChange = (event) => {
    setMensaje(event.target.value);
    setError('');
  };

    return (
      <div className='d-f'>
        <NavBar></NavBar>
        <section className="h-100 contactContainer d-flex align-items-center">
          <div className="container  h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col" style={{ maxWidth: "500px" }}>
                <div className="card card-registration my-4">
                  <div className="row g-0">
                    <div className="col-xl-12">
                      <div className="card-body p-md-3 text-black">
                        <div className="d-flex flex-column justify-content-center align-items-center ">
                          <h3 className="mb-4 text-uppercase">Contacto</h3>
                        </div>
                        {error && <Alert variant="danger">{error}</Alert>}

                        <Form.Group className="mb-4" controlId="nombre">
                          <Form.Label>Nombre completo</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Ingrese su nombre"
                            value={nombre}
                            onChange={handleNombreChange}
                            required
                          />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="correo">
                          <Form.Label>Correo electrónico</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Ingrese su correo electrónico"
                            value={correo}
                            onChange={handleCorreoChange}
                            required
                          />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="telefono">
                          <Form.Label>Teléfono</Form.Label>
                          <Form.Control
                            type="tel"
                            placeholder="Ingrese su número de teléfono"
                            value={telefono}
                            onChange={handleTelefonoChange}
                            required
                          />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="asunto">
                          <Form.Label>Asunto</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Ingrese el asunto"
                            value={asunto}
                            onChange={handleAsuntoChange}
                            required
                          />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="mensaje">
                          <Form.Label>Mensaje</Form.Label>
                          <Form.Control
                            as="textarea"
                            placeholder="Ingrese su mensaje"
                            value={mensaje}
                            onChange={handleMensajeChange}
                            required
                          />
                        </Form.Group>

                        <Button type="submit" variant="dark" onClick={submit}>
                          Enviar mensaje
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    );
}

export default ContactPage