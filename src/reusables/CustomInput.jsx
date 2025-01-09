import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useGetProductByNameQuery } from "../service/utilsApi";
import ratingStars from "./ratingStar";

const CustomInput = ({ isSearchDisabled }) => {
  const navigate = useNavigate();
  const [searchedProduct, setSearchedProduct] = useState("");
  const [isFullLoaded, setIsFullLoaded] = useState(false);
  const [showData, setShowData] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const {
    data: matchedProduct,
    isLoading,
    isError,
  } = useGetProductByNameQuery(searchedProduct);

  useEffect(() => {
    if (!searchedProduct.trim()) {
      setShowData(false);
    } else {
      setShowData(true);
    }
  }, [searchedProduct]);

  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    if (value.length <= 40) {
      setSearchedProduct(value);
    }
  };

  const handleInputClick = () => {
    setIsModelOpen(true);
  };

  const closeModel = () => {
    setIsModelOpen(false);
    setSearchedProduct("");
  };
  const navigateToContactDetailsPage = (productId) => {
    navigate(`/product/${productId}`);
  };

  if (isLoading) {
    return <div>Search...</div>;
  }
  if (isError) {
    return <div>Search...</div>;
  }

  return (
    <div className="w-full flex flex-col mt-auto relative">
      <input
        type="text"
        name="searchBox"
        placeholder="Search for product..."
        onInput={handleSearchInputChange}
        onClick={handleInputClick}
        className="container px-2 bg-transparent placeholder:text-gray-400 outline-none mb-10 mt-[0.20rem]"
        value={searchedProduct}
        disabled={isSearchDisabled}
      />
      {isModelOpen && (
        <div className="search-container fixed inset-0 bg-white z-50 flex flex-col overflow-auto">
          <div className="search-Input-container px-4 py-2 flex justify-between items-center">
            <input
              type="text"
              name="searchBox"
              placeholder="Search for product..."
              onInput={handleSearchInputChange}
              className="px-4 py-1 bg-transparent border border-black  outline-none placeholder:text-gray-400 w-full mt-[0.25rem] mb-4 rounded-full"
              value={searchedProduct}
            />
            <button onClick={closeModel} className="text-[#1b69df] tracking-wide text-lg font-semibold px-3 py-1 -mt-3 pb-2 outline-none">Cancel</button>
          </div>

          <div className="px-4 py-2">
                {showData && matchedProduct?.products?.length > 0? (
                    <div className="topMatchedProductsContainer">
                        <h1 className="flex justify-start mb-7 -mt-2 text-black shadow-black border-b-2 border-black text-lg pb-2 font-semibold">Top Matched Product{matchedProduct?.products?.length > 1? 's': ''}...</h1>
                       <div className="product-Container grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                       {matchedProduct.products.map((product) => (
                            <div key={product.id || Math.random()} className="container cursor-pointer px-3 py-3 bg-white shadow-lg rounded-2xl">
                                <div className="flex flex-col font-light justify-start items-center mb-5 gap-2">
                                    <div onClick={() => navigateToContactDetailsPage(product.id)} className="w-full h-full bg-transparent rounded-2xl py-4 flex justify-center items-center bg-[#f2f0f1] overflow-hidden shadow-lg">
                                        {product.images && product.images.length > 0? (
                                            <img src={product.images[0]} alt={product.title}  className="w-64 h-64 object-cover rounded-2xl"/>
                                        ):''}
                                    </div>
                                    <div className="flex flex-col gap-1 text-left font-medium text-sm mb-2 justify-start items-start px-2">
                                        <h1 className="h-16 overflow-hidden text-sm">{product.description}</h1>
                                        <h2 className="h-7 text-lg font-sans font-bold">${product.price}</h2>
                                        <div className="flex items-center text-base sm:text-xl h-6">{ratingStars(product.rating)}</div>
                                    </div>
                                    <button onClick={() => navigateToContactDetailsPage(product.id)} className="w-full bg-[#000000] text-[#FFFFFF] max-w-60 py-2 text-lg font-sans font-semibold rounded-md shadow-black shadow-sm">View more Details</button>
                                </div>
                            </div>
                        ))}
                       </div>
                    </div>
                ) : (
                    <div className="text-gray-400">No results found for "{searchedProduct}"</div>
                )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomInput;