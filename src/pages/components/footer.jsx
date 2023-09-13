// import { Container, ListGroupItem } from "react-bootstrap";
import TheGymCoLogo from '../../images/logos/TheGymCoLogo.png'; // Importa la imagen del logotipo

import Image from 'react-bootstrap/Image'
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function footer(){

    return(
        <div className="bg-black footer">
        <Container className='' >
        <footer className="d-flex justify-content-between align-items-center  sm-justify-content-center border-bottom py-4 row">

    

      <a as={Link} to="/home" className=" col  d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <Image
        src={TheGymCoLogo}
         alt="The Gym Co"
         height="50"
         className="d-inline-block align-top"
             />
      </a>

        
      <ul className="nav col d-flex justify-content-center  ">
        <li className="nav-item ">
          <a href="https://www.facebook.com/TheGymCoOficial" className="nav-link px-2 text-white fs-4 "> <BsFacebook></BsFacebook> </a>
        </li>

        <li className="nav-item">
          <a href="https://www.instagram.com/thegymco/" className="nav-link px-2 text-white fs-4"><BsInstagram></BsInstagram> </a>
        </li>
       
      </ul>
      

      <ul className="nav col justify-content-end">
      <li className="nav-item">
  <Link to="/nosotros" className="nav-link px-2 text-white">Nosotros</Link>
</li>
<li className="nav-item">
  <Link to="/sucursales" className="nav-link px-2 text-white">Sucursales</Link>
</li>
<li className="nav-item">
  <Link to="/contacto" className="nav-link px-2 text-white">Contáctanos</Link>
</li>
<li className="nav-item">
  <Link to="/mision" className="nav-link px-2 text-white">Misión</Link>
</li>
<li className="nav-item">
  <Link to="/vision" className="nav-link px-2 text-white">Visión</Link>
</li>
      </ul>
      
    </footer>
    
    <Dropdown.Divider/>

    <footer className="d-flex py-3 row">
    <a href="mailto:atencionacliente@bodyfit.mx" className=" d-flex align-items-center justify-content-center  text-muted text-decoration-none pb-3">
    atencionacliente@bodyfit.mx
      </a>

    <span className=" d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto text-muted text-decoration-none disabled">
    © 2023 The Gym Co. 
      </span>

      
    </footer>


    </Container>

        </div>


    );

}

export default footer;