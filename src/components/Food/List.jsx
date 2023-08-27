import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Context } from "../../context/contextApi";

const List = ({ cards, setCards, handleChange }) => {
  const [price, setPrice] = useState(0);

  // const { show, setShow } = useContext(Context);
  // const ToggleClick = () => {
  //   setShow(!show);
  // };

  const handleRemove = (id) => {
    const arr = cards.filter((item) => item.id !== id);
    setCards(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cards.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });
  return (
    <>
      <div className=" max-w-[1640px] m-auto px-4 py-12">
        <div className=" shadow-2xl rounded-lg">
          {cards.map((item) => (
            <div key={item.id} className="flex p-3 ml-3 lg:ml-32 xl:ml-60 ">
              <div className="flex ">
                <div className="sm:flex  2xl:pl-36">
                  <img src={item.image} alt="" className="w-16 h-16  " />
                  <div className=" flex ">
                    <p className=" font-bold text-[15px] sm:pl-5 pt-3 sm:text-lg lg:text-2xl">
                      {item.name}
                    </p>
                  </div>
                </div>
                <div className="pl-5 sm:pt-5 sm:ml-[10px] sm:text-2xl md:ml-[150px] ">
                  <button
                    className="bg-gray-300 w-6 sm:w-12  rounded-full"
                    onClick={() => handleChange(item, 1)}
                  >
                    +
                  </button>
                  <button>{item.amount}</button>
                  <button
                    className="bg-gray-300 w-6 sm:w-12 rounded-full"
                    onClick={() => handleChange(item, -1)}
                  >
                    -
                  </button>
                </div>
                <div className="ml-12 sm:ml-8 sm:flex sm:pl-10  sm:pt-5 ">
                  <span>{item.price}</span>
                  <div className="pt-10 sm:pt-0 sm:pl-10">
                    <button
                      className=" bg-red-500 text-white w-20 sm: rounded-xl"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className=" mt-20 ml-10 sm:pt-10 lg:text-2xl  2xl:pl-28">
            <span className="ml-[30px] sm:ml-[120px]  lg:ml-[180px] xl:ml-[350px] ">
              Total Price
            </span>
            <span className="pl-20 sm:pl-40 lg:pl-80">₹ {price}</span>
          </div>
          <div className="flex pt-10 pl-2 sm:ml-[100px] lg:ml-[200px]  xl:ml-[400px]">
            <div>
              <Link to="/">
                <button
                  className="bg-red-500 h-8 hover:h-10 text-white w-20 rounded-lg"
                  // onClick={() => setShow(true)}
                  // onClick={ToggleClick}
                >
                  Back
                </button>
              </Link>
            </div>
            <div className="2xl:pl-28 pl-0">
              <Link to="/checkout">
                <button className="bg-green-600  h-8 hover:h-10 text-white ml-44 lg:ml-96 w-20 rounded-lg">
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
