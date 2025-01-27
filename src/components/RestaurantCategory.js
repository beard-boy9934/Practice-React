import React, { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    if (showItems == false) {
      setShowItems(true);
    } else {
      setShowItems(false);
    }
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="cursor-pointer flex justify-between" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>▼</span>
        </div>
        {showItems === true ? <ItemList items={data.itemCards} /> : null}
      </div>
    </div>
  );
};

export default RestaurantCategory;
