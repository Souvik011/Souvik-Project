import { Fragment } from "react";
import { Button } from "react-bootstrap";
import classes from "./Navbar.module.css";
const NavBar = (props) => {
  return (
    <Fragment>
      <nav className={classes.navbar}>
        <Button  variant="dark">HOME</Button>
        <Button  variant="dark">STORE</Button>
        <Button  variant="dark">ABOUT</Button>

      </nav>
    </Fragment>
  );
};
export default NavBar;