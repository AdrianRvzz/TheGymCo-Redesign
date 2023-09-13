import React, { useState, useContext } from 'react';
import { Modal, Button, Alert, CloseButton } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useFirebaseApp } from 'reactfire';
import { getDatabase, ref, set, serverTimestamp  } from 'firebase/database';
import { UserContext } from '../../UserContext';
import wallpaper from '../../images/wallpaper.png';



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

function RegistroUsuarioModal({ showModal, closeModal }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [direccion, setDireccion] = useState('');
  const [codigopostal, setCodigoPostal] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [repetirContrasena, setRepetirContrasena] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [error, setError] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const firebase = useFirebaseApp();
  const { setUser } = useContext(UserContext);

  const submit = async () => {
    // Verificar que no haya campos vacíos
    if (
      nombre.trim() === '' ||
      apellido.trim() === '' ||
      direccion.trim() === '' ||
      codigopostal.trim() === '' ||
      correo.trim() === '' ||
      contrasena.trim() === '' ||
      repetirContrasena.trim() === '' ||
      fechaNacimiento.trim() === ''
    ) {
      setError('No deje campos vacíos');
      return;
    }

    if (aceptaTerminos === false) {
      setError('Debe aceptar los términos y condiciones');
      return;
    }

    // Verificar que las contraseñas coincidan
    if (contrasena !== repetirContrasena) {
      if (!showAlert) {
        setError('Las contraseñas no coinciden');
      }
      return;
    }

    // Verificar la edad mínima de 15 años
    const fechaNacimientoDate = new Date(fechaNacimiento);
    const edadMinima = new Date();
    edadMinima.setFullYear(edadMinima.getFullYear() - 15);
    if (fechaNacimientoDate > edadMinima) {
      setError('Debe tener al menos 15 años para registrarse');
      return;
    }

    try {
      // Crear el usuario en Firebase Authentication
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        correo,
        contrasena
      );

      // Obtener el usuario registrado
      const user = userCredential.user;
      console.log('Usuario registrado:', user.uid);

      // Guardar los datos adicionales en Realtime Database
      const database = getDatabase();
      const userRef = ref(database, `users/${user.uid}`);
      await set(userRef, {
        nombre,
        apellido,
        direccion,
        codigopostal,
        fechaNacimiento,
        fechaRegistro: serverTimestamp(),
        correo: user.email,
        membresia: {
          membresia: "Gratis",
          fechaInicio: serverTimestamp()
        }
       
      });

      setUser({ name: correo });
      closeModal();
    } catch (error) {
      // Manejar los errores específicos de Firebase
      console.error('Error al crear el usuario:', error);
      if (error.code === 'auth/email-already-in-use') {
        setError('El correo electrónico ya está en uso');
      } else if (error.code === 'auth/weak-password') {
        setError('La contraseña es demasiado débil');
      } else if (error.code === 'auth/invalid-email') {
        setError('El correo no es válido');
      } else {
        setError('Error al crear el usuario. Por favor, inténtelo nuevamente.');
      }
    }
  };

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
    setError('')
  };

  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
    setError('')
  };

  const handleDireccionChange = (event) => {
    setDireccion(event.target.value);
    setError('')
  };

  const handleCodigoPostalChange = (event) => {
    setCodigoPostal(event.target.value);
    setError('')
  };

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
    setError('')
  };

  const handleContrasenaChange = (event) => {
    setContrasena(event.target.value);
    setError('')
  };

  const handleRepetirContrasenaChange = (event) => {
    setRepetirContrasena(event.target.value);
    setError('')
  };

  const handleFechaNacimientoChange = (event) => {
    setFechaNacimiento(event.target.value);
    setError('')
  };

  const handleAceptaTerminosChange = (event) => {
    setAceptaTerminos(event.target.checked);
  };

  return (
    <Modal show={showModal} onHide={closeModal} centered size="xl">
      
      <Modal.Body className='d-flex flex-column align-items-end justify-content-end'>
      <CloseButton onClick={closeModal} className='text-end'></CloseButton>
        <section className="h-100">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
                <div className="card card-registration my-4">
                  <div className="row g-0">
                    <div className="col-xl-6 d-none d-xl-block">
                      <img src={wallpaper} alt="Sample photo" className="img-fluid" />
                    </div>
                    <div className="col-xl-6">
                      <div className="card-body p-md-5 text-black">
                        <h3 className="mb-4 text-uppercase">Registro</h3>
                        
                        {error && <Alert variant="danger">{error}</Alert>}

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <Form.Group className="mb-3" controlId="firstName">
                              <Form.Label>Nombre</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Ingrese su nombre"
                                value={nombre}
                                onChange={handleNombreChange}
                                required
                              />
                            </Form.Group>
                          </div>
                          <div className="col-md-6 mb-4">
                            <Form.Group className="mb-3" controlId="lastName">
                              <Form.Label>Apellido</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Ingrese su apellido"
                                value={apellido}
                                onChange={handleApellidoChange}
                                required
                              />
                            </Form.Group>
                          </div>
                        </div>

                        <Form.Group className="mb-4" controlId="address">
                          <Form.Label>Dirección</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Ingrese su dirección"
                            value={direccion}
                            onChange={handleDireccionChange}
                            required
                          />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="pincode">
                          <Form.Label>Código postal</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Introduzca su código postal"
                            value={codigopostal}
                            onChange={handleCodigoPostalChange}
                            required
                          />
                        </Form.Group>

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

                        <Form.Group className="mb-4" controlId="confirmPassword">
                          <Form.Label>Repetir contraseña</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Repita su contraseña"
                            value={repetirContrasena}
                            onChange={handleRepetirContrasenaChange}
                            required
                          />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="fechaNacimiento">
                          <Form.Label>Fecha de Nacimiento</Form.Label>
                          <Form.Control
                            type="date"
                            value={fechaNacimiento}
                            onChange={handleFechaNacimientoChange}
                            required
                          />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="aceptaTerminos">
                          <Form.Check
                            type="checkbox"
                            label="Acepto los términos y condiciones"
                            checked={aceptaTerminos}
                            onChange={handleAceptaTerminosChange}
                            required
                          />
                        </Form.Group>

                        <Button variant='dark' className='w-100' onClick={submit}>
                          Registrarse
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Modal.Body>
    </Modal>
  );
}

export default RegistroUsuarioModal;
