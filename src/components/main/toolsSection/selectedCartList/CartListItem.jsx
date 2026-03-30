import React, { useContext } from "react";
import { UserContext } from "../../../../context/UserContext";

const CartListItem = ({ item }) => {
  const { selectedProduct, setSelectedProduct, total, setTotal } = useContext(UserContext);
  const handleRemove = ()=>{
    const filterdItems = selectedProduct.filter((Filterditem)=> Filterditem.id !== item.id);
    setSelectedProduct(filterdItems);
    const subTotal = total - item.price;
    setTotal(subTotal);
  }
  return (
    <li className="list-row">
      <div>
        <img
          className="size-10 rounded-box"
          src={item?.icon}
        />
      </div>
      <div>
        <div>{item.name}</div>
        <div className="text-xs uppercase font-semibold opacity-60">
          {`$${item.price}`}
        </div>
      </div>
      <button className="text-pink-600 cursor-pointer" onClick={handleRemove}>remove</button>
    </li>
  );
};

export default CartListItem;
