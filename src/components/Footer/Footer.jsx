import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/food-logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 py-5">
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              FOODIE
            </h1>
            <p>
              Welcome to Foodie! Your one-stop destination for delicious food
              and exceptional services. We strive to provide the best dining
              experience with a variety of cuisines that cater to all tastes.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Located in Mardan, KPK Pakistan</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>Contact Us: +92 3421179168</p>
            </div>
            {/* Social Media Links */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">About Us</li>
                  <li className="cursor-pointer">Services</li>
                  <li className="cursor-pointer">Login</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Quick Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Menu</li>
                  <li className="cursor-pointer">Contact</li>
                  <li className="cursor-pointer">Gallery</li>
                  <li className="cursor-pointer">FAQ</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Support
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Help Center</li>
                  <li className="cursor-pointer">Terms of Service</li>
                  <li className="cursor-pointer">Privacy Policy</li>
                  <li className="cursor-pointer">Feedback</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            © 2024 Foodie. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
