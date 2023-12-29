import Pagination from "@/Components/Dashboard/pagination/Pagination";
import Search from "@/Components/Dashboard/Search/Search";
import { deleteUser } from "@/Lib/actions";
import { getAllData } from "@/Lib/data";
import { User } from "@/Lib/models";

import Image from "next/image";
import Link from "next/link";

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, data: users } = await getAllData(User, "name", q, page);

  return (
    <div className="bg-[var(--bgSoft)] p-[1.2rem] rounded-[0.5rem] mt-[1.2rem]">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className="p-[0.6rem] bg-[#5d57c9] text-[var(--text)] rounded-[0.3rem] cursor-pointer">
            Add New+
          </button>
        </Link>
      </div>
      <table className="w-full text-[13px]">
        <thead>
          <tr className="[&>td]:p-[0.6rem]">
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr className="[&>td]:p-[0.6rem]" key={user.id}>
              <td>
                <div className="flex items-center gap-[0.6rem]">
                  <Image
                    src={user.img || "/images.png"}
                    alt=""
                    width={30}
                    height={30}
                    className="object-cover rounded-[50%]"
                  />
                  {user.name}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.role === "admin" ? "Admin" : "User"}</td>
              <td>{user.activity === "active" ? "acitve" : "notActive"}</td>
              <td>
                <div className="flex gap-[0.6rem]">
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className="bg-[crimson] font-semibold p-[0.15rem_0.3rem] rounded-[0.5rem] text-white cursor-pointer">
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={user.id} />
                    <button className="bg-[teal] font-semibold p-[0.15rem_0.3rem] rounded-[0.5rem] text-black cursor-pointer">
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default UsersPage;
