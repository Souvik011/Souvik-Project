import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartElements = (
    <ul>
      {[
        {
          title: "Colors",

          price: 100,

          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

          quantity: 2,
        },

        {
          title: "Black and white Colors",

          price: 50,

          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

          quantity: 3,
        },

        {
          title: "Yellow and Black Colors",

          price: 70,

          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

          quantity: 1,
        },
      ].map((item) => (
        <div>
          <img src= {item.imageUrl } alt="Icon" className={classes.img}></img> 

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