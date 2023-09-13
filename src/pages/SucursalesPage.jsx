import React from 'react';
import sucursales from './sucursalesData.js';
import { FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import {BsRepeat} from 'react-icons/bs'
import {Row, Col, Container} from 'react-bootstrap'

import NavBar from "./components/header";
import LandingPage from "./components/landingpage";
import Footer from "./components/footer";


const Sucursal = ({ nombre, mapaSrc, horario, telefono, whatsapp, correo }) => {
  return (
    <div className="pt-4">
      <h1 className="text-center fw-bold ">{nombre}</h1>

      <Row className=" my-5">
        <iframe
          className="sucursal-map"
          title={`Mapa de ${nombre}`}
          src={mapaSrc}
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </Row>

      <Row className="my-5">
        <Col sm={12} md={6} lg={6} className="pb-3">
          <h3>Horario</h3>
          <table>
            <thead className="fw-normal">
              <tr>
                <th>Día</th>
                <th>Hora</th>
              </tr>
            </thead>
            <tbody>
              {horario.map((dia) => (
                <tr key={dia.dia}>
                  <td>{dia.dia}</td>
                  <td>{dia.horario}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>

        <Col className='d-flex flex-column'>
          <h3>Contacto</h3>
          <a href={"tel:" + telefono} className="btn">
            <Row className=" rounded-2  d-flex ">
              <Col xs="auto" className='p-0'>
                <FaPhone className="fs-4 me-2 align-middle " />
                <span>{telefono}</span>
              </Col>
            </Row>
          </a>
          <a href={"https://wa.me/" + whatsapp} className="btn">
            <Row className="rounded-2  d-flex ">
              <Col xs="auto" className='p-0'>
                <FaWhatsapp className="fs-4 me-2 align-middle " />
                <span>{whatsapp}</span>
              </Col>
            </Row>
          </a>

          <a href={`mailto:${correo}`} className="btn">
            <Row className="rounded-2 d-flex ">
              <Col xs="auto" className='p-0'>
                <FaEnvelope className="fs-4 me-2 align-middle " />
                <span>{correo}</span>
              </Col>
            </Row>
          </a>
        </Col>
      </Row>
    </div>
  );
};

const SucursalesPage = () => {
  

  return (
    
    <div class>
        <NavBar></NavBar>
    <Container className='section-sucursales pb-4'>
      
      {sucursales.map((sucursal, index) => (
        <Sucursal 
          key={index}
          nombre={sucursal.nombre}
          mapaSrc={sucursal.mapaSrc}
          horario={sucursal.horario}
          telefono={sucursal.telefono}
          whatsapp={sucursal.whatsapp}
          correo={sucursal.correo}
        />
      ))}
    </Container>
    <Footer></Footer>
    </div>
  );
};

export default SucursalesPage;
