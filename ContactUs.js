import React , {Fragment, useRef} from "react";
import { Form,Button,Container, Nav, Navbar } from 'react-bootstrap';
import HeaderBar from "../Layout/HeaderBar";

import {NavLink} from "react-router-dom"
import Footer from '../Layout/Footer';

const ContactUs = props => {
        const NameHandler=useRef("")
        const MailHandler=useRef("")
        const NumberHandler=useRef("")
    
     async function storingDetailsFN (){
        const details={
            name:NameHandler.current.value,
            mail:MailHandler.current.value,
            Number:NumberHandler.current.value
          }
          console.log(details)
          const response=await fetch("https://first-dummy-ef331-default-rtdb.firebaseio.com/details.json",{
            method:"POST",
            body:JSON.stringify(details),
            headers: {
                "Content-Type": "application/json"
              }
          })
          const data=response.json()
          console.log(data)
     }
    
       const SubmitHandler= (event)=>{
          event.preventDefault();
    
           storingDetailsFN()
    
       }
      return (
        <Fragment >
        <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="m-auto">

            <NavLink className="m-3" to="/home" style={{color:'white',textDecorationColor:'whitesmoke'}}>Home</NavLink>

            <NavLink className="m-3" to="/store" style={{color:'white',textDecorationColor:'whitesmoke'}}>Store</NavLink>

            <NavLink className="m-3" to="/about" style={{color:'white',textDecorationColor:'whitesmoke'}}>About</NavLink>


            <NavLink className="m-3" to="/contactus" style={{color:'white',textDecorationColor:'whitesmoke'}}>Contact Us</NavLink>

        </Nav>
      </Container>
    </Navbar>

    <HeaderBar/>

         <Form onSubmit={SubmitHandler} className="m-3">

    
             <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{color:"green"}}>Name</Form.Label>
            <Form.Control type="text" ref={NameHandler} placeholder="Your Name" />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{color:"green"}}>Email address</Form.Label>
            <Form.Control type="email" ref={MailHandler} placeholder="Enter email" />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{color:"green"}}>Phone Number</Form.Label>
            <Form.Control type="number" ref={NumberHandler} placeholder="Phone Number" />
          </Form.Group>
          <Button variant="warning" type="submit">
            Submit
          </Button>
        </Form>
        <Footer/>
        </Fragment>
        
      )
};

export default ContactUs;