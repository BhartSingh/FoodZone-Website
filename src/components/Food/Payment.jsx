import React, { useState, useEffect } from "react";
import { FaBlogger } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";

const Payment = () => {
  const [price, setPrice] = useState(0);

  // const handlePrice = () => {
  //   let ans = 0;
  //   cards.map((item) => (ans += item.amount * item.prices));
  //   setPrices(ans);
  // };

  // useEffect(() => {
  //   handlePrice();
  // });

  const handlePayment = () => {
    alert("Success your payment");
  };

  return (
    <div>
      <div className="flex shadow-md">
        <Link to="/">
          <BsArrowLeft size={30} className="pl-1" />
        </Link>
        <h1 className="font-bold text-xl ml-5">Payments</h1>
      </div>
      <div className="pt-5">
        <div className="shadow-lg h-28 ">
          <div className="flex p-3  ">
            <FaBlogger size={25} className="text-sky-500  rounded-full" />
            <p className="pl-3 md:text-xl ">
              No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2500
            </p>
          </div>
          <hr />
          <p className="pt-3 md:text-xl  ">
            <Link to="/" className="text-blue-800 ml-36 cursor-pointer pt-40">
              View All Offers
            </Link>
          </p>
        </div>
      </div>
      <h3 className="pl-5 pt-5 h-14 text-lg md:text-xl">All other options</h3>
      <hr />
      <div>
        <ul className="shadow-lg h-[340px] md:text-xl">
          <div className="flex pt-5">
            <li className="pt-2 text-xl ">
              <input
                type="radio"
                name="listGroupRadio"
                id="firstRadio"
                className="w-5 h-5 ml-4"
              />
              <label htmlFor="firstRadio" className="ml-5 ">
                UPI
              </label>
            </li>

            <img
              src="/images/UPI-apps.avif"
              className="h-10 ml-auto md:mr-20 md:h-12 cursor-pointer"
            />
          </div>
          <li className="pt-5">
            <input
              type="radio"
              name="listGroupRadio"
              id="secondRadio"
              className="w-5 h-5 ml-4 "
            />
            <label htmlFor="secondRadio" className="ml-5 text-lg">
              Wallet/ Postpaid
            </label>
          </li>
          <li className="pt-5">
            <input
              type="radio"
              name="listGroupRadio"
              id="thirdRadio"
              className="w-5 h-5 ml-4"
            />
            <label for="thirdRadio" className="ml-5 text-lg">
              Credit/Debit/ATM Card
            </label>
            <p className="ml-14 text-gray-500">
              Add and secure your card as per RBI guidelines
            </p>
          </li>
          <li className="pt-3">
            <input
              type="radio"
              name="listGroupRadio"
              id="secondRadio"
              className="w-5 h-5 ml-4"
            />
            <label htmlFor="secondRadio" className="ml-5 text-lg">
              Net Banking
            </label>
            <p className="ml-14 text-gray-500">
              Ths instruction has low success, use UPI or cards for better
              experience
            </p>
          </li>
          <li className="pt-3">
            <input
              type="radio"
              name="listGroupRadio"
              id="secondRadio"
              className="w-5 h-5 ml-4"
            />
            <label htmlFor="secondRadio" className="ml-5 text-lg">
              Cash on Delivery
            </label>
          </li>
        </ul>
      </div>
      <div className="flex shadow-md h-16 pt-5">
        <HiPlus size={25} className="ml-4 cursor-pointer" />
        <h2 className="ml-5 text-lg md:text-xl">Gift Card</h2>
      </div>
      <div className="shadow-lg h-44 md:text-xl">
        <h1 className="ml-5 pt-5 ">PRICE DETAILS</h1>
        <hr />
        <div className="flex pt-5">
          <p className="text-lg ml-5">Price</p>
          <span className="ml-auto mr-10 md:mr-28">₹ 897</span>
        </div>
        <div className="flex">
          <p className="ml-5">Delivery Charges</p>
          <span className="text-green-800 text-lg ml-auto mr-5 md:mr-28 cursor-pointer">
            FREE
          </span>
        </div>
        <div className="flex pt-5">
          <p className="ml-5">Amount Payable</p>
          <span className="ml-auto mr-10 md:mr-28">₹ 897</span>
        </div>
      </div>
      <div className="pt-5 pb-1  ">
        <Link to="/">
          <button className="bg-red-500 text-white w-24 h-10 ml-6 sm:ml-36 hover:h-12  hover:rounded-full md:ml-60 lg:ml-80 xl:ml-[500px] ">
            Cancel
          </button>
        </Link>
        <Link to="/">
          <button
            className="bg-orange-500 text-white w-32 h-10  ml-24 sm:ml-32 hover:h-12 hover:rounded-full"
            onClick={handlePayment}
          >
            Make Payment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
