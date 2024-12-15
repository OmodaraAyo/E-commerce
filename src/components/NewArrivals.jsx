import React from 'react'

import Card from '../reusables/Card';
import { useGetProductsQuery } from '../service/shopApi';


const NewArrivals = (props) => {
    const {data, isLoading, isError} = useGetProductsQuery()
    console.log(data)

    if(isLoading){
      return <div>Loading...</div>
    }
    if(isError){
      return <div>Error loading products</div>
    }
  const handleHorizontalScroll = (e)=>{
  e.preventDefault();
  e.stopPropagation();
  e.currentTarget.scrollLeft += e.deltaY;
}

  return (
    <div className='flex flex-col justify-center items-center container mx-auto p-14 md:px-0 lg:px30'>
      <h1 className='text-4xl sm:text-5xl font-extrabold mb-10'>NEW ARRIVALS</h1>
      {data && data.products?(<Card data={data.products}/>):(<div> No product available</div>) }
    </div>
  )
}

export default NewArrivals
