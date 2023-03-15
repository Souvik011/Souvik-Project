import React,{useContext} from "react";
import Modal from "../UI/Modal";
import CartContext from "../../context/cart-context";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const CartCtx = useContext(CartContext);
  let totalAmount = 0;
  CartCtx.items.forEach((items) => {
    totalAmount = totalAmount + items.price;
  });
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {CartCtx?.items?.map((item) => (
        
          <CartItem
            key={Math.random()}
            id={item.id}
            img={item.image}
            title={item.title}
            quantity={item.quantity}
            price={item.price}
            _id={item._id}
          />
        
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <section className={classes.section}>
        <h2 className={classes.cart}> CART </h2>
      </section>
      <div className={classes.div}>
        <span className={classes.item}> ITEM </span>
        <span className={classes.item}> PRICE </span>
        <span className={classes.item}> QUANTITY </span>
      </div>
      {cartItems}
      <h2 className={classes.h2}> Total Rs.{totalAmount} </h2>

      <button className={classes.button}>
       BUY
      </button>
    </Modal>
  );
};
export default Cart;