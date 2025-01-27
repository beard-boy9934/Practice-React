import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log({ items });
  return (
    <div>
      {items.map((item) => (
        <div
          className="flex justify-between text-left p-2 m-2 border-gray-200 border-b-2 text-xl bg-gray-100"
          key={item.card.info.id}
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span> -₹ {item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</span>
            </div>
            <p className="text-xs pr-1">{item.card.info.description}</p>
          </div>
          <div className="w-1/12">
            <img src={CDN_URL + item.card.info.imageId} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
