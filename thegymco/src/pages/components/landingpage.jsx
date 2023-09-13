import Container from 'react-bootstrap/Container';

import Image from 'react-bootstrap/Image'
import React from 'react';
import  Button  from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel'
import {useState} from 'react'
import Iframe from 'react-iframe'
import {Col, Row, Nav} from 'react-bootstrap'

import Slider1 from '../../images/slider1.webp'
import Trailer from '../../videos/trailergymco.mp4'
import VideoTrailer from './trailervideo';
import { Link } from 'react-router-dom';

//import trailer from '../public/../videos/trailergymco.mp4'


function LandingPage(){

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
      <div className="  font-face-gm  ">
        <Col
          className="text-center bg-image-container d-flex align-items-center justify-content-center section-navbar "
          style={{ backgroundImage: `url(${Slider1})` }}
        >
          <div className="text-center">
  <div className="landing-text">
    <p className="font-face-bold text-white landing-text text-uppercase" style={{ fontSize: "2rem" }}>
      El
      <br />
      Gimnasio
      <br />
      Donde
      <br />
      Quieres
      <br />
      Estar
    </p>
  </div>


   
    <Link as={Link} to="/membresias" className='button-landing btn btn-dark'>
    CONTRATA AQUÍ
              </Link>
  
</div>
        </Col>
        <div className='my-5'>
        <VideoTrailer 
          src={Trailer}
          title="Descubre unas instalaciones excepcionales"
          subtitle="Una experiencia única de entrenamiento y bienestar."
        ></VideoTrailer>
        </div>
      </div>
    );


}

export default LandingPage;