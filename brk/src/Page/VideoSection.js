import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player'
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Form, Button, Alert, Row, Col, Card, Container,Carousel } from 'react-bootstrap'
import firebase from 'firebase'
// import '~video-react/dist/video-react.css';
import { Player } from 'video-react';
import { connect } from 'react-firebase'

import Youtube from "./src/youtube@2x.png"

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
  



export default function VideoSection() {

    useEffect(() => {
     
        getAllVideos()
      }, [])
  const [news, setnews] = useState('');
  const [videos, setvideos] = useState('');
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        className: "center",
        speed: 500,
        className: "center",
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
      };

      const getAllVideos = () => {
        firebase.database().ref("/video").on(`value`, 
          snapshot => {
            setvideos(Object.values(snapshot.val()));
          }
        )
      }

      
    const showMapNow = () => {
      var url = "https://www.youtube.com/watch?v=n7JhRDRK3Gg";
      console.log(url);
          window.open(url);
  }
    return (
        <Container style={{marginTop:20,marginBottom:50}}>
            <Container>
              
            <div className="text-center" onClick={() => showMapNow()}>
            <p>
            Our Youtube Channel
              </p>
              <div to="https://www.youtube.com/watch?v=TgegjLUzEHg">

                <img src={Youtube} height={50} />
              </div>
              </div>

            <Carousel style={{justifyContent:"center",alignSelf:'center',marginTop:55}}>
        {videos ? (videos.map((k) => {
      return(

         
         


        <Carousel.Item>
  


<ReactPlayer url={k.url} muted={true} className="d-block w-100"/>


  </Carousel.Item>
  
      
      )
    })) : (
      <div>
        <h4>
          Loading .... 
        </h4>
        </div>
    )
  }
</Carousel>

       
      </Container>


        </Container>
    )
}
