import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart:(state, action) =>{
      const productIndex = state.cartItems.findIndex(
        (product) => product.id === action.payload.id
      );

      if (productIndex >= 0) {
        state.cartItems[productIndex].cartQuantity += 1;
        toast.info("product already in cart", {
            position: "bottom-left"
        })
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success("Added to cart", {
            position: "bottom-left"
        })
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },

    removeFromCart: (state, action) =>{
        const newCartItems = state.cartItems.filter(
            cartItem => cartItem.id !== action.payload.id
        )
        state.cartItems = newCartItems
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },

    increaseCart: (state, action) =>{
        const itemIndex = state.cartItems.findIndex(
            cartItem => cartItem.id === action.payload.id
        )
        
        if(state.cartItems[itemIndex].cartQuantity > 1){
            state.cartItems[itemIndex].cartQuantity += 1
        }
    },

    decreaseCart: (state, action) =>{
        const itemIndex = state.cartItems.findIndex(
            cartItem => cartItem.id === action.payload.id
        )
        
        if(state.cartItems[itemIndex].cartQuantity > 1){
            state.cartItems[itemIndex].cartQuantity -= 1
        }
    }
  },
});

export const { addToCart, removeFromCart, increaseCart, decreaseCart} = cartSlice.actions;
export default cartSlice.reducer;