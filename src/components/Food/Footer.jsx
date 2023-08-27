import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { MdEmail, MdCall } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className=" bg-gray-800 text-white ">
      <div className="grid grid-cols-4 gap-4 sm:h-42 cursor-pointer ml-3">
        <div className=" block">
          <h2 className="font-bold text-sm sm:text-xl pt-5">COMPANY</h2>
          <div className="text-gray-400 pt-3">
            <a className="block text-sm sm:text-lg">About</a>
            <a className="block text-sm sm:text-lg">Careers</a>
            <a className="block text-sm sm:text-lg ">Brand Center</a>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-sm sm:text-xl pt-5">SERVICES</h2>
          <div className="text-gray-400 pt-3">
            <a className="block text-sm sm:text-lg">Waiter-Service</a>
            <a className="block text-sm sm:text-lg">Home-Delivery</a>
            <a className="block text-sm sm:text-lg">American-Service Style</a>
            <a className="block text-sm sm:text-lg">Party-Hall</a>
          </div>
          {/* </div> */}
        </div>

        <div>
          <h2 className="font-bold text-sm sm:text-xl pt-5"> LEGAL</h2>
          <div className="text-gray-400 pt-3">
            <a className="flex ">
              <span className="text-sm sm:text-lg">Privacy Policy</span>
            </a>
            <a className="flex">
              <span className="text-sm sm:text-lg">Licensing</span>
            </a>
            <a className="flex">
              <span className="text-sm sm:text-lg">Terms & Conditions</span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-sm sm:text-xl pt-5">HELP CENTER</h2>
          <div className="text-gray-400 pt-3">
            <a className="flex text-sm sm:text-lg">
              Contact No : +(454) 1234 5656
            </a>
            <a className="flex text-sm sm:text-lg ">
              <p className="hover:text-blue-600">Email : foodzone@ gmail.com</p>
            </a>
            <a className="flex text-sm sm:text-lg">
              Address : FoodZone, Brass Market, Near Maharana Pratap Chowk,
              Rewari (HRY)
            </a>
          </div>
        </div>
      </div>
      <div className="flex bg-slate-700 text-white h-16 pt-5 ">
        <p className="flex sm:ml-20 text-sm sm:text-lg ">
          <FaRegCopyright size={25} className="pt-1" />
          2023 Bhart Singh. All Rights Reserved.
        </p>
        <div className="p-1 ml-auto mr-5 sm:mr-10 grid gap-8 grid-cols-6 cursor-pointer">
          <Link to="https://www.linkedin.com/in/bhart-singh-390485224/">
            <FaLinkedin size={25} />
          </Link>
          <Link to="https://www.instagram.com/monu_hr36?utm_source=qr&r=nametag">
            <FaInstagram size={25} />
          </Link>
          <Link to="/">
            <FaTwitter size={25} />
          </Link>
          <Link to="/">
            <BsDiscord size={25} />
          </Link>
          <Link to="https://github.com/BhartSingh">
            <FaGithub size={25} />
          </Link>
          <Link to="https://www.facebook.com/monu.ranoliya.142/">
            <FaFacebook size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
