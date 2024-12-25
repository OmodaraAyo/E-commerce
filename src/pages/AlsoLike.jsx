import React from 'react'
import Card from '../reusables/Card';
import { useNavigate } from 'react-router';
import { useGetMenProductByCaQuery } from '../service/utilsApi';


const AlsoLike = () => {
    const {data, isLoading, isError} = useGetMenProductByCaQuery()
    const navigate = useNavigate()

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
    window.scrollTo(0, 0);
    navigate(`/product/${productId}`);
  }

  return (
    <div className='flex flex-col justify-center items-center container mx-auto p-8 md:p-12 md:px-0 lg:px30'>
      {data && data.products?(<Card data={getProductsFromRange(0,5)} imageField="thumbnail" onCardClick={navigateToProductDetailPage}/>):(<div> No product available</div>) }
    </div>
  )
}

export default AlsoLike
