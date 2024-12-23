import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlelogin = (e) =>{
    e.preventDefault();

    const storedEmail = localStorage.getItem('email')
    const storedPassword = localStorage.getItem('password')

    if(email === storedEmail && password === storedPassword){
      dispatch(login({email, password}))
      toast.success("Login Successful")
      navigate("/home")
    }else{
      toast.error("Invalid email or password")
    }
  }

  const navigateToHome = ()=>{
    navigate("/home")
  }
  
  return (
    <div className="">
        <div className={`w-full h-full overflow-hidden fixed`}>
        <div className="w-full h-full bg-transparent flex justify-between p-5 cursor-pointer z-30">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#1b1919]">SHOP.CO</h1>
          <div className="">
          <button onClick={navigateToHome}>
          <FaTimes className="text-3xl md:text-5xl text-[#1b1919] hover:text-red-600 sm:mr-4 right-4 "/>
          </button>
        </div>
        </div>
      </div>
       <div className="flex justify-center">
        <img src="/images/shopBAG.jpg" alt="" className="fixed w-24 py-28 cursor-pointer"/>
        </div>
        <div className="flex flex-col items-center text-center p-6 lg:px-32">
        <div className="flex justify-center w-full py-52">
        <form onSubmit={(e) => handlelogin(e)} className="max-w-2xl mx-auto md:w-11/12 fixed">
            <div className="flex flex-col gap-4 w-96 md:w-full text-black">
              <div>
                <label htmlFor="email" className="text-[#1b1919] flex justify-self-start">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Service@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-300 bg-opacity-20 border border-gray-300 placeholder-gray-300 placeholder:italic border-opacity-5 rounded-md py-5 px-5 outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="text-[#1b1919] flex justify-self-start">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                  className="w-full bg-gray-300 bg-opacity-20 border border-gray-300 placeholder-gray-300 placeholder:italic border-opacity-5 rounded-md py-5 px-5 outline-none "
                  required
                />
              </div>
              <button type="submit" className="bg-[#1b1919] hover:bg-black hover:text-gray-300 text-white text-2xl font-semibold py-3 mb-5 rounded-md cursor-pointer">
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div className="fixed top-[390px] h-0 bg-black">
        <div className="flex gap-14 justify-between w-full px-10 md:px-24 xl:px-80 relative mt-32 text-[#1b1919] text-xl md:text-2xl">
            <span>Don't have an account?</span>
            <span className="hover:text-black underline underline-offset-3 decoration-1 font-medium text-blue-600">
              <Link to={"/signup"}>Sign up</Link>
            </span>
          </div>
          </div>
        </div>
        <div className="top-[560px] w-full flex justify-end border-t border-[#e7e1e4] px-6 md:px-10 xl:px-12 fixed mt-32 text-[#1b1919] text-md font-semibold h-0">
            <h2 className="mt-3">&copy; 2024 All Rights Reserved</h2>
          </div>
    </div>
  );
};

export default Login;
