import React,{useContext} from "react";
import {Button} from 'react-bootstrap';
import classes from "./HeaderCart.module.css";
import CartContext from "../../context/cart-context";

const HeaderCart = (props) =>{
const cartCtx = useContext(CartContext);
const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + 1;
  }, 0);

    return (
        <React.Fragment>
            <span className={classes.span}>{numberOfCartItems}</span>
            <Button  className={classes.button} onClick={props.onClick}>Cart</Button>
            
        </React.Fragment>);
};

export default HeaderCart;