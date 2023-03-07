import { useContext } from "react";

import classes from "./Product.module.css";
import { Button, Card } from "react-bootstrap";
import CartContext from "../../context/cart-context";

const Product = props => {
    const cartCtx = useContext(CartContext);
    const addItemToCart = (event) => {
        event.preventDefault();
        cartCtx.addItem({
          title: props.Item.title,
          price: props.Item.price,
          imageUrl: props.Item.image,
          Qty: 1,
        });
      };

    return (
        <div >
            <h1 className={classes.music}>MUSIC</h1>
            {props.Item.map((items)=>(
               <div  className={classes.item}>
            <Card   style={{width:'18rem' , height:"15rem"}}>  
                <Card.Title style={{color:"black",textAlign:"center" ,margin:'20px' }} >{items.title}</Card.Title>
    
                <Card.Img  src = {items.imageUrl} alt="colorimg"/>
    
                <Card.Body  >{`₹${items.price}`}
                <span><Button  variant="primary" as="input" type="submit" value="ADD TO CART" size="sm" onClick={addItemToCart} /></span></Card.Body>
            </Card>
        </div>
    
        ))}
    
    
       <div style={{color:"skyblue",textAlign:"center"}} > 
        <Button variant="secondary" style={{color:"skyblue",textAlign:"center"}}>See the cart</Button></div> </div>
    
    )
};

export default Product;