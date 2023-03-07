import React,{useContext} from "react";
import Modal from "../UI/Modal";
import CartContext from "../../context/cart-context";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const CartCtx = useContext(CartContext);
  const cartElements = (
    <ul>
      {CartCtx.items.map((item) => (
        <div>
          <img src= {item.imageUrl} alt="Icon" className={classes.img}></img> 

          <span className={classes.title}>{item.price} </span>
          <span className={classes.title}>{item.quantity}</span>
          <button className={classes.cancel}>Remove</button>
        </div>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <section className={classes.section}>
        <h2 className={classes.cart}> CART </h2>
        <button className={classes.remove} onClick={props.onClose}>
         X
        </button>
      </section>
      <div className={classes.div}>
        <span className={classes.span}> ITEM </span>
        <span className={classes.span}> PRICE </span>
        <span className={classes.span}> QUANTITY </span>
      </div>
      {cartElements}
      <h2 className={classes.h2}> Total Rs.300 </h2>
    </Modal>
  );
};
export default Cart;