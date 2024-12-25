import React from 'react'
import { useGetProductsQuery } from '../service/shopApi'
import Card from '../reusables/Card'
import { useNavigate } from 'react-router'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useGetAllfragrancesQuery, useGetAllJewelleriesQuery, useGetAllWomenBagsQuery, useGetGlassesQuery, useGetMenProductByCaQuery, useGetMenShoesQuery, useGetMenWatchesQuery, useGetSportAccessoriesQuery, useGetWomenProductByCaQuery, useGetWomenShoesQuery, useGetWomenTopsQuery, useGetWomenWatchesQuery } from '../service/utilsApi'

const ViewAll = () => {
    const {data, isLoading, isError} = useGetProductsQuery();
    const {data: menShirts} = useGetMenProductByCaQuery();
    const {data: womenDressData} = useGetWomenProductByCaQuery();
    const {data: fragrances} = useGetAllfragrancesQuery();
    const {data: jewelleries} = useGetAllJewelleriesQuery();
    const {data: womenBags} = useGetAllWomenBagsQuery();
    const {data: menShoes} = useGetMenShoesQuery();
    const {data: womenShoes} = useGetWomenShoesQuery();
    const {data: menWatches} = useGetMenWatchesQuery();
    const {data: womenWatches} = useGetWomenWatchesQuery();
    const {data: glasses} = useGetGlassesQuery();
    const {data: tops} = useGetWomenTopsQuery();
    const {data: sportAccS} = useGetSportAccessoriesQuery()
    const navigate = useNavigate();

    console.log(menShoes)
    
    if(isLoading){
      return <div className='font-bold'></div>
    }
    if(isError){
      return <div className='font-bold text-red-500'></div>
    }
  
    const getProductsFromRange = (productsData, from,to) =>{
      const products= productsData?.products

      if(!products){
        return []
      }

      return products.slice(from, to)
    }

    const navigateToProductDetailPage = (productId) => {
      window.scrollTo(0,0);
      navigate(`/product/${productId}`);
    }

  return (
    <div>
      <NavBar/>
      <div className="navBar-Bt-Line w-full bg-black text-white ">
        <h1 className='container mx-auto px-7 text-center sm:px-0 text-lg sm:text-2xl font-semibold font-sans'>All Products</h1>
      </div>
      <div className='flex flex-col justify-center items-start container mx-auto p-6 md:p-8 md:px-0 lg:px-30 mb-12'>
          <h1 className='text-center text-3xl sm:text-4xl font-bold mb-6 font-sans'>Shirts & Dresses</h1>
          {menShirts && menShirts.products?(<div className='mb-12'><Card menShirts={getProductsFromRange(menShirts, 0,5)} imageField="thumbnail" onCardClick={navigateToProductDetailPage}/></div>):(<div> No product available</div>)}
          {womenDressData && womenDressData.products?(<div className='mb-12'><Card womenDressData={getProductsFromRange(womenDressData, 0,5)} imageField="thumbnail" onCardClick={navigateToProductDetailPage}/></div>):(<div> No product available</div>)}
          {tops && tops.products?(<div className='mb-12'><Card tops={getProductsFromRange(tops, 0,5)} imageField="thumbnail" onCardClick={navigateToProductDetailPage}/></div>):(<div> No product available</div>) }

          {/* fragrances && Bags*/}
          <h1 className='text-center text-3xl sm:text-4xl font-bold mb-6 font-sans'>Perfumes and Bags</h1>
          {fragrances && fragrances.products?(<div className='mb-12'><Card fragrances={getProductsFromRange(fragrances, 1,5)} imageField="thumbnail" onCardClick={navigateToProductDetailPage}/></div>):(<div> No product available</div>)}
          {womenBags && womenBags.products?(<div className='mb-12'><Card womenBags={getProductsFromRange(womenBags, 0,5)} imageField="thumbnail" onCardClick={navigateToProductDetailPage}/></div>):(<div> No product available</div>)}

          {/* FootWears */}
          <h1 className='text-center text-3xl sm:text-4xl font-bold mb-6 font-sans'>Sneakers & Heels</h1>
          {menShoes && menShoes.products?(<div className='mb-12'><Card menShoes={getProductsFromRange(menShoes, 0,5)} imageField="thumbnail" onCardClick={navigateToProductDetailPage}/></div>):(<div> No product available</div>)}
          {womenShoes && womenShoes.products?(<div className='mb-12'><Card womenShoes={getProductsFromRange(womenShoes, 0,5)} imageField="thumbnail" onCardClick={navigateToProductDetailPage}/></div>):(<div> No product available</div>)}

          {/* wrist-watches */}
          <h1 className='text-center text-3xl sm:text-4xl font-bold mb-6 font-sans'>Wrist-Watches</h1>
          {menWatches && menWatches.products?(<div className='mb-12'><Card menWatches={getProductsFromRange(menWatches, 0,5)} imageField="thumbnail" onCardClick={navigateToProductDetailPage}/></div>):(<div> No product available</div>)}
          {womenWatches && womenWatches.products?(<div className='mb-12'><Card womenWatches={getProductsFromRange(womenWatches, 0,5)} imageField="thumbnail" onCardClick={navigateToProductDetailPage}/></div>):(<div> No product available</div>)}

          {/* glasses */}
          <h1 className='text-center text-3xl sm:text-4xl font-bold mb-6 font-sans'>Glasses</h1>
          {glasses && glasses.products?(<div className='mb-12'><Card glasses={getProductsFromRange(glasses, 0,5)} imageField="thumbnail" onCardClick={navigateToProductDetailPage}/></div>):(<div> No product available</div>)}

          {/* sport-accessories */}
          <h1 className='text-center text-3xl sm:text-4xl font-bold mb-6 font-sans'>Sport-Accessories</h1>
          {sportAccS && sportAccS.products?(<div className='mb-12'><Card sportAccS={getProductsFromRange(sportAccS, 0,5)} imageField="thumbnail" onCardClick={navigateToProductDetailPage}/></div>):(<div> No product available</div>)}

          {/* jewelleries */}
           <h1 className='text-center text-3xl sm:text-4xl font-bold mb-6 font-sans'>Jewellries</h1>
          {jewelleries && jewelleries.products?(<div className='mb-12'><Card jewelleries={getProductsFromRange(jewelleries, 0,5)} imageField="thumbnail" onCardClick={navigateToProductDetailPage}/></div>):(<div> No product available</div>)}
      </div>
     <Footer/>
    </div>
  )
  }

export default ViewAll
