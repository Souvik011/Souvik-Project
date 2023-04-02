import React, { useReducer } from "react";
import axios from "axios";
import CartContext from "./cart-context";




const defaultState = {
    products: [],
    totalAmount: 0
}


const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedAmount = state.totalAmount + action.value.price * action.value.quantity;


        const existsItemIndex = state.products.findIndex((index) => index.id === action.value.id)
        const existsItem = state.products[existsItemIndex]



        let update = state.products.concat(action.value)
        if (existsItem) {
            // alert("item alreadry exisits")
            return {
                products:state.products,
                totalAmount:state.totalAmount
            }

        }





        return {
            products: update,
            totalAmount: updatedAmount
        }
    } else if (action.type === "REMOVE"){
        const updatedAmount = state.totalAmount - action.value.price * action.value.quantity;
        const updatedProducts = state.products.filter(product => product.id !== action.value.id)
        
        return {
            products: updatedProducts,
            totalAmount: updatedAmount
        }
    } else if(localStorage.getItem('email')&& action.type === "ADDt"){
        let updatedAmount = 0;
         updatedAmount += action.value.price * action.value.quantity;
        const existsItemIndex = state.products.findIndex((index) => index.id === action.value.id)
        const existsItem = state.products[existsItemIndex];
        let update = state.products.concat(action.value) ;
        if (existsItem) {
           return {
               products: state.products,
               totalAmount: state.totalAmount
           } 
        }  
        return {
            products: update,
            totalAmount: updatedAmount
        }     
   }
    


    return defaultState
}


const CartProvider = (props) => {
    const [state, dispatchFN] = useReducer(cartReducer, defaultState)


    const addProductHandler = (product) => {
        dispatchFN({
            type: "ADD",
            value: product

        })
        const email=localStorage.getItem("email")
        const userEmail = email.replace(/[@.]/g, "");
              
              const url=`https://crudcrud.com/api/fabf902f809d473b9d3dde23b838f1a6/Cart${userEmail}`
        
              axios.post(url,product).then((res)=>{
                console.log(res.data)
              }).catch((err)=>{
                console.log(err)
              })
      
    }



    const removeProductHandler = (id) => { 
        dispatchFN({
            type:"REMOVE",
            value:id
        })
    }
    const add2CartHandler = (product) => {
        dispatchFN({
            type: "ADDt",
            value: product

        })
        
        
    }
    


    const Cart = {
        products: state.products,
        totalAmount: state.totalAmount,
        addItem: addProductHandler,
        removeItem: removeProductHandler,
        add2Item:add2CartHandler


    }
    return <CartContext.Provider value={Cart}>{props.children}</CartContext.Provider>
}

export default CartProvider;