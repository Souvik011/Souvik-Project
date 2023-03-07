import { useReducer } from "react";
import CartContext from "./cart-context";
const defaultCartState = {
    items: [],
    total: 0,
  };
  const cartReducer = (state, action) => {
    if (action.type === "ADD") {
      const updatedItems=state.items.concat(action.item);
      const updatedTotal=state.total+action.item.price*action.item.amount;
      return{
          items:updatedItems,
          total:updatedTotal
      };
    }
  
    return defaultCartState;
  };

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
      );

    const addItemCartHandler = (item) => {
        dispatchCartAction({ type: "ADD", item: item });
    };
    const removeItemCartHandler = (id) => {
        dispatchCartAction({ type: "REMOVE", id: id });
    };
    const cartContext = {
        items: cartState.items,
        total: cartState.total,
        addItem: addItemCartHandler,
        removeItem: removeItemCartHandler,
      };
      return <CartContext.Provider value={cartContext}>
      {props.children}
      </CartContext.Provider>
};

export default CartProvider;