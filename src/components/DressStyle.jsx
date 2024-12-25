import React from 'react'

const DressStyle = () => {
  return (
    <div className='flex flex-col justify-center items-center mx-auto p-14 container bg-[#F0F0F0] rounded-3xl overflow-hidden'>
            <h1 className='font-extrabold text-4xl sm:text-5xl text-black max-w-60 sm:max-w-80 xl:max-w-none text-center mb-10'>BROWSE BY DRESS STYLE</h1>
        <div>
            <div className='grid lg:grid-cols-2 gap-3 lg:gap-x-0 w-full xl:px-32'>
                <div className='bg-[#FFFFFF] rounded-2xl flex w-[400px] h-full lg:w-[350px] xl:w-[400px]'>
                    <h1 className='font-bold text-lg md:text-2xl flex px-7 absolute pt-4'>Causual</h1>
                    <img src="/images/casual.svg" alt="casual"  className='max-w-full w-[400px] h-[190px] rounded-2xl'/>
                </div>
                <div className='bg-[#FFFFFF] rounded-2xl flex w-[400px] h-full lg:w-[524px] lg:-ml-20 xl:-ml-7'>
                    <h1 className='font-bold text-lg md:text-2xl flex px-7 absolute pt-4'>Formal</h1>
                    <img src="/images/formal13.svg" alt="casual"  className='max-w-full lg:ml-16 w-[700px] h-[190px] rounded-2xl'/>
                </div>
                <div className='bg-[#FFFFFF] rounded-2xl flex  w-[400px] h-full lg:w-[524px]'>
                    <h1 className='font-bold text-lg md:text-2xl flex px-7 absolute pt-4'>Party</h1>
                    <img src="/images/party65.svg" alt="casual"  className='max-w-full lg:ml-32 w-[400px] h-[190px] rounded-2xl'/>
                </div>
                <div className='bg-[#FFFFFF] rounded-2xl flex w-[400px] h-full lg:w-[350px] xl:w-[400px] lg:ml-24 xl:ml'>
                    <h1 className='font-bold text-lg md:text-2xl flex px-7 absolute pt-4'>Gym</h1>
                    <img src="/images/gym14.svg" alt="casual"  className='max-w-full w-full h-[190px] rounded-2xl'/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default DressStyle