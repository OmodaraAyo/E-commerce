import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Card = (props) => {
    const {data, imageField, onCardClick} = props;
    // console.log("from card: ",data)
    
  return (
    <div className='overflow-hidden grid grid-cols-1 cursor-pointer'>
      <div className='overflow-x-auto scroll-smooth' style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
        <div className='flex gap-8 transition-transform duration-500 ease-in-out'>
         {data.map((product)=>(
          <div onClick={()=> onCardClick(product.id)} key={product.id} className='flex-shrink-0 sm:w-[295px] h-full bg-[#F2F0F1] rounded-2xl'>
            <div>
            <img src={product[imageField]} alt={product.title} className='w-[198.67px] md:w-[296px] h-auto md:h-[298px] justify-self-center'/>
            </div>
          </div>
         ))}
        </div>
        
        <div className='flex gap-8 transition-transform duration-500 ease-in-out items-center'>
        {data.map((product)=>(
          <div key={product.id} className='flex-shrink-0 w-[200px] sm:w-[295px] bg-none'>
            <div className='inline-block  md:w-4/5'>
            <h2 className='font-bold text-black '>{product.title}</h2>
            <div className='flex items-center'>
              {Array.from({length: 5}, (_, index) =>{
                if(index < Math.floor(product.rating)){
                  return <FaStar key={index} className='text-yellow-300'/>
                }else if(index < product.rating){
                  return <div key={index} className='flex items-center gap-3'><FaStarHalfAlt className='text-yellow-300'/> <div className='font-light'>{product.rating}/<span className='font-light text-gray-500'>5</span></div></div>
                }
              })}
              </div>
            <div className='text-lg font-bold'>${product.price}</div>
            </div>
          </div>
         ))}
        </div>
        </div>
    </div>
  )
}

export default Card


// import React from "react";

// const Card = (props) => {
//   const { data, isLoading, isError } = props;
//   console.log("from card: ", data);

//   return (
//     <div className="overflow-hidden">
//       <div className="flex gap-8 transition-transform duration-500 ease-in-out">
//         {data.map((product) => (
//           <div key={product.id}>
//             {/* <img src={product.thumbnail} alt={product.title} />
//             <h2>{product.title}</h2>
//             <div>{product.rating}</div>
//             <div>{product.price}</div> */}
//             <img src={product.image} alt={product.title} />
//             <div>
//               Rating: {product.rating?.rate} ({product.rating?.count} reviews)
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Card;
