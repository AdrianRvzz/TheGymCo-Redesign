import { Col, Row, Image, Container } from "react-bootstrap";

import band from "../images/gallery/products/beat/band.jpg";
import bandImage from "../images/gallery/products/beat/bandapectoral.webp";
import watchImage from "../images/gallery/products/beat/bandmuneca.jpg"
import band3 from "../images/gallery/products/beat/banda3.webp"
import beatwallpaper from "../images/gallery/products/beat/beat.jpeg"

import band2 from "../images/gallery/products/beat/band2.png";
import Trailer from "../images/gallery/products/beat/trailerbeat.mp4";

import NavBar from "./components/header";
import LandingPage from "./components/landingpage";
import Footer from "./components/footer";
import Fancybox from "./components/fancybox.jsx";
import {BsHeartPulseFill, BsFileBarGraph, BsRepeat} from "react-icons/bs"



import VideoTrailer from "./components/trailervideo.jsx";

function Product() {
  return (
    <div >
      <NavBar></NavBar>


      <Container className="font-face  ">
        
        <Row className="section-navbar align-items-center justify-content-center ">
          <Col sm={12} md={12} lg={5} className="">
            <div className="d-flex flex-column gap-2">
              <h1 className="font-face-bold ">
                Pulsómetro Inteligente: Tu aliado para un entrenamiento de élite
              </h1>

              <h3>Supera tus límites y alcanza tus objetivos fitness</h3>

              <button
                className="button-product "
                style={{ width: "fit-content" }}
              >
                {" "}
                ¡Mejora tu rendimiento ahora!
              </button>
            </div>
          </Col>

          <Col sm={12} md={12} lg={7} className="">
            <Image className=" w-100" src={band} alt="Pulsómetro Beat"></Image>
          </Col>
        </Row>

        <Row className="">
          <VideoTrailer
            src={Trailer}
            title="Descubre a Beat"
            subtitle="Sumérgete en la experiencia de nuestro pulsómetro."
          ></VideoTrailer>
        </Row>


        <hr className=" my-5"/>
        <Row className="  align-items-center">
          <Col sm={12} md={6}>
            <Image src={band3} fluid></Image>
          </Col>

          <Col className="">
            <div>
              <Row>
                <h1 className="font-face-bold">Todo lo que necesitas</h1>
              </Row>
            </div>

            <div className="py-2">
              <Row className="my-1 py-3 align-items-center rounded-2 benefict">
                <Col xs="auto">
                  <BsHeartPulseFill className="fs-2 me-2 align-middle icon-beat" />
                </Col>
                <Col>
                  <h4 className="d-inline align-middle ">
                    Frecuencia cardíaca en tiempo real
                  </h4>
                  <p>
                    Monitorea tu frecuencia cardíaca y optimiza la intensidad de
                    tus entrenamientos.
                  </p>
                </Col>
              </Row>

              <Row className="my-1 py-3 align-items-center rounded-2 benefict ">
                <Col xs="auto">
                  <BsFileBarGraph className="fs-2 me-2 align-middle icon-beat" />
                </Col>
                <Col>
                  <h4 className="d-inline align-middle ">
                    Métricas Detalladas de Rendimiento
                  </h4>
                  <p>
                    Supervisa tus actividades deportivas y obtén métricas
                    detalladas sobre tu rendimiento.
                  </p>
                </Col>
              </Row>

              <Row className="my-1 rounded-2 py-3 align-items-center benefict ">
                <Col xs="auto">
                  <BsRepeat className="fs-2 me-2 align-middle icon-beat" />
                </Col>
                <Col>
                  <h4 className="d-inline align-middle">
                    Sincronización con Aplicaciones Móviles
                  </h4>
                  <p>
                    Sincroniza tus estadísticas con aplicaciones móviles
                    populares para un seguimiento completo de tu progreso.
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <hr className="myu- my-5"/>

        <Row className="align-items-center">
          <Col sm={12} md={12} className="mb-4">
            <h2 className="font-face-bold text-center">Opciones disponibles</h2>
          </Col>
        </Row>
        
        <Row className="align-items-center">
          <Col sm={12} md={6} className="mb-4">
            <h3>Banda para el Pecho</h3>
            <p>
              La banda para el pecho te proporciona una forma precisa y cómoda
              de medir tu frecuencia cardíaca durante tus entrenamientos. Con su
              diseño ajustable y materiales de alta calidad, la banda se adapta
              perfectamente a tu cuerpo para brindarte mediciones fiables en
              todo momento.
            </p>
          </Col>
          <Col sm={12} md={6} className="mb-4 d-flex align-items-center">
            <div className="w-100">
              <Image
                className="custom-image"
                src={bandImage}
                alt="Banda para el Pecho"
                fluid
              />
            </div>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col sm={12} md={6} className="mb-4">
            <h3>Reloj de Muñeca</h3>
            <p>
              Nuestro reloj de muñeca combina la funcionalidad de un pulsómetro
              con las características de un reloj deportivo. Con una pantalla
              intuitiva y fácil de usar, podrás ver tu frecuencia cardíaca, el
              tiempo transcurrido y muchas otras métricas importantes para tu
              entrenamiento. Además, su diseño elegante lo convierte en un
              complemento perfecto para tu estilo de vida activo.
            </p>
          </Col>
          <Col sm={12} md={6} className="mb-4 d-flex align-items-center">
            <div className="w-100">
              <Image
                className="custom-image"
                src={watchImage}
                alt="Reloj de Muñeca"
                fluid
              />
            </div>
          </Col>
        </Row>

        <hr className=" my-5"/>

        <Row className="mt-5">
          <Col sm={12} md={6} className="mb-4">
            <h2>Garantía</h2>
            <p>
              Ofrecemos una garantía de calidad en nuestro pulsómetro fitness.
              Si no estás satisfecho con tu compra, puedes devolverlo dentro de
              los 30 días y te reembolsaremos el 100% de tu dinero.
            </p>
          </Col>
          <Col sm={12} md={6} className="mb-4">
            <h2>Soporte al cliente</h2>
            <p>
              Si tienes alguna pregunta o necesitas asistencia, nuestro equipo
              de soporte al cliente está disponible para ayudarte. Contáctanos a
              través del correo electrónico o teléfono proporcionados a
              continuación.
            </p>
          </Col>
        </Row>

    
        <Row className=" align-items-center justify-content-center ">
         
       
            
              <Image
                className=" w-100"
                src={beatwallpaper}
                alt="Beat"></Image>
           
          
        </Row>


      </Container>
          <Footer></Footer>
     
    </div>
  );
}

export default Product;
