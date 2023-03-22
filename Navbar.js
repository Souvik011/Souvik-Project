import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import {NavLink} from "react-router-dom";

import NavCartButton from "./NavCartButton";

const NavBar = (props) => {
    
    return (
        <Navbar bg='dark'  variant='dark'>
        <Container>
            <Nav className="m-auto">
            <NavLink className="m-3" style={{color:'white',textDecorationColor:'whitesmoke'}} to="/home">Home</NavLink>

            <NavLink className="m-3" style={{color:'white',textDecorationColor:'whitesmoke'}} to="/store">Store</NavLink>

            <NavLink className="m-3" style={{color:'white',textDecorationColor:'whitesmoke'}} to="/about">About</NavLink>

            <NavLink className="m-3" style={{color:'white',textDecorationColor:'whitesmoke'}} to="/contactus">Contact Us</NavLink>
            </Nav>
        </Container>
        
        <NavCartButton onShow={props.onClick}/>

   </Navbar>
    );
};

export default NavBar;