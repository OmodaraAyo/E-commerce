import React from "react";
import ratingStars from "../../reusables/ratingStar";
import { MdArrowDropDown } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaCheck, FaFilter } from "react-icons/fa";
import { useGetProductByIdQuery } from "../../service/shopApi";
import { useParams } from "react-router";

const RatingAndReviews = () => {
  const { productId } = useParams();
  const { data, isLoading, isError } = useGetProductByIdQuery(productId);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error loading page...</div>;
  }

  const formatReviewerDate = (reviewer) => {
    const formattedDate = new Date(reviewer).toISOString().split("T")[0];
    return formattedDate;
  };
  return (
    <div className="container grid grid-cols-1 justify-self-center">
      <div className="reviews-ko container border-t-2 px-5 sm:px-2 py-5 flex flex-row justify-between mb-3">
        <h1 className="font-bold font-sans text-2xl sm:text-3xl sm:mt-2">
          All Reviews{" "}
          <span className="text-[#00000099] font-light text-[1.14rem] sm:text-[1.27rem] mt-2">
            ({data.reviews.length})
          </span>
        </h1>
        <div className="buttons-container flex flex-row justify-between gap-2">
          <button className="filter-Box w-9 h-9 sm:w-14 sm:h-14 flex justify-center items-center rounded-full bg-[#F0F0F0]">
            <FaFilter className="text-sm" />
          </button>
          <button className="time-lapse hidden md:flex md:flex-row md:justify-between md:items-center md:bg-[#F0F0F0] md:rounded-full md:px-5 md:py-4 md:gap-3 font-sans">
            <p className="text-base">Latest</p>
            <MdArrowDropDown className="text-2xl" />
          </button>
          <button className="write-A-Review bg-black rounded-full px-3 sm:py-4 text-white font-sans text-base">
            <span>Write a Review</span>
          </button>
        </div>
      </div>
      <div className="AllComments-container grid grid-cols-1 md:grid-cols-2 gap-5 px-5 sm:px-1">
        {data.reviews.map((reviewer, index) => (
          <div
            key={index}
            className="comment-container border border-[#0000001A] rounded-3xl px-9 py-9"
          >
            <div className="inner-container flex flex-col gap-1 sm:gap-3">
              <div className="rating-more-container flex items-center justify-between">
                <h1 className="flex flex-row gap-2 sm:text-2xl">
                  {ratingStars(reviewer.rating)}
                </h1>
                <button>
                  <FiMoreHorizontal className="text-lg sm:text-2xl text-[#00000066]" />
                </button>
              </div>
              <div className="flex justify-start items-center gap-1 sm:gap-2">
                <h2 className="font-extrabold text-lg sm:text-2xl">
                  {reviewer.reviewerName}.
                </h2>
                <div className="bg-[#01AB31] rounded-full w-4 h-4 sm:w-6 sm:h-6 text-white flex justify-center items-center text-xs sm:text-sm mt-1">
                  <FaCheck />
                </div>
              </div>
              <h2 className="font-light text-[#00000099] text-sm sm:text-lg md:text-xl text-left">
                "{reviewer.comment}"
              </h2>
              <h2 className="text-[#00000099] font-semibold sm:text-lg">
                Posted on {formatReviewerDate(reviewer.date)}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <button className="border bg-transparent w-full flex max-w-48 justify-self-center mt-7 rounded-full px-7 py-3 mb-14">Load More Reviews</button>
    </div>
  );
};

export default RatingAndReviews;
