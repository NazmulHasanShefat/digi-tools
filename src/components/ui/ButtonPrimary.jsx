// import React, { Children } from 'react';

const ButtonPrimary = ({ children, type = "default", className, onclickfn }) => {
  if (type === "border") {
    return (
      <button onClick={()=>{onclickfn()}} className={`bg-linear-to-r p-0.5 rounded-3xl cursor-pointer mx-2 from-indigo-600 to-purple-500 ${className}`}>
        <div className="py-2 px-4 bg-white rounded-3xl">
          <div className="bg-linear-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent rounded-3xl hover:px-2 transition-[padding] duration-300">
            {children}
          </div>
        </div>
      </button>
    );
  } else {
    return (
      <button
        onClick={()=>{onclickfn()}}
        className={`${type === "white" ? "bg-white text-black": "bg-linear-to-r from-indigo-600 to-purple-500 text-white"} hover:px-5 transition-[padding] duration-300 font-semibold px-4 py-2 rounded-3xl mx-2 cursor-pointer ${className}`}
      >
        {children}
      </button>
    );
  }
};

export default ButtonPrimary;
