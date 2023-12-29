"use client";
import { usePathname } from "next/navigation";

import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="p-[0.8rem_1.2rem] rounded-[0.5rem] bg-[var(--bgSoft)] flex items-center justify-between">
      <div className="text-[var(--textSoft)] font-semibold pag-[1.2rem] capitalize">
        {pathname.split("/").pop()}
      </div>
      <div className="flex items-center gap-[1.2rem]">
        <div className="flex items-center gap-[0.6rem] bg-[#2e374a] p-[0.6rem] rounded-[0.5rem]">
          <MdSearch size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none  text-[var(--text)]"
          />
        </div>
        <div className="flex gap-[1.2rem]">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
