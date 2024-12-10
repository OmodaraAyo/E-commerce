import React, { useEffect, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import LineThree from "./LineThree";


const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(()=>{
    if(showMobileMenu){
      document.body.style.overflow = 'hidden'
    }
    return ()=>{
      document.body.style.overflow = 'auto'
    }
  }, [showMobileMenu])

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="flex flex-row justify-center items-center w-full bg-black text-white py-3 gap-1 font-light">
      <h1>Sign up and get 20% off to your first order.</h1>
      <button className="underline underline-offset-4 decoration-1 hover:text-red-600">Sign Up Now</button>
      </div>
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-1 lg:px-9 bg-transparent">
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
        <div className={`flex flex-row items-center border rounded-full px-1 py-2 md:px-8 lg:px-32 gap-2 bg-gray-100 relative font-light`}>
            <FaSearch className="absolute left-3 text-lg text-gray-400"/>
            <input type="text" placeholder="Search for products..." id="" className="bg-transparent w-full border-none focus:outline-none" />
        </div>
        {/* <button className="sm:hidden flex">
          <FaSearch />
          <input type="text" placeholder="Search for products..." id="" className="bg-transparent w-full  border-none focus:outline-none" />
        </button> */}
        <div className="flex flex-wrap gap-3 justify-center items-center">
            <img src="/images/shopping_basket.svg" alt="" className="w-6" />
            <img src="/images/user_circle.svg" alt="" className="w-6"/>
        </div>
        <button className="hidden md:block bg-black px-8 py-2 rounded-full text-white">Sign up</button>
      </div>
      <LineThree/>
      {/* --------mobile-menu----- */}
      <div className={`xl:hidden ${showMobileMenu ? 'fixed w-full text-white': 'h-0 w-0'} right-0 top-0 button-0 overflow-hidden bg-black transform  transition-all duration-200 ease-in-out`}>
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
      </div>
    </div>
  );
};

export default NavBar;
