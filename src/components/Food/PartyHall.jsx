import React from "react";
import { partyhalls } from "../../data/foodData";

const PartyHall = () => {
  console.log(partyhalls);

  const handleBook = () => {
    alert("Booking Confirm");
  };
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className=" text-orange-600 font-bold text-4xl text-center">
        <u>Enjoy Night-Party</u>
      </h1>
      {/* Hall */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-6">
        {partyhalls.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-lg h-full  justify-between items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-60 sm:h-80 object-cover rounded-t-lg"
            />
            <h2 className="font-bold text-xl items-center cursor-pointer">
              {item.name}
            </h2>
            <div className="pt-2 sm:pt-8 ">
              <a href="/" className="text-blue-600 ">
                View more
              </a>
              <a
                href="/"
                className="text-blue-600 pl-4 sm:pl-16 lg:ml-64 "
                onClick={handleBook}
              >
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartyHall;
