import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/header'
import LandingPage from './components/landingpage';
import Footer from './components/footer'
import { UserProvider } from '../UserContext';

function HomePage() {
  
  return (

    <div className='font-face'>
      <NavBar></NavBar>
      <div>
        <LandingPage></LandingPage>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>

  );
}

export default HomePage;