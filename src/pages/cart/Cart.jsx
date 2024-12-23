import React from "react";
import NavBar from "../../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaTag, FaTrashAlt } from "react-icons/fa";
import Footer from "../../components/Footer";
import { decreaseCart, increaseCart, removeFromCart } from "./cartSlice";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log("from cart",cart)
  // console.log("map",cart.cartItems)

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
            <div className="empty-cart flex flex-col justify-self-center mt-5 mb-36 items-center">
              <p className="font-semibold text-3xl text-[#aeacac]">Cart is currently empty</p>
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
            <div className="checkout-box mt-8 grid grid-cols-2 mb-36">
              <div className="product-box border border-gray-200 w-full h-full max-w-4xl rounded-2xl">
                {cart.cartItems?.map((cartItem) =>(
                    <div key={cartItem.id} className="cartItem border-b-2 mx-5">
                      <div className="product-details flex justify-between items-start py-5">
                        <div className="productImg flex gap-6 justify-center">
                          <div className="flex justify-center items-center w-auto h-auto bg-[#F2F0F1] rounded-lg ">
                          <img src={cartItem.thumbnail} alt={cartItem.title} className="w-24" />
                          </div>
                          <div className="details">
                            <h2 className="font-bold text-2xl">{cartItem.title}</h2>
                            <h3 className="font-light text-black">Brand:<span className="text-[#00000099] px-1">{cartItem.brand}</span></h3>
                            <h3 className="font-light text-black">Size: <span className="text-[#00000099] px-1">{cartItem.selectedSize}</span></h3>
                            <h3 className="font-bold text-xl mt-1">${(cartItem.discountPrice * cartItem.cartQuantity).toFixed(2)}</h3>
                          </div>
                        </div>
                        <div className="deleteCounter-container flex flex-col justify-center items-end gap-10">
                            <button onClick={() => handleRemoveFromCart(cartItem)}><FaTrashAlt className="text-red-600 text-md"/></button>
                            <div className="flex flex-row justify-center items-center text-3xl bg-[#F0F0F0] rounded-full px-5 mt-5">
                              <button onClick={() => handleDecreaseCartQuantity(cartItem)} className="font-light text-4xl pr-5 -mt-1 cursor-pointer">-</button>
                              <span className="text-lg mt-[2px]">{cartItem.cartQuantity}</span>
                              <button onClick={() => handleIncreaseCartQuantity(cartItem)} className="font-light text-2xl pl-5 -mt-[1px] cursor-pointer">+</button>
                            </div>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
              <div className="cart-summary flex flex-col justify-self-end border border-gray-200 w-full max-w-xl rounded-2xl px-5 py-5 max-h-[28rem]">
              <label htmlFor="Order Summary" className="font-medium text-2xl">Order Summary</label>
                <div className="mt-5">
                  <div className="border-b-2 mb-3">
                    <h2 className="flex flex-row justify-between text-[#00000099] font-light text-lg">Subtotal<span>totalPrice</span></h2>
                    <h2 className="flex flex-row justify-between text-[#00000099] font-light text-lg">Discount<span>$discount</span></h2>
                    <h2 className="flex flex-row justify-between mb-4 text-[#00000099] font-light text-lg">Delivery Fee<span>$25</span></h2>
                  </div>
                  <h2 className="flex flex-row justify-between  text-xl">Total<span>${cart.cartTotalAmount}</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-14">
                  <div className="flex w-full max-w-[22rem] bg-[#F0F0F0] justify-start items-center gap-1 px-4 py-3 rounded-full absolute">
                    <FaTag className="bg-none outline-none mt-1 text-[#bcbaba]"/>
                    <input type="text" placeholder="Add promo code" className="w-full px-1 bg-transparent outline-none"/>
                  </div>
                  <button className="flex absolute justify-self-end justify-center w-full max-w-40 rounded-full bg-black py-3 text-white">Apply</button>
                </div>
                <button className="flex justify-center items-center gap-4 w-full sm:w-auto bg-black px-8 py-4 rounded-full text-white mt-20">
                  <span>Go to Checkout</span>
                  <FaArrowRight/>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Cart;
