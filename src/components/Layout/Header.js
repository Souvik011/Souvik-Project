import React, {Fragment} from 'react';

import HeaderCart from './HeaderCart';
import classes from "./Header.module.css";
import HeaderBar from './HeaderBar';
import Navbar from "./Navbar/Navbar";

const Header = (props) => {
    return (
      <Fragment>
        <header className={classes.header}>
  
        <HeaderCart onClick={props.onShowCart}/>
        <Navbar />
  
          <HeaderBar />
        </header>
  
      </Fragment>
    );
  };
  export default Header;