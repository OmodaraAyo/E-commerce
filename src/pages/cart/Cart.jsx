import React, { useEffect } from "react";
import NavBar from "../../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaTag, FaTrashAlt } from "react-icons/fa";
import Footer from "../../components/Footer";
import { decreaseCart, getTotalAmount, increaseCart, removeFromCart } from "./cartSlice";
import { toast } from "react-toastify";
import AdBanner from "../../components/AdBanner";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(()=>{
    dispatch(getTotalAmount())
  },[dispatch, cart])

  const handleRemoveFromCart = (cartItem) => {
      dispatch(removeFromCart(cartItem))
      toast.error("Item removed", {
        position: "bottom-left"
      })
  };

  const handleIncreaseCartQuantity = (cartItem) => {
      dispatch(increaseCart(cartItem))
  };

  const handleDecreaseCartQuantity = (cartItem) => {
    dispatch(decreaseCart(cartItem))
  };
  
  const handleDiscountPrice = (cart) =>{
    return parseFloat(cart.cartTotalAmount * 0.20).toFixed(2);
  }

  const handleDeliveryFee = (cart) => {
    return cart.cartTotalWeight + 4
  }

  return (
    <div>
      {cart.cartItems.length === 0? <NavBar isSearchDisabled={false}/>: <NavBar isSearchDisabled={true}/>}
      <div className="container border-t-2 mx-auto border-gray-200">
        <div className="mt-5 px-7 sm:px-2 lg:px-0">
          <label
            htmlFor="YourCart"
            className="font-extrabold text-3xl font-sans xl:px-2"
          >
            YOUR CART
          </label>
          {cart.cartItems.length === 0 ? (
            <div className="empty-cart flex flex-col justify-self-center mt-5 mb-36 items-center py-44 gap-3">
              <p className="font-semibold text-3xl sm:text-5xl text-[#e0e0e0]">Cart is currently empty</p>
              <div className="start-shopping">
                <Link to={"/"}>
                 <button className="flex justify-center items-center gap-2 text-[#959191] hover:text-[#606060]">
                 <FaArrowLeft />
                 <span>Start Shopping</span>
                 </button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="checkout-box mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 mb-36 lg:gap-3 xl:gap-0 xl:px-2">
              <div className="product-box border border-gray-200 w-full h-full max-w-4xl rounded-2xl">
                {cart.cartItems?.map((cartItem, index) =>(
                    <div key={cartItem.id} className= {`cart-items mx-5 ${index !== cart.cartItems.length -1 ? 'border-b-2' : ''}`}>
                      <div className="product-details flex justify-between items-start py-5">
                        <div className="productImg flex gap-3 justify-start items-center w-full">
                          <div className="flex justify-center items-center w-auto h-auto sm:h-32 bg-[#F2F0F1] rounded-lg ">
                          <img src={cartItem.thumbnail} alt={cartItem.title} className="w-36" />
                          </div>
                          <div className="details w-full">
                            <h2 className="flex flex-row justify-between items-center font-bold text-[0.927rem] sm:text-2xl">
                              {cartItem.title}
                              <button onClick={() => handleRemoveFromCart(cartItem)}><FaTrashAlt className="text-red-600 text-[1.1rem] mt-1 mr-1"/></button>
                              </h2>
                            <h3 className="font-light text-black text-xs sm:text-[1.104rem] leading-relaxed">Brand:<span className="text-[#00000099] px-1 text-xs sm:text-[1.104rem]">{cartItem.brand}</span></h3>
                            <h3 className="font-light text-black text-xs sm:text-[1.104rem] leading-relaxed">Size: <span className="text-[#00000099] px-1 text-xs sm:text-[1.104rem]">{cartItem.selectedSize}</span></h3>
                            <h3 className="flex flex-row justify-between items-center font-bold text-lg mt-1 sm:text-[1.5rem] leading-relaxed">
                              ${(cartItem.discountPrice * cartItem.cartQuantity).toFixed(2)}
                              <div className="counter-box flex flex-row justify-center items-center bg-[#F0F0F0] rounded-full px-5">
                              <button onClick={() => handleDecreaseCartQuantity(cartItem)} className="font-light text-2xl sm:text-4xl pr-5 -mt-1 cursor-pointer">-</button>
                              <span className="font-light sm:font-normal text-lg sm:mt-[2px]">{cartItem.cartQuantity}</span>
                              <button onClick={() => handleIncreaseCartQuantity(cartItem)} className="font-light text-xl mt-[-0.37rem] sm:text-2xl pl-5 sm:-mt-[1px] cursor-pointer">+</button>
                            </div>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
              <div className="cart-summary flex flex-col justify-self-end border border-gray-200 w-full lg:max-w-xl rounded-2xl px-5 py-5 max-h-[32rem]">
              <label htmlFor="Order Summary" className="font-medium text-xl md:text-2xl">Order Summary</label>
                <div className="mt-5">
                  <div className="border-b-2 mb-3 flex flex-col gap-4">
                    <h2 className="flex flex-row justify-between text-[#00000099] font-light text-lg ">Subtotal<span className="text-black font-bold text-[1.27rem] md:text-[1.47rem]">${(cart.cartTotalAmount).toFixed(2)}</span></h2>
                    <h2 className="flex flex-row justify-between text-[#00000099] font-light text-lg">Discount {'(-20%)'}<span className="text-red-600 font-bold text-[1.27rem] md:text-[1.23rem]">-${handleDiscountPrice(cart)}</span></h2>
                    <h2 className="flex flex-row justify-between mb-4 text-[#00000099] font-light text-lg">Delivery Fee<span className="text-black font-bold text-[1.12rem] md:text-[1.21rem]">${handleDeliveryFee(cart)}</span></h2>
                  </div>
                  <h2 className="flex flex-row justify-between text-xl">Total<span className="text-[1.20rem] md:text-[1.27rem]">${parseFloat((cart.cartTotalAmount + handleDeliveryFee(cart)) - handleDiscountPrice(cart)).toFixed(2)}</span></h2>
                </div>
                <div className="flex flex-row justify-between mt-14 px-2 py-2 mb-6 gap-5">
                  <div className="flex w-full max-w-[25rem] md:max-w-[31rem] lg:max-w-[18rem] xl:max-w-[23rem] bg-[#F0F0F0] justify-start items-center gap-1 px-4 py-3 rounded-full">
                    <FaTag className="bg-none outline-none mt-1 text-[#bcbaba]"/>
                    <input type="text" placeholder="Add promo code" className="w-full px-1 bg-transparent outline-none"/>
                  </div>
                  <button className="w-full max-w-28 sm:max-w-40 md:max-w-48 lg:max-w-40 rounded-full bg-black py-3 text-white">Apply</button>
                </div>
                <button className="flex justify-center items-center gap-4 w-full sm:w-auto bg-black px-8 py-4 rounded-full text-white">
                  <span>Go to Checkout</span>
                  <FaArrowRight/>
                </button>
              </div>
              <AdBanner/>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Cart;
