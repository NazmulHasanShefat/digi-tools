import React, { use } from 'react';
import PricingCard from './PricingCard';

const PricingCardsSection = ({ pricingPlans }) => {
    const planData = use(pricingPlans);
    const allPricingData = planData.pricing_plans;
    console.log(allPricingData)
    return (
        <>
          {allPricingData.map((pricing, index)=> <PricingCard pricing={pricing} key={index} index={index}/>)}  
        </>
    );
};

export default PricingCardsSection;