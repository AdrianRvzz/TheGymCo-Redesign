import {Image, Container} from "react-bootstrap"

import NavBar from "./components/header";
import LandingPage from "./components/landingpage";
import Footer from "./components/footer";

import visionimage from '../images/gallery/vision.jpg';


function Vision(){

    return(
        <div className="bg-black">
            <NavBar></NavBar>
            
            <div className="d-flex justify-content-center carta-navbar">
            
            <Image  className="my-3" fluid src={visionimage}></Image >
         
            </div>
            
            <Footer></Footer>
        </div>
    );


}


export default Vision;