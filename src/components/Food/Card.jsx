import React from "react";
import { data } from "../../data/foodData";

const cards = ({ handle }) => {
  // const { handle, ...others } = props;

  function handleOrder() {
    alert("Are you sure");
    setTimeout(() => {
      alert("order success");
    }, 2000);
  }
  // Hero-section
  return (
    <div>
      <div className="max-w-[1640px] mx-auto p-4">
        <div className="max-h-[700px] relative">
          <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40  flex-col justify-center">
            <h1 className="px-4 pt-24 sm:pt-80 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              The <span className="text-orange-500">Best</span>
            </h1>
            <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-orange-500"> Foods </span>Delivered
            </h1>
          </div>
          <img
            className="w-full max-h-[500px] "
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
            alt="/"
          />
        </div>
      </div>
      {/* Headline */}
      <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        <div className="rounded-xl relative">
          <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">Sun's Out,BOGO's Out</p>
            <p className="px-2">Through 8/26</p>
            <button
              className="border-white bg-white rounded-lg w-24 font-bold text-black mx-2 absolute bottom-4"
              onClick={handleOrder}
            >
              Order Now
            </button>
          </div>
          <img
            className=" max-h-[160px]  md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="/"
          />
        </div>
        <div className="rounded-xl relative">
          <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4"> New Restaurants</p>
            <p className="px-2">Added Daily</p>
            <button
              className="border-white bg-white rounded-lg w-24 font-bold text-black mx-2 absolute bottom-4"
              onClick={handleOrder}
            >
              Order Now
            </button>
          </div>
          <img
            className=" max-h-[160px]  md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1614105008563-8b0f984228c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGRpc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="/"
          />
        </div>
        <div className="rounded-xl relative">
          <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">
              We Deliver Desserts Too
            </p>
            <p className="px-2">Tasty Treats</p>
            <button
              className="border-white bg-white rounded-lg w-24 font-bold text-black mx-2 absolute bottom-4"
              onClick={handleOrder}
            >
              Order Now
            </button>
          </div>
          <img
            className=" max-h-[160px]  md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1663760888753-dded0a4e47e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGFzdHklMjB0cmVhdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="/"
          />
        </div>
      </div>

      <div className=" max-w-[1640px] m-auto px-4 ">
        <h1 className="text-orange-600 font-bold text-4xl text-center">
          Top Rated Menu Items
        </h1>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {data.map((item) => (
            <div
              key={item.id}
              item={item}
              className="border shadow-lg rounded-lg hover:scale-105 duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="block justify-between px-2 py-4">
                <div className="flex ">
                  <div className="block">
                    <p className="font-bold">{item.name}</p>
                    <p>{item.category}</p>
                  </div>
                  <p>
                    <span className="bg-orange-500 text-white p-1 ml-5 sm:ml-32 md:ml-44 lg:ml-28 xl:ml-48 rounded-xl">
                      ₹{item.price}
                    </span>
                  </p>
                </div>
                <div className="grid gap-x-6 gap-y-4 grid-cols-2 pt-5 pl-4 sm:ml-2 md:ml-4 xl:ml-3 2xl:ml-2 ">
                  <button
                    className="bg-black hover:bg-red-600 text-white rounded-lg h-8 sm:h-8 w-28 sm:w-60
                    md:w-72 lg:w-40  xl:w-60 2xl:w-72"
                    onClick={() => handle(item)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default cards;
