import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import Menu from "./menu/Menu";
import Image from "next/image";
import { auth, signOut } from "@/app/auth";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",

        icon: <MdDashboard />,
        active: true,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
        active: true,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
        active: true,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
        active: false,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
        active: false,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
        active: false,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
        active: false,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
        active: false,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,

        active: false,
      },
    ],
  },
];

const Sidebar = async () => {
  const { user } = await auth();

  return (
    <div className="sticky top-[40px] ">
      <div className="flex items-center gap-[1.2rem] mt-[1.2rem] ">
        <Image
          className="rounded-[50%] object-cover"
          src={user.img || "/noavatar.png"}
          alt="Profile Image"
          width="30"
          height="30"
        />
        <div className="flex flex-col">
          <span className="font-semibold">{user.name}</span>
          <span className="text-[12px]   text-[var(--textSoft)]">
            {user.role}
          </span>
        </div>
      </div>
      <ul>
        {menuItems.map((subLink) => (
          <li key={subLink.title}>
            <span className="my-[0.6rem] text-[16px] font-semibold text-[#9faeee]">
              {subLink.title}
            </span>
            {subLink.list.map((item) => (
              <Menu item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className="p-[0.8rem] hover:text-indigo-400 my-[0.3rem] flex items-center gap-[0.6rem] cursor-pointer rounded-[0.5rem] text-[var(--text)] w-full hover:bg-[#2e374a]">
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};
export default Sidebar;
