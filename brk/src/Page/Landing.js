import React from 'react'

import {Navbar,Container,Nav,Alert,NavDropdown,Form,FormControl,Button,Carousel,Row,Col} from "react-bootstrap"
import { Link,Redirect, } from 'react-router-dom'
import BannerOne from './src/banner/banner@2x.png'
import YouTube from 'react-youtube';

import One from "./src/landing/one.png"
import Two from "./src/landing/two.png"

import "./Landing.css"

import Main from "./Layout/Main"
import Footer from './Layout/Footer';
const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }


export default function Landing() {


     

    const toHome = () => {
        return <Redirect to="/"/>
    }
 
    const onReady = (event) => {
            event.target.pauseVideo();
    }
    return (
        <div>
            <Main chidren="home"/>
            <div>
            <Carousel className="my-carousel">
  <Carousel.Item interval={1000}>
    <img

     className="d-block w-100 my-carousel"

      src={BannerOne}
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 my-carousel"
      src={BannerOne}
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
           className="d-block w-100 my-carousel"

      src={BannerOne}
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
            </div>
            {/* <div>
            <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onReady} />;
            </div> */}
            <div className="mt-5">
            <Container>
  <Row>
  <Col>

      <img width="300"
        height="200" src={One}/>
  </Col>
    <Col>

        <p>
       <b> BRK Electronic Descaling System Effects</b><br/><br/>

BRK Electronic Descaling device is an eco-friendly water treatment system that protects your piping system and appliances against scale deposits and rust. The impulse technology modifies the crystallization of calcium and magnesium in the water .The crystals become smoother and can no longer attach to each other., that are created, the stronger positive effect of scale-prevention. Scale is now washed away in the water as a flakes and fine powder.

        </p>
    </Col>

  </Row>
  </Container>
            </div>
            <Container>
            <hr/>

                </Container>
            <div className="mt-5">

            <Container>
  <Row>
 
    <Col sm={6}>

        <p>
        BRK Electronic Descaling device reduces the Surface tension in the water to a greater extent and increase the Dissolved Oxygen Levels to 6-8%. As the by-products of the precipitation of calcium carbonate (CaCO3) from the solution of calcium bicarbonate (Ca(HCO3)2) in the water, the carbon dioxide is released into the water. Carbon dioxide dissolved in unsaturated water (with much lesser amount of dissolved calcium ions) allows dissolving and softening old scale layers in the pipes, heating elements, heat exchangers etc.

        </p>
    </Col>
    <Col>

<img width="300"
  height="200" src={Two}/>
</Col>
  </Row>
  </Container>
            </div>
            <div>
                
            </div>
            <div>
                <Footer/>
            </div>
        </div>

    )
}
