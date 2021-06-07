import React, { useEffect, useState } from "react";
import tw from 'twin.macro' //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import { Form, Button, Alert, Row, Col, Card, Carousel } from 'react-bootstrap'
import moment from "moment";
import firebase from 'firebase'
import { connect } from 'react-firebase'
import Slider from "react-slick";


import styled from "styled-components";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import StatsIllustrationSrc from "images/stats-illustration.svg";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
const Container = tw.div `relative`;

const ThreeColumnContainer = styled.div `
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;


const Image = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw`rounded bg-contain bg-no-repeat bg-center h-full`
  ]);
  const TextContent = tw.div`lg:py-8 text-center md:text-left`;
  
  const Subheading = tw(SubheadingBase)`text-center md:text-left`;
  const Heading = tw(
    SectionHeading
  )`mt-5 text-green-800 text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
  const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;
  
  const Statistics = tw.div`flex flex-col items-center sm:block text-center md:text-left mt-4`;
  const Statistic = tw.div`text-left sm:inline-block sm:mr-12 last:mr-0 mt-4`;
  const Value = tw.div`font-bold text-lg sm:text-xl lg:text-2xl text-secondary-500 tracking-wide`;
  const Key = tw.div`font-medium text-primary-700`;
  
  const PrimaryButton = tw(PrimaryButtonBase)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;
  
  const DecoratorBlob = styled(SvgDotPattern)(props => [
    tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`
  ]);
  


  const firebaseConfig = {
    apiKey: "AIzaSyCApad_Ykkvn5_df5lT2RD8CAlKmKhAoEw",
    authDomain: "brk-systems.firebaseapp.com",
    projectId: "brk-systems",
    storageBucket: "brk-systems.appspot.com",
    messagingSenderId: "27842869867",
    appId: "1:27842869867:web:89dd9e8774f215d6b00f2e",
    measurementId: "G-66Z7E8LP91"
  };
    // Initialize Firebase
  
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
   }else {
      firebase.app(); // if already initialized, use that one
   }
  





export default function NewsFeeds() {


  const [news, setnews] = useState('');
  const [videos, setvideos] = useState('');

  useEffect(() => {
    getAllNews()
    getAllVideos()
  }, [])
  
  const getAllNews = () => {
    firebase.database().ref("/news").on(`value`, 
      snapshot => {
        setnews(Object.values(snapshot.val()));
      }
    )
  }

  const getAllVideos = () => {
    firebase.database().ref("/video").on(`value`, 
      snapshot => {
        setvideos(Object.values(snapshot.val()));
      }
    )
  }


  const settings = {

    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    className: "center",

    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    dots: false,

  };


    return (



        <Container >

          <div style={{marginTop:32}}>

          <Carousel>
  <Carousel.Item interval={1000}>
  <Card style={{backgroundColor:'#3944F7'}}>
  <Card.Body className="text-center text-white">
    <Card.Title>Easy to install compared to any other product in the market.</Card.Title>
    
  </Card.Body>
</Card>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
  <Card style={{backgroundColor:'#3944F7'}}>
  <Card.Body className="text-center text-white">
    <Card.Title>1yr satisfaction warrenty</Card.Title>
    
  </Card.Body>
</Card>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
  <Card style={{backgroundColor:'#3944F7'}}>
  <Card.Body className="text-center text-white">
    <Card.Title>15yrs and above life time.</Card.Title>
    
  </Card.Body>
</Card>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
  <Card style={{backgroundColor:'#3944F7'}}>
  <Card.Body className="text-center text-white">
    <Card.Title>Salt Blockages in drip pipe jets are removed automatically.</Card.Title>
    
  </Card.Body>
</Card>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
  <Card style={{backgroundColor:'#3944F7'}}>
  <Card.Body className="text-center text-white">
    <Card.Title>Specially supporting system for micro irrigation from salt blocking.</Card.Title>
    
  </Card.Body>
</Card>
  </Carousel.Item>
  
  
</Carousel>
            </div>
            <br/>
              {/* <Heading tw="text-center mt-5">News and <span tw=" text-green-900">feeds.</span></Heading>
        <div style={{ marginTop:30}}>
        

       

<Container style={{padding:20}}>
<Slider {...settings}>

{news ? (news.map((k) => {
      return(

         
          <div >
          <Card className="shadow-sm" style={{backgroundColor:'#F2F2F2',border:'none'}} >
  <Card.Body>
    <Card.Title>{k.heading}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">News</Card.Subtitle>
    <Card.Text>
      {k.news}
    </Card.Text>
    <Card.Link href="#">{moment().startOf(k.date).fromNow()}</Card.Link>
 
  </Card.Body>
</Card>
<br/>
          </div>


      
      )
    })) : (
      <div>
        <h4>
          Loading .... 
        </h4>
        </div>
    )
  }
        </Slider>

</Container>       

      </div>
         */}
        </Container>
    )
}