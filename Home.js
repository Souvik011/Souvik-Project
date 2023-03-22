import React ,{Fragment}from 'react'
import { Container, Nav, Navbar} from "react-bootstrap";
import HomeGrid from './HomeGrid';
import Footer from '../Layout/Footer';
import {NavLink} from "react-router-dom"

const Home = () => {
  return (
    <Fragment>

    <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="m-auto">

              <NavLink className="m-3" style={{color:'white',textDecorationColor:'whitesmoke'}} to="/home">Home</NavLink>

              <NavLink className="m-3" style={{color:'white',textDecorationColor:'whitesmoke'}} to="/store">Store</NavLink>

              <NavLink className="m-3" style={{color:'white',textDecorationColor:'whitesmoke'}} to="/about">About</NavLink>

              <NavLink className="m-3" style={{color:'white',textDecorationColor:'whitesmoke'}} to="/contactus">Contact Us</NavLink>
          </Nav>
        </Container>
      </Navbar>

      <HomeGrid />
      <div style={{marginTop:"50px"}}>
      <Footer />
      </div>
      </Fragment>
  )
}

export default Home;