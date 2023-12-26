
interface ReviewsCardProps {
  name: string;
  date: string;
  rating: number;
  review: string;
  star: string;
}

const ReviewsCard:React.FC<ReviewsCardProps> = ({
  name,
  date,
  rating,
  review,
  star
}) => {
  return ( 
    //reviews card
    <div className="w-full flex flex-col gap-2">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <div className="flex flex-col">
            <p className="text-sm text-slate-900 font-semibold">
              {name}
            </p>
            <p className="text-xs text-slate-600">
              {date}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm text-slate-600">
            {rating} {star}
          </p>
          <p className="text-xs text-slate-600">
            {date}
          </p>
        </div>
      </div>
      <p className="text-sm text-slate-600">
        {review}
      </p>
    </div>
   );
}
 
export default ReviewsCard;