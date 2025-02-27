import React from "react";
import Logo from "@/assets/Logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer id="About Us" className="bg-gray-100 md:px-48 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center p-4 gap-10 md:gap-0">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <div className="flex items-center gap-3">
            <Image
              src={Logo}
              alt="EduConnect"
              quality={100}
              placeholder="blur"
              width={50}
              height={50}
            />
            <p className="font-semibold text-xl">EduConnect</p>
          </div>
          <p className="w-full md:w-2/3">
            Manage school easily. Everywhere, everytime.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:space-x-16">
          <div className="footer-section">
            <h3 className="mb-5 font-semibold">Company</h3>
            <ul className="text-gray-400">
              <li>About Us</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="mb-5 font-semibold">Support</h3>
            <ul className="text-gray-400">
              <li>FAQ</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="mb-5 font-semibold">Our Works</h3>
            <ul className="text-gray-400">
              <li>Product</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="mb-5 font-semibold">Social Media</h3>
            <ul className="text-gray-400">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
