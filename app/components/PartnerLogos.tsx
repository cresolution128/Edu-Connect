import Image from "next/image"
import cambridge from "@/assets/partners/cambridge.png"
import oxford from "@/assets/partners/oxford.png"
import um6p from "@/assets/partners/um6p.png"

const PartnerLogos = () => {
  return (
    <div className="md:w-8/12 mx-auto flex flex-col md:flex-row items-center md:justify-between flex-wrap overflow-hidden mt-20 md:mt-[500px]">
      <Image
        src={cambridge}
        alt="partner-logo"
        width={200}
        height={200}
        placeholder="blur"
        loading="lazy"
      />
      <Image
        src={um6p}
        alt="partner-logo"
        width={200}
        height={200}
        placeholder="blur"
        loading="lazy"
      />
      <Image
        src={oxford}
        alt="partner-logo"
        width={200}
        height={200}
        placeholder="blur"
        loading="lazy"
      />
    </div>
  );
}

export default PartnerLogos