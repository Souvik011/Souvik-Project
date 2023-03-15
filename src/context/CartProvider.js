import { useReducer } from "react";
import CartContext from "./cart-context";
const defaultCartState = {
    items: [],
    total: 0,
  };
  const cartReducer = (state, action) => {
    if (action.type === "ADD") {
      const newTotal = state.total + action.item.price * action.item.quantity;
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[itemIndex];

    let updatedItems;

    if(existingCartItem){
      const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.price + action.item.price
      };
      updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;

    } else {
      updatedItems = state.items.concat(action.item);
  }
  
  return {items:updatedItems, total:newTotal};
  };
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