import Image from "next/image";
import dashboard from "@/assets/dashboard.png";
import { Button } from "@/components/ui/button";

const Streamline = () => {
  return (
    <section id="Customer">
      <div className="bg-primary-light overflow-hidden flex flex-col md:flex-row items-center justify-center gap-10 py-20 px-10 md:p-32 mx-auto relative">
        <div className="hidden md:block absolute overflow-hidden top-[-560px] right-[-700px] size-[1200px] bg-primary-main rounded-full" />
        <div className="flex flex-col items-start gap-6">
          <p className="text-6xl font-extrabold leading-[80px]">
            Streamline School Operations Together
          </p>
          <p className="text-gray-400 w-8/12">
            Effortlessly Manage Every Aspect of Your School's Operations with
            Collaborative Ease
          </p>
          <Button className="bg-primary-main text-white">Try for free</Button>
        </div>
        <Image
          src={dashboard}
          alt="dahsboard"
          className="mx-auto rounded-xl object-cover z-10 h-[200px] md:w-[600px] md:h-[340px]"
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default Streamline;
