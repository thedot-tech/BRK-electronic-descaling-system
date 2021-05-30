import React,{useState} from 'react'
import Contact from "../components/forms/TwoColContactUsWithIllustration"
import { Container, Form,Button,Alert,Row,Col } from 'react-bootstrap'


import firebase from 'firebase'
import { connect } from 'react-firebase'
import shortid from 'shortid'
import { Redirect } from 'react-router-dom'
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
  






export default function Contacts() {

    const [success, setsuccess] = useState(false)


    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [redirects, setredirect] = useState(false)

    const useHandler = (name) => event => {
        switch(name){
            case 'email':
                setemail(event.target.value)
            break;
            case 'phone':
                setphone(event.target.value)
            break;
        }
    }

    const isRedirect = () => {
        if(redirects)
            return <Redirect to="/"/>
    }
    const savedSuccess = () => {
        if(success)
       { return(
            <Alert variant="success">
                Saved Successfully
           </Alert>
        )}
    }

    const submitContact = (e) => {
        const Uid = shortid.generate();
        e.preventDefault();
        if(phone && email){
            firebase.database().ref(`contacts/${Uid}`).set({
                phone,
                email,
                userid:Uid,
                date:Date.now()
            }).then(    
                setsuccess(true),
                setemail(''),
                setphone(''),
                setredirect(true)

            ).catch(err => 
                   { console.log(err);}
                )
            
        }
    }

    return (
        <div>
            <Contact/>
            <Container>
                {savedSuccess()}
                {isRedirect()}
          <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter your email" value={email} onChange={useHandler('email')}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group>
    <Form.Label>Phone number</Form.Label>
    <Form.Control type="number" placeholder="Enter your phone" value={phone} onChange={useHandler('phone')}/>
    <Form.Text className="text-muted">
      We'll never share your phone with anyone else.
    </Form.Text>
  </Form.Group>

  <Button variant="info" type="submit" block onClick={submitContact}>
    Submit
  </Button>
</Form>
          </Container>
        </div>
    )
}
