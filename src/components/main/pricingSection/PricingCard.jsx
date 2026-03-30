import React, { useState } from "react";
import FeatureList from "./FeatureList";
import ButtonPrimary from "../../ui/ButtonPrimary";
import FeatureListWhite from "./FeatureListWhite";

const PricingCard = ({ pricing, index }) => {
    const [pricingIsActive, _] = useState(1);
  return (
    <div className={`card hover:scale-105 transition-[scale] duration-200 shadow-sm ${pricingIsActive === index ? "default-bg text-white" : " bg-white text-black"}`}>
      <div className="card-body">
        <div className="flex justify-center">
          {pricing.name === "Pro" ? (
            <span className="badge badge-soft badge-warning bg-amber-100 relative -top-9 border-0">
              Most populer
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{pricing.name}</h2>
        </div>
        <p className="text-gray-300">{pricing.cta.label}</p>
        <div>
          {" "}
          <span className="text-[48px] font-bold">
            {pricing.price.currency} {pricing.price.amount}
          </span>{" "}
          <span className="text-[20px]">/{pricing.price.period}</span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
            {pricingIsActive === index ? 
            
             pricing.features.map((feature, index) => (
              <FeatureListWhite feature={feature} key={index} pricingIsActive={pricingIsActive} index={index} />
            )) :

             pricing.features.map((feature, index) => (
              <FeatureList feature={feature} key={index} pricingIsActive={pricingIsActive} index={index} />
            ))
            
            }
        </ul>
        <div className="mt-6">
          <ButtonPrimary type={pricingIsActive === index ? "white": "default"} className={`w-full`}>
            {pricing.name === "Starter"
              ? `${pricing.name} free`
              : pricing.name === "Pro"
                ? `Start ${pricing.name} Trial`
                : `Contact Sales`}
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
