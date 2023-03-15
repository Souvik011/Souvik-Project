import React from "react";
import classes from './CartItem.module.css';

const CartItem = (props) => {
  

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
         <span> 
          <img src={props.img} style={{height:'70px',width:'55px'}}/>
          <p>{props.title}</p>
         </span>
          <span className={classes.price}>{props.price}</span>
        
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
      <button className={classes['cart-item']}>Remove</button>
    </li>
  );
};

export default CartItem;