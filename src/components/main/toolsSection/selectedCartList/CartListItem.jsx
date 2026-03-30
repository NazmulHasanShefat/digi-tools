import React from "react";

const CartListItem = ({ item }) => {

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
      <button className="text-pink-600 cursor-pointer">remove</button>
    </li>
  );
};

export default CartListItem;
