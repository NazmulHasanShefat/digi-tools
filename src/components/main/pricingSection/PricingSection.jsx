import React, { Suspense } from "react";
import PricingCardsSection from "./PricingCardsSection";

const getPricingData = async()=>{
    try {
        const res = await fetch("/pricingPlan.json");
        return res.json();
    } catch (error) {
        console.log(error.message);
    }
}
const pricingPlans = getPricingData();

const PricingSection = ({ className }) => {
  return (
    <section className={`${className} py-30`}>
      <h1 className="text-[48px] font-bold text-center">
       Simple, Transparent Pricing
      </h1>
      <p className="text-center text-gray-400">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>

      <div className="pricing_cards grid grid-cols-1 pt-10 lg:grid-cols-3 justify-self-center items-center gap-20">
        <Suspense fallback={<h1>loding...</h1>}>
          <PricingCardsSection pricingPlans={pricingPlans} />
        </Suspense>
      </div>
    </section>
  );
};

export default PricingSection;
