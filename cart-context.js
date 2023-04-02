import React from 'react'

const CartContext=React.createContext({
    products:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{},
    add2Item:(item)=>{}
})

export default CartContext