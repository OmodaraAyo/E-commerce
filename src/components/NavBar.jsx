import React, { useEffect, useState } from "react";
import { FaSearch, FaSignOutAlt, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../auth/authSlice";


const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () =>{
    dispatch(logout())
    navigate("/home")
  }

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  const handleOnclick = ()=> {
    navigate("/signup")
  }

  const navigateToLogin = ()=> {
    navigate("/login")
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
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-1 mb-3 lg:px-9 bg-transparent">
        <div className="flex gap-4 justify-center items-center">
        <img onClick={()=>{setShowMobileMenu(true)}} src="/images/black_menu.svg" alt="" className="xl:hidden w-7 cursor-pointer " />
        <img src="/images/SHOP.CO.svg" alt="shop-logo" />
        </div>
        <ul className="hidden xl:flex gap-7 text-neutral-950">
          <li className="cursor-pointer hover:text-gray-500">Shop</li>
          <li className="cursor-pointer hover:text-gray-500">On Sale</li>
          <li className="cursor-pointer hover:text-gray-500">New Arrivals</li>
          <li className="cursor-pointer hover:text-gray-500">Brands</li>
        </ul>
        <div className={`hidden sm:flex sm:flex-row items-center border rounded-full px-1 py-2 sm:px-5 md:px-8 lg:px-32 gap-2 bg-gray-100 relative font-light overflow-hidden`}>
            <FaSearch className="left-3 text-lg text-gray-400"/>
            <input type="text" placeholder="Search for products..." id="" className="bg-transparent w-full border-none focus:outline-none" />
        </div>
        <div className="flex flex-wrap gap-3 justify-center items-center">
            <button onClick={()=>{setShowMobileMenu(true)}} className="sm:hidden"><FaSearch className="text-xl mt-1"/></button>
            <div className="cart-box">
              <button><img src="/images/shopping_basket.svg" alt="" className="w-6" /></button>
              <span>2</span>
            </div>
            <img src="/images/user_circle.svg" alt="" className="w-6"/>
            {isAuthenticated && (
               <button onClick={handleLogout}><FaSignOutAlt className="sign-out text-2xl text-red-600 hover:text-red-700"/></button>
            )}
        </div>
       {!isAuthenticated && (
           <button onClick={navigateToLogin} className="hidden md:block bg-black px-8 py-2 rounded-full text-white">Sign up</button>
       )}
      </div>

      {/* --------mobile-menu----- */}
      <div className={`xl:hidden ${showMobileMenu ? 'fixed w-full py-6 text-white': 'h-0 w-0'} right-0 top-0 button-0 overflow-hidden bg-black transform transition-all duration-200 ease-in-out`}>
        <div className="flex justify-end p-6 cursor-pointer">
          <button onClick={()=>{setShowMobileMenu(false)}}>
          <FaTimes className="w-10 text-3xl"/>
          </button>
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-xl font-medium cursor-pointer">
          <li className="px-4 py-2 rounded-full inline-block  hover:text-gray-500">Shop</li>
          <li className="px-4 py-2 rounded-full inline-block  hover:text-gray-500">On Sale</li>
          <li className="px-4 py-2 rounded-full inline-block  hover:text-gray-500">New Arrivals</li>
          <li className="px-4 py-2 rounded-full inline-block  hover:text-gray-500">Brands</li>
        </ul>
        <div className="flex flex-row items-center border:none bg-white rounded-full px-6 py-3 gap-2 mx-5 overflow-hidden">
        <FaSearch className="left-3 text-lg text-gray-400"/>
        <input type="text" placeholder="Search for products..." id="" className="bg-transparent text-xl w-full border-none focus:outline-none mb-1 text-black overflow-hidden" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
