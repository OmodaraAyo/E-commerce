import React, { useEffect, useState } from "react";
import { testimonialsData } from "../assets/asserts";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const[commentToShow, setCommentToShow] = useState(1);

  useEffect(()=>{
    
  })
  const ratingStars = (rating)=>{
    return Array.from({length: 5}, (_, index)=>{
        if(index < Math.floor(rating)){
            return <FaStar key={index} className="text-yellow-300"/>
        }else if (index < rating){
            return(
                <div key={index} className="flex items-center gap-3">
                    <FaStarHalfAlt className="text-yellow-300"/>
                    <div className="font-light">
                        {rating}/<span className="font-light text-gray-500">5</span>
                    </div>
                </div>
            )
        }
    })
  }
  return (
    <div className="container mx-auto w-full py-8 overflow-hidden">
      <div className="flex justify-between px-4 sm:px-2">
        <h1 className="font-extrabold text-4xl sm:text-5xl max-w-96 md:max-w-fit">
          OUR HAPPY CUSTOMERS
        </h1>
        <div className="flex gap-3">
          <button>
            <FaArrowLeft />
          </button>
          <button>
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="overflow-hidden px-3 mt-5">
        <div className="flex gap-4 transition-transform duration-500 ease-in-out overflow-x-auto scroll-smooth" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="`flex flex-shrink-0 items-center w-full sm:w-[340px] h-full`"
            >
              <div className="border rounded-xl w-full p-4 flex flex-col justify-center">
                <div className="flex flex-col p-2 h-full w-full">
                    <div className="flex items-center gap-2 mb-3">
                        {ratingStars(testimonial.rating)}
                    </div>
                    <div className="flex justify-start items-center gap-2">
                    <h1 className="font-bold text-lg">{testimonial.name}</h1>
                    <div className="bg-[#01AB31] rounded-full w-5 h-5 text-white flex justify-center items-center text-xs">
                    <FaCheck/>
                    </div>
                    </div>
                  <p className="font-light text-gray-500 flex-grow">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;