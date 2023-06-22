// import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


const bagroundImages = [
  { image: "../public/Images/bg_1.jpg.webp" },
  { image: "../public/Images/fresh-tomatoes-ready-cook_1150-38243.avif" }
]

export default function CarouselFadeExample() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
            <img style={{height:"90vh"}}
              className="d-block w-100"
              src={bagroundImages[0].image}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img style={{height:"90vh"}}
              className="d-block w-100"
              src={bagroundImages[1].image}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

 /*  return (
    <>
      { 
       bagroundImages.map(bagroundImage => {
       return <>
        <Carousel fade >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={bagroundImage.image}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>Carousel
       </> 
       }) 
       } 
    </>


  )



} */



