import React, { useRef } from 'react'
import Card from '../reusables/Card';
import { useNavigate } from 'react-router';
import { useGetMenProductByCaQuery } from '../service/utilsApi';


const NewArrivals = () => {
    const {data, isLoading, isError} = useGetMenProductByCaQuery()
    const navigate = useNavigate()

    const navigateToViewAllPage = ()=> {
      navigate("/home/all-product")
    }

    if(isLoading){
      return <div className='font-bold'>Loading...</div>
    }
    if(isError){
      return <div className='font-bold text-red-500'>Error loading products</div>
    }

  const getProductsFromRange = (from,to)=>{
    return data.products.slice(from,to)
  }

  const navigateToProductDetailPage = (productId) => {
    navigate(`/product/${productId}`);
  }

  return (
    <div id="new-arrivals" className='flex flex-col justify-center items-center container mx-auto p-8 md:p-12 md:px-0 lg:px30'>
      <h1 className='text-4xl sm:text-5xl font-extrabold mb-10'>NEW ARRIVALS</h1>
      {data && data.products?(<Card data={getProductsFromRange(0,5)} imageField="thumbnail" onCardClick={navigateToProductDetailPage}/>):(<div> No product available</div>) }
      <button onClick = {navigateToViewAllPage} className="w-full sm:w-auto md:block bg-transparent border-2 px-16 py-3 lg:px-20 rounded-full text-black relative mt-10">View All</button>
    </div>
  )
}

export default NewArrivals
