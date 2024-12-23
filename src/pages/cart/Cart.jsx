import React from "react";
import NavBar from "../../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log("from cart",cart)
  // console.log("map",cart.cartItems)

  const handleIncrement = (cartItem) => {
    const quantityCount = cartItem.quantityCount + 1;
    dispatch(quantityCount(({id: cartItem.id, selectedSize: cartItem.selectedSize, quantityCount: updateQuantityCount})))
  }

  const handleDecrement = (cartItem) => {
    if(cartItem.quantityCount > 1){
      const updateQuantityCount = cartItem.quantityCount - 1;
      dispatch(updateQuantityCount(({id: cartItem.id, selectedSize: cartItem.selectedSize, quantityCount: updateQuantityCount})))
    }
  }
  
  return (
    <div>
      <NavBar />
      <div className="container border-t-2 mx-auto border-gray-200">
        <div className="mt-5">
          <label
            htmlFor="YourCart"
            className="font-extrabold text-3xl font-sans"
          >
            YOUR CART
          </label>
          {cart.cartItems.length === 0 ? (
            <div className="empty-cart flex flex-col justify-self-center mt-5">
              <p className="font-semibold">Cart is currently empty</p>
              <div className="start-shopping">
                <Link to={"/"}>
                  <span>Start Shopping</span>
                  <FaArrowLeft />
                </Link>
              </div>
            </div>
          ) : (
            <div className="checkout-box mt-8 grid grid-cols-2">
              <div className="product-box border border-gray-200 w-full h-full max-w-4xl rounded-2xl">
                {cart.cartItems?.map((cartItem) =>(
                    <div key={cartItem.id} className="cartItem border-t-2 mx-5">
                      <div className="product-details flex justify-between items-start py-5">
                        <div className="productImg flex gap-6 justify-center">
                          <div className="flex justify-center items-center w-auto h-auto bg-[#F2F0F1] rounded-lg ">
                          <img src={cartItem.thumbnail} alt={cartItem.title} className="w-24" />
                          </div>
                          <div className="details">
                            <h2 className="font-bold text-3xl">{cartItem.title}</h2>
                            <h3 className="font-light text-black">Brand:<span className="text-[#00000099] px-1">{cartItem.brand}</span></h3>
                            <h3 className="font-light text-black">Size: <span className="text-[#00000099] px-1">{cartItem.selectedSize}</span></h3>
                            <h3 className="font-extrabold text-2xl mt-1">${cartItem.discountPrice}</h3>
                          </div>
                        </div>
                        <div className="deleteCounter-container flex flex-col justify-between items-end gap-10">
                            <button><FaTrashAlt className="text-red-600"/></button>
                            <div className="flex flex-row justify-between items-center text-3xl bg-[#F0F0F0] rounded-full px-9 mt-4">
                              <button onClick={() => handleDecrement(cartItem)}className="flex font-semibold text-4xl pb-2 text-ellipsis">-</button>
                              <span className="flex text-lg">{cartItem.cartQuantity}</span>
                              <button onClick={() => handleIncrement(cartItem)} className="font-semibold pb-1 text-2xl">+</button>
                            </div>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
              <div className="cart-summary flex flex-col justify-self-end border border-gray-200 w-full max-w-lg rounded-2xl px-5 py-5">
              <label htmlFor="Order Summary">Order Summary</label>
                <div className="mt-5">
                  <div className="border-b-2 mb-3">
                    <h2 className="flex flex-row justify-between">Subtotal<span>totalPrice</span></h2>
                    <h2 className="flex flex-row justify-between">Discount<span>$discount</span></h2>
                    <h2 className="flex flex-row justify-between mb-4">Delivery Fee<span>$25</span></h2>
                  </div>
                  <h2 className="flex flex-row justify-between">Total<span>${}</span></h2>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
