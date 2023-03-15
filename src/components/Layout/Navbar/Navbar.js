import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navbar.module.css";

const Navbar = (props) => {
 
 
  return (
    <Fragment>
      <nav className={classes.navbar}>
          <NavLink className={classes.icon}  style={{textDecoration:'none', color:'white'}} to='/Home'>HOME</NavLink>
              
              
          <NavLink className={classes.icon} style={{textDecoration:'none', color:'white'}} to='/Store'>STORE</NavLink>
 
          <NavLink className={classes.icon} style={{textDecoration:'none', color:'white'}} to="/About">ABOUT</NavLink>
       
      </nav>
    </Fragment>
  );
};
export default Navbar;