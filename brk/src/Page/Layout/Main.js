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
        <Navbar.Brand href="#home">
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
    <Nav className="ml-auto">
        {chidren == "home" ? (
      <Nav.Link href="/"  active>Home </Nav.Link>

        ) : (
            <Nav.Link href="/">Home </Nav.Link>

        )

        }
          {chidren == "about" ? (
      <Nav.Link href="/about" active>About </Nav.Link>


        ) : (
            <Nav.Link href="/about">About </Nav.Link>


        )

        }
         {chidren == "how" ? (
        <Nav.Link href="/how"  active>How it works? </Nav.Link>



        ) : (
            <Nav.Link href="/how"  >How it works? </Nav.Link>



        )

        }
         {chidren == "why" ? (
          <Nav.Link href="/why"  active>Why us </Nav.Link>



        ) : (
            <Nav.Link href="/why" >Why us </Nav.Link>



        )

        }
            {chidren == "contacts" ? (
         <Nav.Link href="/contacts"  active>Contact </Nav.Link>




        ) : (
            <Nav.Link href="/contacts">Contact </Nav.Link>




        )

        }
    </Nav>

  </Navbar.Collapse>
</Navbar>
</Container>
            </div> 
        
        </div>
    )
}
