import { Route } from "react-router-dom";
import GalleryData from "./galleryData.js";
import { useEffect, useState } from "react";
import {
  Row,
  Col,
  Image,
  ButtonGroup,
  ToggleButton,
  Button,
  Dropdown,
} from "react-bootstrap";

import NavBar from "./components/header";
import LandingPage from "./components/landingpage";
import Footer from "./components/footer";
import Fancybox from "./components/fancybox.jsx";

function Gallery({ route }) {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [isHiding, setIsHiding] = useState(false);
  
  useEffect(() => {
   
    const selectedData = GalleryData.find((item) => item.route === route);
    console.log(selectedData);

    if (selectedData) {
      setData(selectedData.imagedata);
      setOriginalData(selectedData.imagedata);

      const categories = [
        ...new Set(selectedData.imagedata.map((item) => item.category)),
      ];
      setCollection(categories);
    } else {
      console.log("Default data");
    }
  }, [route]);


  // const gallery_filter = (itemData) => {
  //   const filterData = originalData.filter(
  //     (item) => item.category === itemData
  //   );
    
  //   setData(filterData);
  // };
  
  const gallery_filter = (itemData) => {
    const filterData = originalData.filter((item) => item.category === itemData);
    setIsHiding(true); // Activar la animación de ocultar las imágenes
    setTimeout(() => {
      setData(filterData);
      setIsHiding(false); // Desactivar la animación una vez que los datos se actualicen
    }, 300); // Ajusta el tiempo de espera según la duración de la transición en CSS
  };

  return (
    <div className="bg-black">
      <NavBar></NavBar>

      <div container className="galleryWrapper container  gallery-navbar ">
        <Row className="py-2  ">
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              Filtrar imagenes
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                variant="dark"
                onClick={() => setData(originalData)}
                className="btn-clicked"
              >
                Todas
              </Dropdown.Item>
              {collection.map((item) => (
                <Dropdown.Item
                  variant="dark"
                  onClick={() => gallery_filter(item)}
                  className="btn-clicked"
                >
                  {item}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Row>

        <Fancybox
          options={{
            Caption: ({ item }) => <div>{item.title}</div>,
          }}
        >
          <Row className={`galleryContainer d-flex align-items-center justify-content-center ${isHiding ? 'hide' : ''}`}>
            {data.map((item) => (
              <Col sm={6} md={4} lg={4} key={item.id} className="mb-2">
                <a
                  data-fancybox="gallery"
                  href={item.src}
                  className="fancybox "
                  data-caption={item.title}
                >
                  <img src={item.src} title={item.title} className=" rounded w-100 " />
                </a>

                {/* <span className="card-title">{item.title}</span> */}
              </Col>
            ))}
          </Row>
        </Fancybox>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Gallery;
