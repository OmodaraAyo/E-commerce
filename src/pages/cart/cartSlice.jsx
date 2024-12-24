import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  cartTotalQuantity: JSON.parse(localStorage.getItem("cartTotalQuantity")) || 0,
  cartTotalAmount: 0,
  cartSize: JSON.parse(localStorage.getItem("cartSize")) || 0,
  cartTotalWeight: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productIndex = state.cartItems.findIndex(
        (product) => product.id === action.payload.id
      );

      if (productIndex >= 0) {
        state.cartItems[productIndex].cartQuantity +=
          action.payload.tempQuantityCount;
         state.cartItems[productIndex].selectedSize = action.payload.selectedSize
        toast.info("product already in cart", {
          position: "bottom-left",
        });
      } else {
        const tempProduct = {
          ...action.payload,
          cartQuantity: action.payload.tempQuantityCount || 1,
        };
        state.cartItems.push(tempProduct);
        state.cartSize += 1;
        toast.success("Added to cart", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("cartSize", state.cartSize);
    },

    removeFromCart: (state, action) => {
      const newCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = newCartItems;

      const cartSize = state.cartSize;

      if (state.cartItems.length === 0) {
        state.cartSize = 0;
      } else if (state.cartItems.length !== 0 && cartSize > 0) {
        state.cartSize -= 1;
        localStorage.setItem("cartSize", state.cartSize);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    increaseCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity >= 1) {
        state.cartItems[itemIndex].cartQuantity += 1;

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },

    decreaseCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },

    getTotalAmount: (state, action) => {
      let { total, quantity, weight } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { discountPrice, cartQuantity, weight } = cartItem;
          const itemTotal = parseFloat(
            (discountPrice * cartQuantity).toFixed(2)
          );
          const itemWeight = weight * cartQuantity

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          cartTotal.weight += itemWeight;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
          weight: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = parseFloat(total.toFixed(2));
      state.cartTotalWeight = weight;
    },

    getCartSize: (state) => {
      return state.cartSize;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseCart,
  decreaseCart,
  getTotalAmount,
  getCartSize,
} = cartSlice.actions;
export default cartSlice.reducer;
