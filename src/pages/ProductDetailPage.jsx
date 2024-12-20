import React from "react";
import RNavBar from "../reusables/RNavBar";
import { useParams } from "react-router";
import { useGetProductByIdQuery } from "../service/shopApi";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { data, isLoading, isError } = useGetProductByIdQuery(productId);
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error getting product</div>;
  }

  return (
    <div>
      <RNavBar />
      <div className="container mx-auto border-t-2 border-gray-200">
        <div className="flex flex-row gap-12 mt-5 px-5 sm:px-5 md:px-0">
          <div className="flex flex-col justify-self-center md:flex-row-reverse md:justify-self-start gap-5">
            <div className="flex flex-shrink-0 justify-center items-center w-auto h-auto bg-[#F2F0F1] rounded-2xl">
              <img src={data.thumbnail} alt={data.title} className="w-[400px]"/>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-1 gap-3 md:gap-3">
              <div className="flex-shrink-0 md:w-[152px] h-auto bg-[#F2F0F1] rounded-2xl">
                <img src={data.thumbnail} alt={data.title}/>
              </div>
              <div className="flex-shrink-0 md:w-[152px] h-auto bg-[#F2F0F1] rounded-2xl">
                <img src={data.thumbnail} alt={data.title} />
              </div>
              <div className="flex-shrink-0 md:w-[152px] h-auto bg-[#F2F0F1] rounded-2xl">
                <img src={data.thumbnail} alt={data.title} />
              </div>
            </div>
          </div>
          {/* <img src={data.thumbnail} alt={data.title} /> */}
          <div className="">
            <h1 className="font-extrabold text-[46px]">{data.title.toUpperCase()}</h1>
          </div>
          {/* <p>{data.description}</p> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
