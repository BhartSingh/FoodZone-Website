import React from "react";
import { categories } from "../../data/foodData";

const Category = () => {
  console.log(categories);

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className=" text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* Category */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 shadow-xl rounded-lg p=-4 flex justify-between items-center"
          >
            <h2 className="font-bold text-xl items-center cursor-pointer">
              {item.name}
            </h2>
            <img
              src={item.image}
              alt={item.name}
              className="w-20 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
