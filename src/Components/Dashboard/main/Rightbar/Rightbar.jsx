import Image from "next/image";
import { MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className="fixed">
      <div className="bg-gradient-to-b from-[#182237] to-[#253352] rounded-[0.5rem] mt-[1.2rem] relative p-[0.5rem]">
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 gap-[0.3rem]">
          <Image
            className="object-contain opacity-20"
            src="/astro.png"
            alt=""
            fill
          />
        </div>
        <div className="flex flex-col gap-[1.4rem]">
          <span className="font-semibold">🔥 Available Now</span>
          <h3 className="">
            How to use the new version of the admin dashboard?
          </h3>
          <span className="text-[var(--textSoft)] font-[400] text-[12px]">
            Takes 4 minutes to learn
          </span>
          <p className="text-[var(--textSoft)] text-[12px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button
            disabled={true}
            className="p-[0.6rem] flex items-center gap-[0.6rem] w-max bg-[#5d57c9] text-[var(--text)] border-none rounded-[0.3rem] cursor-not-allowed"
          >
            <MdReadMore />
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
