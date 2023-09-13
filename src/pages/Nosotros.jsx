import {Image, Container, Card, Row, Col} from "react-bootstrap"

import NavBar from "./components/header";
import LandingPage from "./components/landingpage";
import Footer from "./components/footer";

import teamimage from '../images/gallery/team.jpg';


function Nosotros(){

    return(
        <div className="">
            <NavBar></NavBar>
            <Container>
           
          
        <Row className="align-items-center section-navbar  ">
          <Col sm={12} md={6} className="mb-4">
            <h1>Nosotros</h1>
            <p>
            Somos una empresa que fomenta la felicidad, el bienestar y la salud de la comunidad fitness. Ofrecemos una experiencia única propiciada por nuestras instalaciones y servicios excepcionales. Trabajamos para brindarte una vida llena de energía, permitiendo mejorar tu acondicionamiento físico.


            </p>
          </Col>
          <Col sm={12} md={6} className="mb-4 d-flex align-items-center">
            <div className="w-100">
              <Image
                className="custom-image"
                src={teamimage}
                alt="GymCoTeam"
                fluid
              />
            </div>
          </Col>
        </Row>
 
            </Container>
            <Footer></Footer>
        </div>
    );


}


export default Nosotros;