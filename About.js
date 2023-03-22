import React, { Fragment } from 'react'

import HeaderBar from "../Layout/HeaderBar";

import {NavLink} from "react-router-dom"

import { Container, Nav, Navbar} from "react-bootstrap";
import Footer from '../Layout/Footer';







const About = () => {

  return<Fragment>




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




    <HeaderBar />

    <h1

        style={{ textAlign: "center", fontFamily: "fantasy", padding: "20px" }}

      >

        ABOUT US

      </h1>

      <p style={{ padding: '2rem' }}>

        Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of

        sorrows, hates no prosecutors will unfold in the enduring of which were

        born in it? Often leads smallest mistake some pain main responsibilities

        are to stand for the right builder of pleasure, accepted explain up to

        now. , The things we are accusing of these in the explication of the

        truth receives from the flattery of her will never be the trouble and

        they are refused to the pleasures and the pleasures of the pain, explain

        the treatment of excepturi of the blessed sufferings. I never said will

        unfold in him receives at another time he may please the one that those

        works, we are less than they, this refused to the pleasures of deleniti?

        Those are! Will unfold in times of pleasure, this pain will be a right

        enjoyed by corrupt, are accusing him of all pleasures, and seek his own,

        or, to the needs of the agony of the choice. We hate the fellow. Lorem

        ipsum dolor, sit amet consectetur rebates. The distinction, that arise

        from or to. The greater, therefore, an obstacle to the duties of the

        debts receives the very great importance to us that these are consequent

        to that question is answered, which was selected for the fault, it is

        often one of us, however, have any! Moreover, this is often not at once

        take the hardships of the life of harsh condemn, we are accusing him?

        Him whom something large cisterns.

      </p>

      <Footer />
  </Fragment>




}




export default About;