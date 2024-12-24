import {React, useState } from "react";
import { useParams } from "react-router";
import { useGetProductByIdQuery } from "../service/shopApi";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import NavBar from "../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./cart/cartSlice";
import {useNavigate} from 'react-router'
import { toast } from "react-toastify";
import Footer from "../components/Footer"

const ProductDetailPage = () => {
  const navigate = useNavigate()
  const dispatch =  useDispatch();
  const { productId } = useParams();
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const cart = useSelector((state) => state.cart)
  console.log("from productPage", cart)
  // console.log("cartQUantity from productPage", cart?.cartItems[0].cartQuantity)
  const { data, isLoading, isError } = useGetProductByIdQuery(productId);
  console.log(data);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error loading page...</div>;
  }
  const calculateDiscountPrice = (data) => {
    const discountedPrice = data.price - (data.price * data.discountPercentage / 100);
    return discountedPrice.toFixed(2); 
  }

  const handleSizeClick = (size)=>{
    setSelectedSize(selectedSize === size? null : size);
  }

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => {
    if (count > 1) setCount(count - 1);
  }
  const handleAddToCart = (data) =>{
    if(!selectedSize){
      toast.error("please select a size", {
        position: "bottom-right"
      })
      return;
    }
    const tempQuantityCount = count;
    const sizeSelected = {...data, selectedSize, discountPrice: calculateDiscountPrice(data), tempQuantityCount}
    dispatch(addToCart(sizeSelected))
    navigate('/cart')
  }
 
  return (
    <div>
      <NavBar/>
      <div className="container mx-auto border-t-2 border-gray-200 mb-36">
        <div className="md:flex gap-12 mt-5 px-5 sm:px-5 md:px-0">
          <div className="images-container flex flex-col justify-self-center xl:flex-row-reverse lg:justify-self-start gap-5 cursor-pointer">
            <div className="flex flex-shrink-0 justify-center items-center w-auto h-auto bg-[#F2F0F1] rounded-2xl">
              <img src={data.thumbnail} alt={data.title} className="w-[400px] md:w-[440px]"/>
            </div>
            <div className="grid grid-cols-3 gap-3 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-4 xl:grid-cols-1">
              <div className="flex-shrink-0 md:w-[152px] lg:w-[142px] xl:w-[152px] h-auto bg-[#F2F0F1] rounded-2xl">
                <img src={data.images[0]} alt={data.title}/>
              </div>
              <div className="flex-shrink-0 md:w-[152px] lg:w-[142px] xl:w-[152px] h-auto bg-[#F2F0F1] rounded-2xl ">
                <img src={data.images[2]} alt={data.title} />
              </div>
              <div className="flex-shrink-0 md:w-[152px] lg:w-[142px] xl:w-[152px] h-auto bg-[#F2F0F1] rounded-2xl">
                <img src={data.images[3]} alt={data.title} />
              </div>
            </div>
          </div>
          {/* details component*/}
          <div className="flex flex-col gap-2 ">
            {data.id >= 93 && data.id < 97 || data.id >= 190 && data.id < 192?
             (<h2 className="font-extrabold text-[37px]">{data.title.toUpperCase()}</h2>) : 
             <h1 className="font-extrabold text-[46px]">{data.title.toUpperCase()}</h1>
            }

            {/* <h1 className="font-extrabold text-[46px]">{data.title.toUpperCase()}</h1> */}
            <div className="flex items-center gap-2">
                {Array.from({length : 5}, (_, index)=>{
                    if(index < Math.floor(data.rating)){
                        return <FaStar key={index} className='text-yellow-300'/>
                    }else if(index < data.rating){
                        return <div key={index} className="flex items-center gap-3"><FaStarHalfAlt className="text-yellow-300"/><div className='font-light'>{data.rating}/<span className='font-light text-gray-500'>5</span></div></div>
                    }
                })
                }
            </div>
            <div className="flex gap-4">
            <h2 className="font-semibold text-2xl text-black">${calculateDiscountPrice(data)}</h2>
            <h2 className="font-semibold text-2xl text-zinc-400 line-through">${data.price}</h2>
            <div className="flex justify-center items-center rounded-full bg-[#FF33331A] w-[72px] h-[34px]">
                <h3 className="text-[#FF3333] font-light text-lg">-{Math.ceil(data.discountPercentage)}%</h3>
            </div>
            </div>
            <h2 className="max-w-lg md:max-w-sm xl:max-w-xl text-[#00000099] mb-3">{data.description}</h2>
            <div className=" container border-t-2 border-gray-200">
                <div className="color-container mt-3">
                    <h1 className="text-[#00000099] font-light text-md mb-3">Select Color</h1>
                    <h2 className="flex justify-self-center text-[#00000099]">No Other Colors Available At The Moment</h2>
                </div>
            </div>
            <div className=" container border-t-2 border-gray-200 mb-2">
                <div className="color-container mt-3">
                    <h1 className="text-[#00000099] font-light text-md mb-3">Choose Size</h1>
                    <div className="flex flex-row gap-2 sm:gap-4 cursor-pointer">
                        <button onClick={()=>{handleSizeClick('Small')}} className={`bg-[#F0F0F0] w-auto px-5 py-3 rounded-full  ${selectedSize === 'Small' ? 'bg-black text-white': 'hover:bg-gray-400 hover:text-white'}`}>Small</button>
                        <button onClick={()=>{handleSizeClick('Medium')}} className={`bg-[#F0F0F0] w-auto px-5 py-3 rounded-full  ${selectedSize === 'Medium' ? 'bg-black text-white': 'hover:bg-gray-400 hover:text-white'}`}>Medium</button>
                        <button onClick={()=>{handleSizeClick('Large')}} className={`bg-[#F0F0F0] w-auto px-5 py-3 rounded-full  ${selectedSize === 'Large' ? 'bg-black text-white': 'hover:bg-gray-400 hover:text-white'}`}>Large</button>
                        <button onClick={()=>{handleSizeClick('Xlarge')}} className={`bg-[#F0F0F0] w-auto px-5 py-3 rounded-full  ${selectedSize === 'Xlarge' ? 'bg-black text-white': 'hover:bg-gray-400 hover:text-white'}`}>X Large</button>
                    </div>
                </div>
            </div>
            {/* counter */}
            <div className="container flex justify-between items-center border-t-2 border-gray-200">
                <div className="flex flex-row justify-between items-center text-3xl bg-[#F0F0F0] w-1/4 rounded-full px-5 mt-4">
                    <button onClick={decreaseCount} className="flex font-semibold text-4xl pb-2 text-ellipsis">-</button>
                    <span className="flex text-lg">{count}</span>
                    <button onClick={increaseCount} className="font-semibold pb-1 text-2xl">+</button>
                </div>
                <button onClick={()=> handleAddToCart(data)} className="w-full max-w-[270px] sm:max-w-[410px] md:max-w-[300px] lg:max-w-[380px] xl:max-w-[405px] bg-black hover:bg-black focus:outline-none focus:ring-1 focus:ring-black transition-all text-white lg:mr-1 xl:mr-0 py-3 rounded-full mt-4 font-light">Add to Cart</button>
            </div>
          </div>
          {/* <p>{data.description}</p> */}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ProductDetailPage;
