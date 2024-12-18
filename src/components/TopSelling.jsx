import React, { useEffect, useState } from 'react'
import { useGetProductsQuery } from '../service/shopApi'
import Card from '../reusables/Card'
import { useLocation, useNavigate } from 'react-router'

const TopSelling = () => {
  const {data, isLoading, isError} = useGetProductsQuery();
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToViewAllPage = ()=>{
    navigate("/home/all-product");
  }

  if(isLoading){
    return <div className='font-bold'></div>
  }
  if(isError){
    return <div className='font-bold text-red-500'></div>
  }

  const getProductsFromRange = (from,to) =>{
    return data.products.slice(from, to)
  }
return (
  <div className='flex flex-col justify-center items-center container mx-auto p-8 md:p-12md:px-0 lg:px30 border-t-2'>
    <h1 className='text-4xl sm:text-5xl font-extrabold mb-10'>TOP SELLING</h1>
    {data && data.products?(<Card data={getProductsFromRange(10,20)} imageField="thumbnail"/>):(<div> No product available</div>) }
    <button onClick = {navigateToViewAllPage} className="w-full sm:w-auto md:block bg-transparent border-2 px-16 py-3 lg:px-20 rounded-full text-black relative mt-10">View All</button>
  </div>
)
}


export default TopSelling
