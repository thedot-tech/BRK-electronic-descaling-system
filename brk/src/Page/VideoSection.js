import React, { useEffect, useState } from "react";
import {Img} from 'react-image'

import ReactPlayer from 'react-player'
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Form, Button, Alert, Row, Col, Card, Container,Carousel } from 'react-bootstrap'
import firebase from 'firebase'
// import '~video-react/dist/video-react.css';
import { Player } from 'video-react';
import { connect } from 'react-firebase'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
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
  

   const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

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
      var url = "https://youtube.com/channel/UCeaTvDkI12hpM0aCbFRU-bg";
      console.log(url);
          window.open(url);
  }

  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

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


              <div style={{marginTop:55}}>
              <Grid container className={classes.root} spacing={12}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
        {videos ? (videos.map((k) => (
            <Grid onClick={()=> window.open(k.url, "_blank")} key={k.id} item>
              <Img style={{height:150,width:220,borderRadius:8}} src={k.thumbnail} />
            </Grid>
        ))) : (
          <h4>
          Loading .... 
        </h4>
        )
          }
        </Grid>
      </Grid>
      </Grid>

                </div>
           

       
      </Container>


        </Container>
    )
}
