import React from 'react'
import { useGetProductsQuery } from '../service/shopApi'
import Card from '../reusables/Card'
import { useLocation, useNavigate } from 'react-router'

const ViewAll = () => {
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
    <div className='flex flex-col justify-center items-start container mx-auto p-14 md:px-0 lg:px30'>
      <h1 className='text-4xl sm:text-5xl font-extrabold mb-10 t font-sans'>All Products</h1>
      {data && data.products?(<div className='mb-12'><Card data={getProductsFromRange(0,5)} imageField="thumbnail"/></div>):(<div> No product available</div>) }
      {data && data.products?(<div className='mb-12'><Card data={getProductsFromRange(5,10)} imageField="thumbnail"/></div>):(<div> No product available</div>) }
      {data && data.products?(<div className='mb-12'><Card data={getProductsFromRange(10,15)} imageField="thumbnail"/></div>):(<div> No product available</div>) }
      {data && data.products?(<div className='mb-12'><Card data={getProductsFromRange(15,20)} imageField="thumbnail"/></div>):(<div> No product available</div>) }
      {data && data.products?(<div className='mb-12'><Card data={getProductsFromRange(20,25)} imageField="thumbnail"/></div>):(<div> No product available</div>) }
      {data && data.products?(<div className='mb-12'><Card data={getProductsFromRange(25,30)} imageField="thumbnail"/></div>):(<div> No product available</div>) }
     
    </div>
  )
  }

export default ViewAll
