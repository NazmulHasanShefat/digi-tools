import React, { Suspense } from "react";
import ButtonPrimary from "../../ui/ButtonPrimary";
import ToolsCards from "./ToolsCards";

const getProducts = async () => {
  try {
    const res = await fetch("/ProductsData.json");
    return res.json();
  } catch (error) {
    console.log(error.message);
  }
};

const ToolsSection = ({ className }) => {
  const onclickfn = () => {
    alert("hello");
  };
  const Product_data = getProducts();
  return (
    <section className={`tools-section ${className}`}>
      <h1 className="text-[48px] font-bold text-center">
        Premium Digital Tools
      </h1>
      <p className="text-[16px] text-center">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>
      <ButtonPrimary type="default" onclickfn={onclickfn}>
        Products
      </ButtonPrimary>
      <ButtonPrimary type="white" onclickfn={onclickfn}>
        Products
      </ButtonPrimary>

      <div className="productCards lg:grid-cols-3 md:grid-cols-2">
        <Suspense fallback={<h1>loding...</h1>}>
          <ToolsCards Product_data={Product_data} />
        </Suspense>
      </div>
    </section>
  );
};

export default ToolsSection;
