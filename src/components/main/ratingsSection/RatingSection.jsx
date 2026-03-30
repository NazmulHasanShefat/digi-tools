import React from "react";
const rating_data = [
  {
    ratingName: "active users",
    ratingPoint: 50000,
  },
  {
    ratingName: "Premium Tools",
    ratingPoint: 500,
  },
  {
    ratingName: "Rating",
    ratingPoint: 4.9,
  },
];
const RatingSection = ({ className }) => {
  return (
    <section
      className={`rating_section grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3 text-white bg-linear-to-r from-indigo-600 to-purple-500 ${className}`}
    >
      {rating_data.map((item, index) => {
        return (
          <div key={index} className="text-center border-r-2 border-gray-400">
            <div className="Rating_number text-[60px] font-bold">
              {item.ratingPoint >= 1000 ? item.ratingPoint / 1000 + "k" : item.ratingPoint}
            </div>
            <p className="Rating_name text-gray-200">{item.ratingName}</p>
          </div>
        );
      })}
      {/* <div className='text-center'>
             <div className='Rating_number text-[60px] font-bold'>50k</div>
             <p className='Rating_name text-gray-200'>Premium Tools</p>
           </div>
           <div className='text-center'>
             <div className='Rating_number text-[60px] font-bold'>50k</div>
             <p className='Rating_name text-gray-200'>Rating</p>
           </div> */}
    </section>
  );
};

export default RatingSection;
