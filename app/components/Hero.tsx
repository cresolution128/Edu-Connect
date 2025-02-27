"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import dashboard from "@/assets/dashboard.png";
import PartnerLogos from "./PartnerLogos";

const Hero = () => {
  return (
    <section id="Home">
      <div className="flex flex-col justify-start items-center pt-10 md:pt-14 gap-6 md:gap-4 h-screen w-full [&>*]:text-white bg-primary-main z-50">
        <p className="text-5xl md:text-7xl font-extrabold text-center w-10/12 md:w-8/12 leading-[80px] md:leading-[110px]">
          Empower Your School's Future with{" "}
          <span className="bg-white text-primary-main p-2 text-center">EduConnect</span>
        </p>
        <p className="text-xl sm:text-2xl sm:w-6/12 mx-3 text-center">
          Unify your school's operations, enrich student learning, and achieve
          collective success—all in one innovative platform
        </p>
        <div className="flex items-center gap-3 z-40">
          <Link href="#Pricing">
            <Button
              variant="outline"
              className="px-8 text-primary-main"
            >
              Try for free
            </Button>
          </Link>
          <Link
            href="https://ihei.vercel.app/login"
            target="_blank"
          >
            <Button
              variant="outline"
              className="px-8 bg-transparent"
            >
              View Demo
            </Button>
          </Link>
        </div>
        <ContainerScroll titleComponent={<></>}>
          <Image
            src={dashboard}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover"
            placeholder="blur"
            draggable={false}
            id="Product"
          />
        </ContainerScroll>
      </div>
      <PartnerLogos />
    </section>
  );
};

export default Hero;
