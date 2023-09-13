import React, { useState, useEffect, useContext } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, onValue } from 'firebase/database';

import NavBar from "./components/header";
import LandingPage from "./components/landingpage";
import Footer from "./components/footer";

import Login from './components/Login';
import { Dropdown, Container, Form, Button } from 'react-bootstrap';
import { UserContext } from '../UserContext';

function UserProfile() {

  const { user,setUser } = useContext(UserContext);


  const [correo, setCorreo]=useState('')
  const [nombre, setNombre]=useState('')
  const [apellido, setApellido] =useState('')
  const [fechaNacimiento, setFechaNacimiento]=useState('')
  const [direccion, setDireccion]=useState('')
  const [codigopostal, setCodigoPostal]=useState('')

  const [DiasRestantes, setDiasRestantes] = useState('');
  const [FechaVencimiento, setFechaVencimiento] = useState('');
  const [userMembresia, setuserMembresia] = useState('');
  const [fechaRegistro, setfechaRegistro] = useState('');
  const [fechaInicio, setfechaInicio] = useState('');

  useEffect(() => {
    const auth = getAuth();
    console.log("AUTH:")
    console.log(auth);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      
      if (user) {
        const database = getDatabase();
        const userRef = ref(database, `users/${user.uid}`);
        

        onValue(userRef, (snapshot) => {
          const userData = snapshot.val();
          setUser(userData);
          console.log("USERDATA:")
          console.log(userData);

          setCorreo(userData.correo)
          setNombre(userData.nombre)
          setApellido(userData.apellido)

         
       
          

          setFechaNacimiento(userData.fechaNacimiento)
          setDireccion(userData.direccion)
          setCodigoPostal(userData.codigopostal)

            setuserMembresia(userData.membresia.membresia);
          
          const registrodate = new Date(userData.fechaRegistro);
          setfechaRegistro(registrodate.toLocaleDateString());

          const fechaInicio = new Date(userData.membresia.fechaInicio);
          

          const fechaMostrada = new Date(fechaInicio);
          setfechaInicio(fechaInicio.toLocaleDateString());
if (userData.membresia.membresia === 'ANUAL DE CONTADO') {
  fechaMostrada.setFullYear(fechaMostrada.getFullYear() + 1);
} else if (userData.membresia.membresia === 'PLAN FIT' || userData.membresia.membresia === 'PLAN PLUS') {
  fechaMostrada.setMonth(fechaMostrada.getMonth() + 1);
} else {
  // No se agrega ningún ajuste a la fecha
}

          const fechaActual = new Date();
          const diasRestantes = Math.ceil((fechaMostrada - fechaActual) / (1000 * 60 * 60 * 24));

          setDiasRestantes(diasRestantes);

          setFechaVencimiento(fechaMostrada.toLocaleDateString());
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <NavBar />

      {user ? (
        <>
          <section className='section-sucursales' style={{ backgroundColor: '#eee' }}>
            <div className='container py-5'>
              <div className='row'>
                <div className='col-lg-4'>
                  {user && (
                    <div className='card mb-4'>
                      <div className='card-body text-center'>
                        <img
                          src='https://img.freepik.com/free-icon/user_318-563642.jpg'
                          alt='avatar'
                          className='rounded-circle img-fluid'
                          style={{ width: '150px' }}
                        />
                        <h5 className='my-3'>{correo}</h5>
                        <p className='text-muted mb-1'>Miembro desde: {fechaRegistro}</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className='col-lg-8'>
                  {user && (
                    <div className='card mb-4'>
                      <div className='card-body'>
                        <div className='row'>
                          <div>
                            <h5 className='mb-0'>Tu información personal</h5>
                          </div>
                        </div>
                        <hr />
                        <div className='row'>
                          <div className='col-sm-3'>
                            <p className='mb-0'>Nombre</p>
                          </div>
                          <div className='col-sm-9'>
                            <p className='text-muted mb-0'>{nombre}</p>
                          </div>
                        </div>
                        <hr />
                        <div className='row'>
                          <div className='col-sm-3'>
                            <p className='mb-0'>Apellido</p>
                          </div>
                          <div className='col-sm-9'>
                            <p className='text-muted mb-0'>{apellido}</p>
                          </div>
                        </div>
                        <hr />
                        <div className='row'>
                          <div className='col-sm-3'>
                            <p className='mb-0'>Fecha de nacimiento</p>
                          </div>
                          <div className='col-sm-9'>
                            <p className='text-muted mb-0'>{fechaNacimiento}</p>
                          </div>
                        </div>
                        <hr />
                        <div className='row'>
                          <div className='col-sm-3'>
                            <p className='mb-0'>Dirección</p>
                          </div>
                          <div className='col-sm-9'>
                            <p className='text-muted mb-0'>{direccion}</p>
                          </div>
                        </div>
                        <hr />
                        <div className='row'>
                          <div className='col-sm-3'>
                            <p className='mb-0'>Código postal</p>
                          </div>
                          <div className='col-sm-9'>
                            <p className='text-muted mb-0'>{codigopostal}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className='row'>
                    <div className='col-md-7'>
                      <div className='card mb-4 mb-md-0'>
                        <div className='card-body'>
                          <div className='row'>
                            <div>
                              <h5 className='mb-0'>Tu plan</h5>
                            </div>
                          </div>
                          <hr />
                          <div className='row'>
                            <div className='col-sm-3'>
                              <p className='mb-0'>Nombre</p>
                            </div>
                            <div className='col-sm-9'>
                              <p className='text-muted mb-0'>{userMembresia}</p>
                            </div>
                          </div>
                          <hr />
                          <div className='row'>
                            <div className='col-sm-3'>
                              <p className='mb-0'>Fecha de inicio</p>
                            </div>
                            <div className='col-sm-9'>
                              <p className='text-muted mb-0'>{fechaInicio}</p>
                            </div>
                          </div>
                          <hr />
                          <div className='row'>
                            <div className='col-sm-3'>
                              <p className='mb-0'>Fecha de término</p>
                            </div>
                            <div className='col-sm-9'>
                              <p className='text-muted mb-0'>{FechaVencimiento}</p>
                            </div>
                          </div>
                          <hr />
                          <div className='row'>
                            <div className='col-sm-3'>
                              <p className='mb-0'>Tiempo restante</p>
                            </div>
                            <div className='col-sm-9'>
                              <p className='text-muted mb-0'>{DiasRestantes} días</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <Container className='section-navbar'>
            <Login />
          </Container>
        </>
      )}

      <Footer />
    </div>
  );
}

export default UserProfile;
