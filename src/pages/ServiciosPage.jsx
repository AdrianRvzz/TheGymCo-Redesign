import { useState, useEffect } from 'react';

import NavBar from './components/header'
import LandingPage from './components/landingpage';
import Footer from './components/footer'
import ServiciosPage from "./serviciosData";
import Image from "react-bootstrap/Image"
import {Row, Col, Container, Modal, Button} from "react-bootstrap"




function ClasesPage(){
    const [showModal, setShowModal] = useState(false);
    const [srcImage, setSrcImage] = useState(null);
    const [selectedClase, setSelectedClase] = useState(null);

    const handleOpenModal = (clase) => {
        setSelectedClase(clase);
        setShowModal(true);
      };

      const handleCloseModal = () => {
        setShowModal(false);
      };

      const getSucursalLabel = (sucursal) => {
        
        switch (sucursal) {
          case "lastorres":
            return "Las Torres";
          case "riogrande":
            return "Rio Grande";
          case "hardbeat":
            return "Hard Beat";  
            
          default:
            return "Próximamente";
        }
      };
      
    return (
      <div className="font-face">
        <NavBar></NavBar>

        <div className="clasesContainer  bg-black">
          <Container fluid="lg">
            <Row>
              {ServiciosPage.map((clase) => (
                <Col
                  sm={6}
                  md={4}
                  lg={4}
                  key={clase.id}
                  className="col-hover   mb-2"
                >
                  <Image
                    fluid
                    src={clase.src}
                    alt={clase.title}
                    onClick={() => handleOpenModal(clase)}
                    className="rounded "
                  />
                </Col>
              ))}
            </Row>
          </Container>

          <Modal
            show={showModal}
            onHide={handleCloseModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter "
            className="rounded "
            centered
          >
            <div className="mod-body border rounded">
              <Modal.Header>
                <Modal.Title>
                  <h2>{selectedClase && selectedClase.title}</h2>
                </Modal.Title>
              </Modal.Header>

              <Modal.Body className="">
                {selectedClase &&
                selectedClase.src &&
                selectedClase.src.endsWith(".mp4") ? (
                  <video
                    src={selectedClase.src}
                    controls
                    className="modal-body-video m-auto rounded"
                  />
                ) : (
                  <Image
                    fluid
                    src={selectedClase && selectedClase.src}
                    alt={selectedClase && selectedClase.title}
                    className="modal-body-image m-auto rounded"
                  />
                )}

                <div className="py-1 ">
                  {selectedClase && selectedClase.sucursales.length > 0 ? (
                    selectedClase.sucursales.map((sucursal, index) => (
                      <span key={index} className="badge span-modal me-1">
                        {getSucursalLabel(sucursal)}
                      </span>
                    ))
                  ) : (
                    <span className="badge span-modal me-1">Próximamente</span>
                  )}
                </div>
                <p>{selectedClase && selectedClase.description}</p>
              </Modal.Body>

              <Modal.Footer>
                <Button
                  variant="dark"
                  className="btn"
                  onClick={handleCloseModal}
                >
                  Cerrar
                </Button>
              </Modal.Footer>
            </div>
          </Modal>
        </div>

        <div className="bg-black">
          <Footer></Footer>
        </div>
      </div>
    );

} 


export default ClasesPage;