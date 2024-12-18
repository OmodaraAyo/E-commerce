import React from "react";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#F0F0F0] w-full h-full relative">
      <div className="container mx-auto flex py-4 px-6 -mt-20 min-h-40 overflow-hidden">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:px-14 py-4 w-full rounded-3xl bg-black">
          <h1 className="flex text-start max-w-auto xl:max-w-[500px] font-extrabold text-4xl lg:text-4xl text-white px-10"> STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center bg-[#FFFFFF] px-4 py-3 mx-10 sm:mx-30 lg:mx-24 rounded-full text-sm">
                <MdEmail className="text-gray-400 text-2xl "/>
            <input type="email" placeholder="Enter your email address" className="outline-none font-light w-full h-full"/>
            </div>
            <button className="flex justify-center items-center bg-[#FFFFFF] px-4 py-3 mx-10 sm:mx-30 lg:mx-24 rounded-full text-black font-semibold text-sm">Subscribe to Newsletter</button>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto flex flex-col md:flex-row justify-between gap-10 items-start px-8 sm:px-5 w-full">
            <div className="w-full md:w-1/3 mb-0">
            <img src="/images/SHOP.CO.svg" alt="shop.co" />
            <p className="text-[#00000099] mt-4 max-w-auto lg:max-w-72 text-left font-normal">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:gap-20 w-full md:grid-cols-4">
            <div className="w-full md:w-1/5 mb-8 md:mb-0">
                <h3 className="text-black text-lg font-bold mb-4">COMPANY</h3>
                <ul className="flex flex-col gap-2 text-[#00000099] cursor-pointer">
                   <li className="hover:text-gray-400">About</li>
                   <li className="hover:text-gray-400">Features</li>
                   <li className="hover:text-gray-400">Works</li>
                   <li className="hover:text-gray-400">Career</li>
                </ul>
            </div>
            <div className="w-full mb-8 md:mb-0 ">
                <h3 className="text-black text-lg font-bold mb-4">HELP</h3>
                <ul className="flex flex-col gap-2 text-[#00000099] cursor-pointer">
                   <li className="hover:text-gray-400">Customer Support</li>
                   <li className="hover:text-gray-400">Delivery Details</li>
                   <li className="hover:text-gray-400">Terms & Conditions</li>
                   <li className="hover:text-gray-400">Privacy Policy</li>
                </ul>
            </div>
            <div className="w-full md:w-1/5 mb-8 md:mb-0">
                <h3 className="text-black text-lg font-bold mb-4">FAQ</h3>
                <ul className="flex flex-col gap-2 text-[#00000099] cursor-pointer">
                   <li className="hover:text-gray-400">Account</li>
                   <li className="hover:text-gray-400">Manage Deliveries</li>
                   <li className="hover:text-gray-400">Orders</li>
                   <li className="hover:text-gray-400">Payments</li>
                </ul>
            </div>
            <div className="w-full mb-8 md:mb-0">
                <h3 className="text-black text-lg font-bold mb-4">RESOURCES</h3>
                <ul className="flex flex-col gap-2 text-[#00000099] cursor-pointer">
                   <li className="hover:text-gray-400">Free eBooks</li>
                   <li className="hover:text-gray-400">Development Tutorial</li>
                   <li className="hover:text-gray-400">How to-Blog</li>
                   <li className="hover:text-gray-400">Youtube Playlist</li>
                </ul>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
