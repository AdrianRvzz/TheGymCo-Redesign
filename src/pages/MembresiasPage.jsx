import { Form, Alert, Button, Nav, Container,CloseButton  } from "react-bootstrap";


import NavBar from "./components/header";
import LandingPage from "./components/landingpage";
import Footer from "./components/footer";
import React, {useState, useContext, useEffect} from  'react';

import {useFirebaseApp} from 'reactfire'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, set, serverTimestamp, onValue  } from 'firebase/database';

import CheckModal from './components/ModalCheckout'

function MembresiasPage() {
  
  
  const [showCheckoutModal, setshowCheckoutModal] = useState(false);

  const [membresia, setMembresia] = useState('');

  const [user, setUser] = useState(null);
  const [userMembresia, setuserMembresia] =useState('')

  useEffect(() => {
      const auth = getAuth();
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        
        if (user) {
          const database = getDatabase();
          const userRef = ref(database, `users/${user.uid}`);
  
          onValue(userRef, (snapshot) => {
            const userData = snapshot.val();
            setuserMembresia(userData.membresia.membresia)
            //console.log(userData)
            
          });
        }

       
      });
  
      return () => unsubscribe();
    }, [user]);
    
  const openCheckModal = () => {
    setshowCheckoutModal(true);
  };

  const closeCheckModal = () => {
    setshowCheckoutModal(false);
  };

  //console.log(userMembresia)

  const renderMembresia = (membresia) => {
    let content;
  
    if (membresia === 'ANUAL DE CONTADO') {
      content = (
        <Container className="sectionContainer">
     
     <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
       <h1 className="my-2 text-uppercase">
         SU CUENTA TIENE:
       </h1>
       
     </div>
     <div className="row row-cols-1 row-cols-md-3 mb-3 text-center d-flex justify-content-center align-items-center">

     {userMembresia =='ANUAL DE CONTADO' }


       <div className="col">
         <div className="card mb-12 rounded-3 shadow-sm">
           <div className="card-header py-3">
             <h4 className="my-0 fw-normal">ANUAL DE CONTADO</h4>
             <span className="fw-light">NUEVA O RENOVADA</span>
           </div>
           <div className="card-body">
             <h1 className="card-title pricing-card-title">
               $4399<small className="text-body-secondary fw-light"></small>
             </h1>
             <ul className="list-unstyled mt-3 mb-4">
               <li>
                 Primer Pago $4798 (Anualidad $4399 + Inscripción $399 si
                 es primera vez)
               </li>
               <hr />
               <li> Cuota de mantenimiento al 2do mes de $499.</li>
               <hr />
               <li> Anual con acceso a cualquier sucursal</li>
               <hr />
               <li> Exclusivo socios nuevos o inscritos</li>
             </ul>
             
           </div>
         </div>
       </div>


    

      
     </div>
    
 </Container>
      );
    } else if (membresia === 'PLAN PLUS') {
      content = (
        <Container className="sectionContainer">
     
     <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
       <h1 className="my-2 text-uppercase">
         SU CUENTA TIENE:
       </h1>
       
     </div>
     <div className="row row-cols-1 row-cols-md-3 mb-3 text-center d-flex justify-content-center align-items-center">

       <div className="col">
         <div className="card mb-4 rounded-3 shadow-sm">
           <div className="card-header py-3">
             <h4 className="my-0 fw-normal">PLAN PLUS</h4>
             <span className="fw-light">ANUAL EN 12 PAGOS DOMICILIADOS DE $999</span>
           </div>
           <div className="card-body">
             <h1 className="card-title pricing-card-title">
               $999<small className="text-body-secondary fw-light">/mes</small>
             </h1>
             <ul className="list-unstyled mt-3 mb-4">
               <li>
                 Primer Pago $1498 (Mensualidad $999 + Inscripción $499).
               </li>
               <hr />
               <li>
                 Pulsómetro de pecho Gratis + Locker VIP Anual Gratis.
               </li>
               <hr />
               <li>
                 24 InBody (Medición Corporal Inteligente) Gratis + Masajes
                 ilimitados Gratis.
               </li>
               <hr />
               <li>Cuota de mantenimiento al 2do mes de $499.</li>
               <hr />
               <li>
                 Domiciliada a tarjeta de crédito o débito (penalización
                 por cancelación).
               </li>
             </ul>
             
           </div>
         </div>
       </div>


 
      
     </div>
    
 </Container>
      );
    } else if (membresia === 'PLAN FIT') {
      content = (
        <Container className="sectionContainer">
     
     <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
       <h1 className="my-2 text-uppercase">
         SU CUENTA TIENE:
       </h1>
       
     </div>
     <div className="row row-cols-1 row-cols-md-3 mb-3 text-center d-flex justify-content-center align-items-center" >


       <div className="col">
         <div className="card mb-4 rounded-3 shadow-sm">
           <div className="card-header py-3">
           <h4 className="my-0 fw-normal">PLAN FIT</h4>
             <span className="fw-light">ANUAL EN 12 PAGOS DOMICILIADOS DE $679</span>
           </div>
           <div className="card-body">
           <h1 className="card-title pricing-card-title">
               $679<small className="text-body-secondary fw-light">/mes</small>
             </h1>
             <ul className="list-unstyled mt-3 mb-4 ">
               <li>
                 Primer Pago: $1078 (Mensualidad $679 + Inscripción $399).
               </li>
               <hr />
               <li>Cuota de mantenimiento al 2do mes: $499.</li>
               <hr />
               <li>
                 Domiciliada a tarjeta de crédito o débito (penalización
                 por cancelación).
               </li>
               <hr />
               <li>11 pagos adicionales de $679.</li>
             </ul>
             
           </div>
         </div>
       </div>

      
     </div>
    
 </Container>
      );
    } else {
      // Si no se proporciona una  específica, mostrar las tres membresías
      content = (
        <div>
         <Container className="sectionContainer">
     
     <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
       <h1 className="my-2 text-uppercase">
         ELIGE EL PLAN QUE MAS TE GUSTE
       </h1>
       <p className="fs-5 text-body-secondary">
         Tenemos una gran variedad de planes, que estamos seguros te
         gustarán
       </p>
     </div>
     <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">

     {userMembresia =='ANUAL DE CONTADO' }


       <div className="col">
         <div className="card mb-4 rounded-3 shadow-sm">
           <div className="card-header py-3">
             <h4 className="my-0 fw-normal">ANUAL DE CONTADO</h4>
             <span className="fw-light">NUEVA O RENOVADA</span>
           </div>
           <div className="card-body">
             <h1 className="card-title pricing-card-title">
               $4399<small className="text-body-secondary fw-light"></small>
             </h1>
             <ul className="list-unstyled mt-3 mb-4">
               <li>
                 Primer Pago $4798 (Anualidad $4399 + Inscripción $399 si
                 es primera vez)
               </li>
               <hr />
               <li> Cuota de mantenimiento al 2do mes de $499.</li>
               <hr />
               <li> Anual con acceso a cualquier sucursal</li>
               <hr />
               <li> Exclusivo socios nuevos o inscritos</li>
             </ul>
             <button
               type="button"
               className="w-100 btn btn-dark btn-primary"
               onClick={() => {
                 openCheckModal();
                 setMembresia('ANUAL DE CONTADO');
               }}
             >
               Comprar
             </button>
           </div>
         </div>
       </div>


       <div className="col">
         <div className="card mb-4 rounded-3 shadow-sm">
           <div className="card-header py-3">
             <h4 className="my-0 fw-normal">PLAN PLUS</h4>
             <span className="fw-light">ANUAL EN 12 PAGOS DOMICILIADOS DE $999</span>
           </div>
           <div className="card-body">
             <h1 className="card-title pricing-card-title">
               $999<small className="text-body-secondary fw-light">/mes</small>
             </h1>
             <ul className="list-unstyled mt-3 mb-4">
               <li>
                 Primer Pago $1498 (Mensualidad $999 + Inscripción $499).
               </li>
               <hr />
               <li>
                 Pulsómetro de pecho Gratis + Locker VIP Anual Gratis.
               </li>
               <hr />
               <li>
                 24 InBody (Medición Corporal Inteligente) Gratis + Masajes
                 ilimitados Gratis.
               </li>
               <hr />
               <li>Cuota de mantenimiento al 2do mes de $499.</li>
               <hr />
               <li>
                 Domiciliada a tarjeta de crédito o débito (penalización
                 por cancelación).
               </li>
             </ul>
             <button
               type="button"
               className="w-100 btn btn-dark btn-primary"
               onClick={() => {
                 openCheckModal();
                 setMembresia('PLAN PLUS');
               }}
             >
               Comprar
             </button>
           </div>
         </div>
       </div>


       <div className="col">
         <div className="card mb-4 rounded-3 shadow-sm">
           <div className="card-header py-3">
           <h4 className="my-0 fw-normal">PLAN FIT</h4>
             <span className="fw-light">ANUAL EN 12 PAGOS DOMICILIADOS DE $679</span>
           </div>
           <div className="card-body">
           <h1 className="card-title pricing-card-title">
               $679<small className="text-body-secondary fw-light">/mes</small>
             </h1>
             <ul className="list-unstyled mt-3 mb-4 ">
               <li>
                 Primer Pago: $1078 (Mensualidad $679 + Inscripción $399).
               </li>
               <hr />
               <li>Cuota de mantenimiento al 2do mes: $499.</li>
               <hr />
               <li>
                 Domiciliada a tarjeta de crédito o débito (penalización
                 por cancelación).
               </li>
               <hr />
               <li>11 pagos adicionales de $679.</li>
             </ul>
             <button
               type="button"
               className="w-100 btn btn-dark btn-primary"
               onClick={() => {
                 openCheckModal();
                 setMembresia('PLAN FIT');
               }}
               
             >
               Comprar
             </button>
           </div>
         </div>
       </div>

      
     </div>
    
 </Container>

        </div>
      );
    }
  
    return content;
  };
  
  
  return (
    <div>
        <NavBar></NavBar>

      <div className="sectionContainer">
      {renderMembresia(userMembresia)}
      </div>
      <CheckModal showModal={showCheckoutModal} closeModal={closeCheckModal} membresia={membresia} />
        <Footer></Footer>
    </div>
  );
}

export default MembresiasPage;
