"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

const Menu = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`p-[0.8rem] ${
        !item.active && "cursor-not-allowed"
      } hover:bg-[#2e374a] hover:text-indigo-400 flex items-center gap-[0.6rem] my-[0.3rem] rounded-[0.5rem] ${
        pathname === item.path && "bg-[#2e374a]"
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default Menu;
