import React,{useState} from 'react'
import { Container, Form,Button,Alert,Row,Col } from 'react-bootstrap'


import firebase from 'firebase'
import { connect } from 'react-firebase'
import shortid from 'shortid'
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
  


export default function AdminDash() {

    const [password, setpassword] = useState(null);
    const [showa, setshowa] = useState(false);
    const [showDashs, setshowDash] = useState(false);


    const [addNews, setaddNews] = useState(false);
    // News startes
        const [heading, setheading] = useState('');
        const [news, setnews] = useState('');
    //
    
    // Add videos
        const [url, seturl] = useState('')

    // Common
        const [success, setsuccess] = useState(false)
    //

    const saveNews = e => {
        e.preventDefault();
        const uid = shortid.generate();
         firebase.database().ref(`/news/${uid}`)
         .set(
           {  heading,
             news,
             id:uid,
             date:Date.now()}
         ).then(
            console.log("Saved Data"),

            setheading(''),
            setnews(''),
            setsuccess(true),

            

         ).catch(err => 
            console.log(err)
            
            )

        
    
    }

    const savedSuccess = () => {
        if(success)
       { return(
            <Alert variant="success">
                Saved Successfully
           </Alert>
        )}
    }

    const newsChangeHandler = (name) => event => {
        if(name === 'heading')
            setheading(event.target.value);
        else if(name === 'news')
            setnews(event.target.value);
    }
    const addNewsBtn = () => {
        setaddNews(true)
    }
    const addNewsSection = () => {
        if(addNews){
            return(
                <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Add Heading</Form.Label>
    <Form.Control type="text" placeholder="Enter News Heading" value={heading} onChange={newsChangeHandler('heading')}/>
    
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Add News</Form.Label>
    <Form.Control type="text" placeholder="Enter News (max 55)" value={news} onChange={newsChangeHandler('news')}/>
    
  </Form.Group>


  <Button variant="primary" type="submit" block onClick={saveNews}>
    Submit
  </Button>
</Form>
            )
        }
    }


    const onChangeHandler = (event) => {
        setpassword(event.target.value);
    }
    const submitPasscode = (e) => {
        e.preventDefault();
        if(password){
            setshowa(false);
            if(password === 'brk'){
                setshowDash(true)
            }

        }
        else{
            setshowa(true)
        }
    }
    const showAlert = () => {
        if(showa){
            return(
                <Alert variant="danger">
               Please enter all value
              </Alert>
            )
        }
    }

    const showDash = () => {
        if(showDashs){
            return(
                <Container>
      
      <Row>
        <Col>
        <div className="mb-2">
    <Button variant="success" size="lg">
    See Clients
    </Button>
  </div>
       </Col>
        <Col>
        <Button variant="warning" size="lg" onClick={addNewsBtn}>
        Add News
    </Button>
        </Col>
        <Col>
        <Button variant="dark" size="lg">
        Add Videos
    </Button>
        </Col>
      </Row>
    </Container>
            );
        }
        
    }

    return (
        <div>
           <Container className="mt-lg-5">
               {showAlert()}
               <div style={{marginTop:180}}>
               {showDash()}

               <div style={{marginTop:50}}>
{savedSuccess()}
               {addNewsSection()}

               </div>
                   </div>
        {!showDashs ? 
               (<Form>
               <Form.Group controlId="formBasicEmail" style={{marginTop:'10%'}}>
                 <Form.Label>Enter the passcode</Form.Label>
                 <Form.Control type="text" placeholder="Enter email" onChange={onChangeHandler}/>
                 <Form.Text className="text-muted">
                   This is to confirm, you are admin
                 </Form.Text>
               </Form.Group>
               <Button variant="primary" type="submit" onClick={submitPasscode}>
                 Submit
               </Button>
             </Form>):(null)
        }
           </Container>
        </div>
    )
}
