import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillTag,
} from "react-icons/ai";
import { BsFillSaveFill, BsCartPlusFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = ({ setShow, size }) => {
  const [nav, setnav] = useState(false);

  function handleOrder() {
    alert("Order is on the way 🚴‍♀🚴‍♀🚴‍♀");
  }

  function handleInvite() {
    alert("Sending invite 🙏🏻🙏🏻🙏🏻");
  }
  return (
    <div className="mx-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => setnav(!nav)} className=" cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-slate-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      <div className="bg-gray-200  rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className=" bg-transparent p-2  w-full focus:outline-none"
          type="text"
          placeholder="Search foods"
        />
      </div>

      <div
        className=" flex  py-2 pl-2 w-16 sm:w-24 lg:w-24 "
        onClick={() => setShow(false)}
      >
        <BsCartPlusFill size={30} className="mr-2 " />
        <div className="block h-5 w-5 rounded-full  bg-red-600">
          <span className="cursor-pointer pl-1.5 text-white">{size}</span>
        </div>
      </div>

      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side Draw Menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setnav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4 ">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800 cursor-pointer">
            <li className="text-xl py-4 flex " onClick={handleOrder}>
              <a href="/" className="flex">
                <TbTruckDelivery size={25} className="mr-4" />
                Orders
              </a>
            </li>
            <li className="text-xl py-4 flex">
              <a href="/" className="flex">
                <MdFavorite size={25} className="mr-4 hover:text-red-500" />
                Favorites
              </a>
            </li>
            <li className="text-xl py-4 flex">
              <a href="/" className="flex">
                <FaWallet size={25} className="mr-4" /> Wallet
              </a>
            </li>
            <li className="text-xl py-4 flex">
              <a href="/" className="flex">
                <MdHelp size={25} className="mr-4" /> Help
              </a>
            </li>
            <li className="text-xl py-4 flex">
              <a href="/" className="flex">
                <AiFillTag size={25} className="mr-4" /> Promotions
              </a>
            </li>
            <li className="text-xl py-4 flex">
              <a href="/" className="flex">
                <BsFillSaveFill size={25} className="mr-4" /> Best Ones
              </a>
            </li>
            <li className="text-xl py-4 flex" onClick={handleInvite}>
              <a href="/" className="flex">
                <FaUserFriends size={25} className="mr-4" /> Invite Friend
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
