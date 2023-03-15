import { useContext, Fragment } from "react";

import classes from "./Product.module.css";
import { Card } from "react-bootstrap";
import CartContext from "../../context/cart-context";

const Product = props => {
    const cartCtx = useContext(CartContext);
    const addItemToCart = (event) => {
        event.preventDefault();
        cartCtx.addItem({ ...props, quantity: props.quantity });
      };

    return (
        <Fragment>
      
    <div className={classes.Items}>
    
      <h3>{props.title}</h3>
      <Card>
      <img className={classes.img} src={props.image} alt="some images"></img>
      <div className={classes.price}>Rs. {props.price}</div>
      <button className={classes.button} onClick={addItemToCart}>Add To cart</button>
      </Card>
    </div>

    
    </Fragment>)
};

export default Product;