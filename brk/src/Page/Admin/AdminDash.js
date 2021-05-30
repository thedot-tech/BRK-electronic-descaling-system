import React,{useState} from 'react'
import { Container, Form,Button,Alert,Row,Col } from 'react-bootstrap'

export default function AdminDash() {

    const [password, setpassword] = useState(null);
    const [showa, setshowa] = useState(false);
    const [showDashs, setshowDash] = useState(false);
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
        <Col>See Clients</Col>
        <Col>Add News</Col>
        <Col>Add Videos</Col>
      </Row>
    </Container>
            );
        }
        
    }

    return (
        <div>
           <Container className="mt-lg-5">
               {showAlert()}
               {showDash()}
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
