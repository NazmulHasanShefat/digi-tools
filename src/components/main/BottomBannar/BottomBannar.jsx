import React from "react";
import ButtonPrimary from "../../ui/ButtonPrimary";

const BottomBannar = () => {
  return (
    <section className="bottom_banner w-full default-bg py-30 text-white">
      <h1 className="text-[48px] font-extrabold text-center">
        Ready to Transform Your Workflow?
      </h1>
      <p className="text-center text-gray-200">
        Join thousands of professionals who are already using Digitools to work
        smarter. Start your free trial today.
      </p>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-2 py-5">
        <ButtonPrimary type="white">Explore Products</ButtonPrimary>
        <button className="py-2 px-4 border-2 border-white text-white rounded-3xl cursor-pointer">
          View Pricing
        </button>
      </div>
      <p className="text-gray-200 text-center">
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </section>
  );
};

export default BottomBannar;
