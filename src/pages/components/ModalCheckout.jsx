import React, {useState, useContext, useEffect} from  'react';


import {Modal, Button, Alert} from 'react-bootstrap'

import {Form} from 'react-bootstrap'


import {useFirebaseApp} from 'reactfire'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, set, serverTimestamp, onValue  } from 'firebase/database';
import Login from './Login'

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
  

function CheckModal({ showModal, closeModal, membresia, setMembresia }) {

    const [nombreTarjeta, setNombreTarjeta] = useState('');
    const [numeroTarjeta, setNumeroTarjeta] = useState('');
    const [mesVencimiento, setMesVencimiento] = useState('');
    const [anoVencimiento, setAnoVencimiento] = useState('');

    const [cvv, setCvv] = useState('');
    const [error, setError] = useState('');
    const [AlertVariant, setAlertVariant] = useState('danger');

    const [loading, setLoading]=useState(false);
    const [disabled, setDisabled]= useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const firebase = useFirebaseApp();
    const [uid, setUid] = useState('');


 // const { setUser } = useContext(UserContext);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user);
          console.log(user)

          if (user) {
            const database = getDatabase();
            const userRef = ref(database, `users/${user.uid}`);
    
            onValue(userRef, (snapshot) => {
              const userData = snapshot.val();
              setUser(userData);
              setUid(user.uid);
              console.log(userData)
              
            });
          }
         
        });
    
        return () => unsubscribe();
      }, []);

  const submit = async () => {
    // Verificar que no haya campos vacíos
    if (
      
        nombreTarjeta.trim() === '' ||
        numeroTarjeta.trim() === ''  ||
        mesVencimiento.trim()==='' ||
        anoVencimiento.trim()==='' ||
        cvv.trim()===''
      
    ) {
        console.log("Campos vacios")
      setError('No deje campos vacios');
      return;
    }


    if (
        mesVencimiento>12 || mesVencimiento<=0 ) {
        
      setError('Introduzca un mes o año validos');
      return;
    }

    
  

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1; // El mes actual se obtiene de 0 a 11
    
    const inputYear = parseInt(anoVencimiento);
    const inputMonth = parseInt(mesVencimiento);
  
    if (inputYear < currentYear || (inputYear === currentYear && inputMonth <= currentMonth)) {
      setError('Introduzca una tarjeta con un plazo de 1 año');
      return;
    }
    

    try {
       
        // Guardar los datos adicionales en Realtime Database
        const database = getDatabase();
        const userRef = ref(database, `users/${uid}/membresia`);
        await set(userRef, {
            
          membresia,
          fechaInicio: serverTimestamp(),
          
        });
  
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          // Mostrar mensaje de pago exitoso
            setError('Pago exitoso')
            setDisabled(true);
            setAlertVariant('success')

        }, 2000);
    
        
        //closeModal();
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
   
    console.log("Compra validada")
  
   
  };
  

  

  const handleNombreTarjetaChange = (event) => {
    setNombreTarjeta(event.target.value);
    setError('');
  };

  const handleNumeroTarjetaChange = (event) => {
    setNumeroTarjeta(event.target.value);
    setError('');
  };

  const handleMesVencimientoChange = (event) => {
    setMesVencimiento(event.target.value);
    setError('');
  };
  
  const handleAnoVencimientoChange = (event) => {
    setAnoVencimiento(event.target.value);
    setError('');
  };
  

  const handleCvvChange = (event) => {
    setCvv(event.target.value)
  
    setError('');
  };

  return (
    <Modal show={showModal} onHide={closeModal} centered size="xl">
        
      <Modal.Body>

        {user ? (
        <section className="h-100 ">
        <div className="row g-5">
      

      <div className="col-md-12 col-lg-6">
   
          <h4 className="mb-3">Pago</h4>
          {error && <Alert variant={AlertVariant}>{error}</Alert>}
         
          <div className="row gy-3">
            <div className="col-md-6">
              <label htmlFor="cc-name" className="form-label">Nombre en la tarjeta</label>
              <input type="text" className="form-control" id="cc-name" placeholder="" required value={nombreTarjeta} onChange={handleNombreTarjetaChange} />
             
              
            </div>

            <div className="col-md-6">
              <label htmlFor="cc-number" className="form-label">Número de tarjeta</label>
              <input type="text" className="form-control" id="cc-number" placeholder="" required value={numeroTarjeta} onChange={handleNumeroTarjetaChange} />
              
            </div>

            <div className="col-md-6">
              <label htmlFor="cc-expiration" className="form-label">Fecha de vencimiento</label>
              <div className='d-flex gap-3'>
                
              <input type="text" className="form-control" id="cc-expiration" placeholder="Mes" maxLength={2} required value={mesVencimiento} onChange={handleMesVencimientoChange} />
              
              <input type="text" className="form-control" id="cc-expiration" placeholder="Año" maxLength={4} required value={anoVencimiento} onChange={handleAnoVencimientoChange} />
       


              </div>
            </div>

            <div className="col-md-6">
              <label htmlFor="cc-cvv" className="form-label">CVV</label>
              <input type="text" className="form-control" id="cc-cvv" placeholder="" maxlength="3" required value={cvv} onChange={handleCvvChange} />
              
            </div>
          </div>
        
          <hr className="my-4" />
          
          <Button className="w-100  " disabled={disabled} size="lg" variant="success" style={{maxWidth:"300px"}} onClick={submit}>Continuar con la compra</Button>
          
      </div>

      <div className="col-md-12 col-lg-6">
  <h4 className="d-flex justify-content-between align-items-center mb-3">
    <span className="text-primary text-black">Tu carrito</span>
    <span className="badge bg-primary rounded-pill">1</span>
  </h4>
  <ul className="list-group mb-3">
    {membresia === 'ANUAL DE CONTADO' && (
      <>
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">NUEVA O RENOVADA</h6>
            <small className="text-body-secondary">Anual con acceso a cualquier sucursal</small>
          </div>
          <span className="text-body-secondary">$4399</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">Primer Pago</h6>
            <small className="text-body-secondary">Anualidad $4399 + Inscripción $399 si es primera vez</small>
          </div>
          <span className="text-body-secondary">$4798</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">Cuota de mantenimiento al 2do mes</h6>
            <small className="text-body-secondary">$499</small>
          </div>
        </li>
        <li className="list-group-item bg-body-tertiary">
          <div className="text-success">
            <h6 className="my-0">Exclusivo socios nuevos o inscritos</h6>
          </div>
        </li>
      </>
    )}
    {membresia === 'PLAN PLUS' && (
      <>
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">ANUAL EN 12 PAGOS DOMICILIADOS</h6>
            <small className="text-body-secondary">$999/mes</small>
          </div>
          <span className="text-body-secondary">$999</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">Primer Pago</h6>
            <small className="text-body-secondary">Mensualidad $999 + Inscripción $499</small>
          </div>
          <span className="text-body-secondary">$1498</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">Pulsómetro de pecho Gratis</h6>
            <small className="text-body-secondary">Locker VIP Anual Gratis</small>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">24 InBody (Medición Corporal Inteligente) Gratis</h6>
            <small className="text-body-secondary">Masajes ilimitados Gratis</small>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">Cuota de mantenimiento al 2do mes</h6>
            <small className="text-body-secondary">$499</small>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">Domiciliada a tarjeta de crédito o débito</h6>
            <small className="text-body-secondary">(penalización por cancelación)</small>
          </div>
        </li>
      </>
    )}
    {membresia === 'PLAN FIT' && (
      <>
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">ANUAL EN 12 PAGOS DOMICILIADOS</h6>
            <small className="text-body-secondary">$679/mes</small>
          </div>
         
        </li>
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">Primer Pago</h6>
            <small className="text-body-secondary">Mensualidad $679 + Inscripción $399</small>
          </div>
          <span className="text-body-secondary">$1078</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">Cuota de mantenimiento al 2do mes</h6>
            <small className="text-body-secondary">$499</small>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">Domiciliada a tarjeta de crédito o débito</h6>
            <small className="text-body-secondary">(penalización por cancelación)</small>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>11 pagos adicionales de</span>
          <small>$679</small>
          
        </li>
      </>
    )}
    <li className="list-group-item d-flex justify-content-between">
      <span>Total (MXN)</span>
      {membresia === 'ANUAL DE CONTADO' && (
  <strong>$4798</strong>
)}

{membresia === 'PLAN PLUS' && (
  <strong>$1498</strong>
)}

{membresia === 'PLAN FIT' && (
  <strong>$1078</strong>
)}
    </li>
  </ul>
</div>
    </div>
        </section>
        ):
        <Login></Login>
        }
      </Modal.Body>
    </Modal>
  );
}

export default CheckModal;
