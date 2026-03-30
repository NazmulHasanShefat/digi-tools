import React from "react";
import UserIcon from "../../ui/UserIcon";
import PercelIcon from "../../ui/PercelIcon";
import RoketIcon from "../../ui/RoketIcon";

const GetStartSection = ({ className }) => {
  return (
    <section className={`getStart_steps ${className}`}>
      <h1 className="text-[48px] font-extrabold text-center mt-30">
        Get Started in 3 Steps
      </h1>
      <p className="text-gray-400 text-center mb-10">
        Start using premium digital tools in minutes, not hours.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-20 py-5">
       
        <div className="steps_card p-5 shadow-md shadow-gray-300 rounded-lg hover:translate-y-2.5 transition-[translate] duration-200">
          <div className="stepCount default-bg w-max h-max px-2 py-1 float-end text-white rounded-full">
            01
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="rounded-full w-max h-max p-2 bg-purple-400/20">
              <UserIcon />
            </div>
          </div>
          <h1 className="text-[24px] font-bold text-center">Create Account</h1>
          <p className="text-center text-gray-400">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
       
        <div className="steps_card p-5 shadow-md shadow-gray-300 rounded-lg hover:translate-y-2.5 transition-[translate] duration-200">
          <div className="stepCount default-bg w-max h-max px-2 py-1 float-end text-white rounded-full">
            01
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="rounded-full w-max h-max p-2 bg-purple-400/20">
              <PercelIcon />
            </div>
          </div>
          <h1 className="text-[24px] font-bold text-center">Choose Products</h1>
          <p className="text-center text-gray-400">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>
       
        <div className="steps_card p-5 shadow-md shadow-gray-300 rounded-lg hover:translate-y-2.5 transition-[translate] duration-200">
          <div className="stepCount default-bg w-max h-max px-2 py-1 float-end text-white rounded-full">
            01
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="rounded-full w-max h-max p-2 bg-purple-400/20">
             <RoketIcon />
            </div>
          </div>
          <h1 className="text-[24px] font-bold text-center">Start Creating</h1>
          <p className="text-center text-gray-400">
            Download and start using your premium tools immediately.
          </p>
        </div>
   
       
      </div>
    </section>
  );
};

export default GetStartSection;
