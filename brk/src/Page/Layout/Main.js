import React from 'react'
import Logo from "../src/logo@2x.png"

import {Navbar,Container,Nav,Alert,NavDropdown,Form,FormControl,Button} from "react-bootstrap"
import { Link,Redirect, } from 'react-router-dom'


export default function Main({chidren}) {
    return (
        <div>
            
        <div>
            <Container>
        <Navbar bg="white" expand="lg">
        <Navbar.Brand href="/">
      <img
        src={Logo}
        width="auto"
        height="50"
        className="d-inline-block align-top"
        alt="brk system"
      />
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  
  </Navbar.Collapse>
</Navbar>
</Container>
            </div> 
        
        </div>
    )
}
