import React, { useContext, useState } from "react";
import ButtonPrimary from "../../ui/ButtonPrimary";
import { UserContext } from "../../../context/UserContext";
import { toast } from "react-toastify";

const ToolCard = ({ tool }) => {
  const { selectedProduct, setSelectedProduct, setTotal } =
    useContext(UserContext);
  const [selected, setSelected] = useState(false);
  const addtoCart = () => {
    const isExist = selectedProduct.find(
      (selectedItem) => selectedItem.id === tool.id,
    );
    if (!isExist) {
      const newProduct = [...selectedProduct, tool];
      setSelectedProduct(newProduct);
      setTotal((total) => total + tool.price);
      toast.success("Product added to cart");
    } else {
      toast.error("same product alrady exist");
      return;
    }
  };
  return (
    <div className="card shadow-sm hover:translate-y-1.5 transition-[translate] duration-300">
      <div className="card-body">
        <div className="w-full">
          <span className="badge badge-xs badge-warning bg-amber-400/30 float-end">
            {tool.tag}
          </span>
        </div>
        <div className="flex flex-col items-left justify-between">
          <img
            src={tool?.icon}
            alt={tool.name}
            className="w-[30px] h-[30px] my-2"
          />
          <h2 className="text-3xl font-bold">{tool.name}</h2>
          <div className="w-full my-3">{tool.description}</div>
          <span className="text-xl">
            ${tool.price}{" "}
            {tool.period === "yearly"
              ? "/yr"
              : tool.period === "monthly"
                ? "/mo"
                : "one-time"}
          </span>
        </div>
        <ul className="mt-3 flex flex-col gap-2 text-xs">
          {tool.features.map((feature, index) => {
            return (
              <li key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>
        <div className="mt-6">
          <ButtonPrimary
            type={selected ? "border" : "default"}
            className={`w-full`}
            onclickfn={() => {
              addtoCart();
              setSelected(true);
            }}
            isdisabled={selected ? true : false}
          >
            {selected ? "added to cart" : "Buy now"}
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
