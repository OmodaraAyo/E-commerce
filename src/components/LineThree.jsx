import { useEffect, useState } from "react";

const LineThree = () => {
  const [showImage, setShowImage] = useState(false)
  const [showFlexImage, setShowFlexImage] = useState(false)

  useEffect(()=>{
    const checkScreenSize = ()=>{
      if(window.innerWidth >= 768){
        setShowImage(true)
      }else{
        setShowImage(false)
      }
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    }

  }, [])

  useEffect(()=>{
    const checkScreenSize = ()=>{
      if(window.innerWidth >= 768){
        setShowFlexImage(false)
      }else{
        setShowFlexImage(true)
      }
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    }
    
  },[])
  return (
    <div>
      <div className=' flex flex-col md:flex-row justify-center items-start py-0 w-full bg-[#F2F0F1] gap-1 px-7 md:pl-9 xl:px-40 overflow-hidden'>
        <div className='flex flex-col justify-center items-start'>
          <h1 className='text-6xl sm:text-7xl md:text-[75px] max-w-full font-semibold mt-20'>
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className='my-3 sm:max-w-sm md:max-w-screen-sm lg:max-w-lg grid grid-cols-1'>
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="w-full sm:w-auto md:block bg-black px-8 py-4 rounded-full text-white">Shop Now</button>
          <div className='mt-5 text-gray-600 md:pb-5 lg:pb-16'>
            <div className='grid grid-cols-2 gap-8 md:gap-10 w-full 2xl:pr-28 sm:grid-cols-3'>
              <div className='border-r-2 border-gray-300'>
                <p className='text-3xl font-medium text-black'>200+</p>
                <p>International Brands</p>
              </div>
              <div>
                <p className='text-3xl font-medium text-black'>2,000+</p>
                <p>High-Quality Products</p>
              </div>
              <div className='sm:border-l-2 border-gray-300 sm:pl-3'>
                <p className='text-3xl font-medium text-black'>30,000+</p>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute mt-[860px] sm:mt-[970px] md:mt-[440px] md:ml-60 h-0 top-0 z-30 lg:ml-28'>
        <img src="/images/sun_star.svg" alt="" className=''/>
        </div>
        <div className='flex sm:mt-12 md:w-screen '>
          <div className='w-full h-full relative '>
            {showFlexImage && <img src="/images/people3.svg" alt="" className='w-full h-2/3 lg:w-full lg:h-2/3 md:h-2/3'/>}
            {showImage && <div className="h-full mt-[-40px]">
              <img src="/images/model_image_full.jpg" alt="" className='w-auto absolute  left-0 right-0 md:h-[900px]'/>
              </div>}
          </div>
          <div className='absolute right-0 pr-5 md:pr-8 md:pt-8 lg:pr-20 xl:pr-48 '>
            <img src="/images/big_star.svg" alt="" className='md:w-20'/>
          </div>
        </div>
      </div>
      <div className='flex justify-center py-3 sm:py-8 bg-black '>
        <div className="grid grid-cols-3 gap-8 sm:gap-9 md:grid-cols-5 justify-items-center py-3">
        <div>
              <img src="/images/Versace.svg" alt="versace" />
            </div>
             <div>
              <img src="/images/zara.svg" alt="versace" />
            </div>
             <div>
              <img src="/images/gucci.svg" alt="versace" />
            </div>
             <div className="">
              <img src="/images/prada.svg" alt="versace" />
            </div>
             <div className="">
              <img src="/images/klein.svg" alt="versace" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default LineThree;
