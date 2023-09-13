
import React, {useState, useContext} from  'react';
import {Container} from 'react-bootstrap' 


import NavBar from './components/header'
import LandingPage from './components/landingpage';
import Footer from './components/footer'

const ErrorPage = ({ codeError, errorMessage, help }) => {
  return (

    <div>
        <NavBar></NavBar>
        
            <Container className='vh-100  d-flex align-items-center justify-content-center' >

            <div className='text-center'>
    <h1 className='display-1 mb-4'>  {codeError}</h1>
    <h1 className='mb-4 display-5'>{errorMessage}</h1>
    <span className='text-secondary'>{help}</span>
  </div>
            </Container>
        

      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;