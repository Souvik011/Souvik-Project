import React from "react";
import {Button} from 'react-bootstrap';
import classes from "./HeaderCart.module.css";

const HeaderCart = (props) =>{
    return (
        <React.Fragment>
            <Button  className={classes.button} onClick={props.onClick}>Cart</Button>
            <span>0</span>
        </React.Fragment>);
};

export default HeaderCart;