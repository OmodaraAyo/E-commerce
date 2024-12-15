import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import modelBag from "/images/blackBagB.svg"

const Login = () => {
  const navigate = useNavigate();

  const navigateToHome = ()=>{
    navigate("/home")
  }
  return (
    <div className="relative"
    style={{
      backgroundImage: `url(${modelBag})`,
      backgroundSize: "cover", 
      backgroundPosition: "center",
      backgroundAttachment: "fixed", 
      backgroundRepeat: "no-repeat",
      minHeight: "100vh", 
    }}
    >
        <div className={`bg-black bg-opacity-50 fixed w-full h-full right-0 top-0`}>
        <div className="w-full h-full bg-transparent flex justify-between p-5 cursor-pointer z-30">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#F2F0F1]">SHOP.CO</h1>
          <div className="">
          <button onClick={navigateToHome}>
          <FaTimes className="text-3xl md:text-5xl  text-[#F2F0F1] hover:text-[#e7e1e4] sm:mr-4 right-4 "/>
          </button>
        </div>
        </div>
      </div>
      {/* <div className="flex justify-center">
        <img src="/images/" alt="" className="fixed w-16 py-32 cursor-pointer"/>
        </div> */}
        <div className="flex flex-col items-center text-center p-6 lg:px-32">
        <div className="flex justify-center w-full py-52">
        <form className="max-w-2xl mx-auto md:w-11/12 fixed ">
            <div className="flex flex-col gap-4 w-96 md:w-full text-white">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Service@gmail.com"
                  className="w-full bg-slate-50 bg-opacity-10 border border-gray-300 placeholder-gray-300 border-opacity-5 rounded-full py-5 px-5 outline-none"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="w-full bg-slate-50 bg-opacity-10 border border-gray-300  placeholder-gray-300 border-opacity-5 rounded-full py-5 px-5 outline-none "
                  required
                />
              </div>
              <button className="bg-[#F2F0F1]  hover:bg-[#fff5fa] text-black text-2xl font-semibold py-5 mb-5 rounded-full cursor-pointer">
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div className="fixed top-[370px] h-0 bg-black">
        <div className="flex gap-14 justify-between w-full px-10 md:px-24 xl:px-80 relative mt-32 text-[#F2F0F1] text-xl md:text-2xl">
            <span>Don't have an account?</span>
            <span className="hover:text-[#e7e1e4] underline underline-offset-3 decoration-1 font-medium text-[#F2F0F1]">
              <Link to={"/signup"}>Sign up</Link>
            </span>
          </div>
          </div>
        </div>
        <div className="top-[560px] w-full flex justify-end border-t border-[#e7e1e4] px-6 md:px-10 xl:px-12 fixed mt-32 text-white text-xl font-semibold h-0">
            <h2 className="mt-1">&copy; 2024 All Rights Reserved</h2>
          </div>
    </div>
  );
};

export default Login;
