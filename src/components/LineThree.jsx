import React from 'react';

const LineThree = () => {
  return (
    <div className='relative flex flex-col md:flex-row justify-center items-start w-full bg-[#F2F0F1] py-36 gap-1 mx-auto px-7 md:pl-9 xl:px-40'>
      <div className='flex flex-col justify-center items-start'>
        <h1 className='text-6xl sm:text-7xl md:text-[75px] max-w-auto grid grid-cols-1 lg:grid-cols-2 mx:auto font-extrabold mt-[-80px]'>
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className='my-3 sm:max-w-sm md:max-w-screen-sm lg:max-w-lg grid grid-cols-1'>
          Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>
        <button className="w-full sm:w-auto md:block bg-black px-8 py-4 rounded-full text-white">Shop Now</button>
        <div className='mt-5 text-gray-600'>
          <div className='grid grid-cols-2 gap-8 md:gap-10 w-full 2xl:pr-28 sm:grid-cols-3'>
            <div className='border-r-2 border-gray-300'>
              <p className='text-3xl font-medium text-black'>200+</p>
              <p>International Brands</p>
            </div>
            <div>
              <p className='text-3xl font-medium text-black'>2000+</p>
              <p>High-Quality Products</p>
            </div>
            <div className='sm:border-l-2 border-gray-300 sm:text-center'>
              <p className='text-3xl font-medium text-black'>30,000+</p>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
      <img 
        src="/images/people3.svg" 
        alt="" 
        className='lg:absolute top-3/4 p-auto mt-8 lg:top-8 md:right-56 h-auto object-cover z-0 lg:w-1/3 w-full sm:w-1/2 md:w-96 max-w-lg' 
      />
    </div>
  );
};

export default LineThree;
{/* <div>
<img src="/images/people.svg" alt="" className='absolute w-full z-0 '/>
<div className='relative flex flex-col justify-center items-start w-full py-36 gap-1 mx-auto px-7 md:pl-9 xl:px-40'>
<h1 className='text-6xl sm:text-7xl md:text-[75px] max-w-auto grid grid-cols-1 lg:grid-cols-2 mx:auto font-extrabold mt-[-80px]'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
<p className='my-3 sm:max-w-sm md:max-w-screen-sm lg:max-w-lg grid grid-cols-1'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
<button className="w-full sm:w-auto md:block bg-black px-8 py-4 rounded-full text-white">Shop Now</button>
<div className='mt-5 text-gray-600'>
<div className='grid grid-cols-2 gap-8 md:gap-10 w-full 2xl:pr-28 sm:grid-cols-3'>
  <div className='border-r-2 border-gray-300 h-'>
    <p className=' text-3xl font-medium text-black'>200+</p>
    <p>International Brands</p>
  </div>
  <div className=''>
    <p className='text-3xl font-medium text-black'>2000+</p>
    <p>High-Quality Products</p>
  </div>
  <div className='sm:border-l-2 border-gray-300 h-auto sm:pl-6 sm:text-center'>
    <p className='text-3xl font-medium text-black'>30,000+</p>
    <p>Happy Customers</p>
  </div>
</div>
</div>
</div>
</div> */}