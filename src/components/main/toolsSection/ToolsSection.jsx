import React, { Suspense, useContext, useState } from "react";
import ButtonPrimary from "../../ui/ButtonPrimary";
import ToolsCards from "./ToolsCards";
import SelectedCartList from "./selectedCartList/SelectedCartList";
import { UserContext } from "../../../context/UserContext";

const getProducts = async () => {
  try {
    const res = await fetch("/ProductsData.json");
    return res.json();
  } catch (error) {
    console.log(error.message);
  }
};
const Product_data = getProducts();

const ToolsSection = ({ className }) => {
  const [currentTab, setCurrentTab] = useState("products");
  const { selectedProduct } = useContext(UserContext);

  return (
    <section className={`tools-section mt-30 ${className}`}>
      <h1 className="text-[48px] font-bold text-center my-5">
        Premium Digital Tools
      </h1>
      <p className="text-[16px] text-center">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>
      <div className="w-full my-5 flex justify-center items-center gap-3">
        <ButtonPrimary
          type={currentTab === "products" ? "default" : "white"}
          onclickfn={() => {
            setCurrentTab("products");
          }}
        >
          Products
        </ButtonPrimary>
        <ButtonPrimary
          type={currentTab === "cart" ? "default" : "white"}
          onclickfn={() => {
            setCurrentTab("cart");
          }}
        >
          cart ({selectedProduct.length})
        </ButtonPrimary>
      </div>

      {currentTab === "products" ? (
        <div className="productCards grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center gap-10">
          <Suspense fallback={<h1>loding...</h1>}>
            <ToolsCards Product_data={Product_data} />
          </Suspense>
        </div>
      ) : (
        <SelectedCartList />
      )}
    </section>
  );
};

export default ToolsSection;
