import {Image, Container} from "react-bootstrap"

import NavBar from "./components/header";
import LandingPage from "./components/landingpage";
import Footer from "./components/footer";

import misionimage from '../images/gallery/mision.jpg';


function Mision(){

    return(
        <div className="bg-black">
            <NavBar></NavBar>
            
            <div className="d-flex justify-content-center carta-navbar">
            
            <Image  className="my-3" fluid src={misionimage}></Image >
         
            </div>
            
            <Footer></Footer>
        </div>
    );


}


export default Mision;