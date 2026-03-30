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
      className={`rating_section text-white bg-linear-to-r from-indigo-600 to-purple-500 ${className}`}
    ><div className="max-w-300 mx-auto grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3">

      {rating_data.map((item, index) => {
        return (
          <div key={index} className={`text-center ${index !== rating_data.length - 1 ? "border-r-2": ""} border-gray-400`}>
            <div className="Rating_number text-[60px] font-bold">
              {item.ratingPoint >= 1000 ? item.ratingPoint / 1000 + "k" : item.ratingPoint}
            </div>
            <p className="Rating_name text-gray-200">{item.ratingName}</p>
          </div>
        );
      })}
    </div>
    </section>
  );
};

export default RatingSection;
