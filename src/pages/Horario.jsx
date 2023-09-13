import React from "react";
import { Table, Image, Row, Col, Container, Accordion } from "react-bootstrap";
import horariosData from "./horariosData";

import NavBar from "./components/header";
import LandingPage from "./components/landingpage";
import Footer from "./components/footer";
import Fancybox from "./components/fancybox.jsx";


function ClasesTable  ({ route })  {

  const horariosNew = horariosData[route].map((data => {
    //console.log(data)
    return data
  } ))
;
const getTitle = (route) => {
  switch (route) {
    case "riogrande":
      return "Rio Grande";
    case "lastorres":
      return "Las Torres";
    case "hardbeat":
        return "Hard Beat";
    default:
      return "Título Predeterminado";
  }
};
  return (
    <div>
      <NavBar></NavBar>
      {
       
        <Container className="horariosContainer  ">
           <h1 className="text-center py-3">Sucursal {getTitle(route)}</h1>

          <Accordion defaultActiveKey="0"  >

            {horariosNew.map((data, index) => (
              <Accordion.Item  className="aco-item" eventKey={index} key={index} >
                <Accordion.Header>
                  <h2 className="text-center ">Área {data.tipo}</h2>
                </Accordion.Header>
                <Accordion.Body>
                  <Table bordered striped responsive variant="dark">
                    <thead>
                      <tr>
                        <th>Hora</th>

                        {Object.keys(data.horario).map((dia) => (
                          <th key={dia}>{dia.toUpperCase()}</th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                    {Object.keys(data.horas).map((hora) => (
                      <tr key={hora}>
                        <td className="text-nowrap">
                          {hora}:00-{parseInt(hora) + 1}:00
                        </td>
                        {Object.keys(data.horario).map((dia) => (
                          <td key={dia}  className="horario-td py-3">
                            {data.horario[dia].map((clase) => {
                              if (
                                clase.horaInicio.getHours() === parseInt(hora)
                              ) {
                                if (clase.logo) {
                                  return (
                                    <div key={clase.clase}>
                                      <Image className="horario-img"
                                        src={clase.logo}
                                        alt={clase.clase}
                                      />
                                     
                                    </div>
                                  );
                                } else {
                                  return <p className="fw-bold" key={clase.clase}>{clase.clase}</p>;
                                }
                              }
                              return null;
                            })}
                          </td>
                        ))}
                      </tr>
                    ))}
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      }
      <Footer></Footer>
    </div>
  );
};

export default ClasesTable;
