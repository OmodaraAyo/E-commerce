import { MdStar, MdStarHalf } from "react-icons/md";

const ratingStars = (rating)=>{
    return Array.from({length: 5}, (_, index)=>{
        if(index < Math.floor(rating)){
            return <MdStar key={index} className="text-yellow-300"/>
        }else if (index < rating){
            return(
                <div key={index} className="flex items-center gap-3">
                    <MdStarHalf className="text-yellow-300"/>
                    <div className="font-light">
                        {rating}/<span className="font-light text-gray-500">5</span>
                    </div>
                </div>
            )
        }
    })
  }

  export default ratingStars;