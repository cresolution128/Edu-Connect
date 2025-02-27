"use client";
import Image from "next/image";
import Logo from "@/assets/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navElements = ["Product", "Solutions", "Customer", "Pricing", "About Us"];

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="bg-primary-main w-full flex justify-between items-center py-4 px-5 lg:px-14 xl:px-32 [&>*]:text-white">
      <div className="flex items-center gap-3">
        <Image
          src={Logo}
          alt="EduConnect"
          quality={100}
          placeholder="blur"
          width={50}
          height={50}
        />
        <p className="font-medium text-xl">EduConnect</p>
      </div>
      <div className="md:flex hidden justify-between items-center gap-8">
        {navElements.map((element, index) => (
          <Link
            href={`#${element}`}
            key={index}
            className="text-base mr-4 hover:scale-110 transition-all duration-200 ease-in-out transform"
          >
            {element}
          </Link>
        ))}
      </div>
      <Link href="https://ihei.vercel.app/login" target="_blank">
        <Button variant="outline" className="px-8 bg-transparent">
          Demo
        </Button>
      </Link>
    </nav>
  );
};

export default NavBar;
