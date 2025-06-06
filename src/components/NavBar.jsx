import React, { useEffect, useState } from "react";
import { FaSearch, FaSignOutAlt, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../auth/authSlice";
import { toast } from "react-toastify";
import CustomInput from "../reusables/CustomInput";


const NavBar = ({isSearchDisabled}) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartSize } = useSelector((state)=> state.cart)
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  const handleLogout = () =>{
    dispatch(logout())
    toast.success('You have successfully logged out')
    navigate("/home");
  }

  const handleOnclick = ()=> {
    navigate("/signup");
  }

  const navigateToLogin = ()=> {
    navigate("/login");
  }

  const navigateToCart = () =>{
    navigate("/cart");
  }

  const navigateLogoToHome = () => {
    navigate("/");
  }

  const navigateToProfilePage = () => {
    navigate("/profile");
  }
  const navigateToAllProductPage = () => {
    navigate("/home/all-product");
  }

  useEffect(()=>{
    if(showMobileMenu){
      document.body.style.overflow = 'hidden'
    }
    return ()=>{
      document.body.style.overflow = 'auto'
    }
  }, [showMobileMenu])

  return (
    <div className="top-0 left-0 w-full">
     {!isAuthenticated && (
         <div className="flex flex-row justify-center items-center w-full bg-black text-white py-3 gap-1 font-light">
         <h1>Sign up and get 20% off to your first order.</h1>
         <button onClick={handleOnclick} className="underline underline-offset-4 decoration-1 hover:text-blue-600">Sign Up Now</button>
         </div>
     )}
     {isAuthenticated && (
         <div className="flex flex-row justify-center items-center w-full bg-black text-white py-3 gap-1 font-light">
         <h1>Welcome back! get 20% off to your first order.</h1>
         </div>
     )}
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-2 mb-3 bg-transparent">
        <div className="flex gap-3 justify-center items-center">
        <img onClick={()=>{setShowMobileMenu(true)}} src="/images/black_menu.svg" alt="" className="xl:hidden w-6 sm:w-7 cursor-pointer " />
        <button onClick={navigateLogoToHome}><img src="/images/SHOP.CO.svg" alt="shop-logo" className="w-32 sm:w-[156px]"/></button>
        </div>
        <ul className="hidden xl:flex gap-7 text-neutral-950">
          <li className="cursor-pointer hover:text-gray-500">Shop</li>
          <li className="cursor-pointer hover:text-gray-500">On Sale</li>
          <li className="cursor-pointer hover:text-gray-500">New Arrivals</li>
          <li className="cursor-pointer hover:text-gray-500">Brands</li>
        </ul>
        <button className={`hidden sm:flex sm:flex-row items-center border rounded-full px-4 py-2 gap-2 bg-gray-100 font-light w-full max-w-60 md:max-w-[20rem] lg:max-w-lg outline-none h-12`} disabled={isSearchDisabled}>
            <FaSearch className="flex justify-self-start text-lg text-gray-400 outline-none"/>
            <CustomInput isSearchDisabled={isSearchDisabled}/>
        </button>
        <div className="flex flex-wrap gap-2 justify-center items-center">
            <button onClick={()=>{setShowMobileMenu(true)}} className="sm:hidden"><FaSearch className="text-lg "/></button>
            <div className="cart-box flex ">
              <button onClick={()=> navigateToCart()}><img src="/images/shopping_basket.svg" alt="" className="w-5 sm:w-6" />
              {cartSize === 0 ? '': <span className="absolute w-5 h-5 bg-yellow-400 flex justify-center items-center rounded-full ml-2 top-14 sm:top-16 cursor-pointer"><p className="font-light text-sm">{cartSize}</p></span>}
              </button>
            </div>
            <button onClick={navigateToProfilePage}><img src="/images/user_circle.svg" alt="" className="w-5 sm:w-6"/></button>
            {isAuthenticated && (
               <button onClick={handleLogout}><FaSignOutAlt className="sign-out text-xl sm:text-2xl text-red-600 hover:text-red-700"/></button>
            )}
        </div>
       {!isAuthenticated && (
           <button onClick={navigateToLogin} className="hidden md:block bg-black px-8 py-2 rounded-full text-white">Sign up</button>
       )}
      </div>

      {/* --------mobile-menu----- */}
      <div className={`xl:hidden ${showMobileMenu ? 'fixed w-full py-6 text-white': 'h-0 w-0'} right-0 top-0 button-0 overflow-hidden bg-black transform transition-all duration-200 ease-in-out rounded-bl-3xl shadow-md shadow-[#bbbbb7] z-50`}>
        <div className="flex justify-end p-6 cursor-pointer">
          <button onClick={()=>{setShowMobileMenu(false)}}>
          <FaTimes className="w-10 text-3xl"/>
          </button>
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-xl font-medium cursor-pointer">
          <a onClick={navigateToAllProductPage} className="px-4 py-2 rounded-full inline-block  hover:text-gray-500">Shop</a>
          <a className="px-4 py-2 rounded-full inline-block  hover:text-gray-500">On Sale</a>
          <a href="#new-arrivals" className="px-4 py-2 rounded-full inline-block  hover:text-gray-500">New Arrivals</a>
          <a className="px-4 py-2 rounded-full inline-block  hover:text-gray-500">Brands</a>
        </ul>
        <div className="flex flex-row items-center border:none bg-white rounded-full px-4 py-2 gap-2 mx-5 overflow-hidden h-12">
          <FaSearch className="left-3 text-lg text-gray-400"/>
          <CustomInput isSearchDisabled={isSearchDisabled}/>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
