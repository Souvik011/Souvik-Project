import React, { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../../Store/cart-context";
import axios from "axios";

const NavCartButton = (props) => {
  const context = useContext(CartContext);

 
  

  useEffect(() => {
    async function refresh() {
        const email = localStorage.getItem("email");
        
      const res = await axios.get(`https://crudcrud.com/api/fabf902f809d473b9d3dde23b838f1a6/Cart${email.replace(/[@.]/g, "")}`);
      const data = await res.data;
      console.log("USEEffect");

      for (let i = 0; i < data.length; i++) {
        //axios.delete(`https://crudcrud.com/api/43b7e12383574098a9f4be81d4299d5d/Cart${email.replace(/[@.]/g, "")}`,data[i]);
        context.add2Item({
          title: data[i].title,
          price: data[i].price,
          imageUrl: data[i].imageUrl,
          quantity: data[i].quantity,
        });
        
      }
    }
    refresh();
  }, []);

  const totalNumber = context.products.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);

  return (
    <React.Fragment>
      <Button variant="outline-info" onClick={props.onShow}>
        Cart{" "}
      </Button>
      <span
        style={{
          cursor: "pointer",
          float: "right",
          display: "flex",
          justifyContent: "space-around",
          fontWeight: "bold",
          color: "blue",
        }}
      >
        {totalNumber}
      </span>
    </React.Fragment>
  );
};

export default NavCartButton;
