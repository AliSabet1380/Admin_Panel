import { updateUser } from "@/Lib/actions";
import { getSingleData } from "@/Lib/data";
import { User } from "@/Lib/models";
import Image from "next/image";

const SingleUserPage = async ({ params }) => {
  const { user_id } = params;
  const user = await getSingleData(User, user_id);

  return (
    <div className="flex gap-[3rem] mt-[2rem]">
      <div className="flex-[1] bg-[var(--bgSoft)] p-[0.5rem] rounded-[0.5rem]  font-semibold text-[var(--textSoft)] h-max">
        <div className="w-full h-[300px] relative rounded-[0.5rem]  overflow-hidden mt-[1.2rem] ">
          <Image src={user.img || "/images.png"} alt="profile image" fill />
        </div>
        <span className=" text-[var(--textSoft)] font-light text-[14px] ">
          {user.name}
        </span>
      </div>
      <div className="flex-[2] bg-[var(--bgSoft)] p-[1.2rem]  rounded-[0.5rem]">
        <form
          action={updateUser}
          className="flex flex-col  gap-y-[0.6rem] [&>label]:text-[var(--textSoft)] [&>label]:text-[14px] "
        >
          <input type="hidden" name="id" value={user.id} />
          <label>Username</label>
          <input
            className="bg-[var(--bg)] rounded-[0.5rem] focus:outline-none border-[2px] border-slate-700 w-full p-[0.8rem_0.5rem]"
            type="text"
            name="name"
            placeholder={user.name}
          />
          <label>Email</label>
          <input
            className="bg-[var(--bg)] rounded-[0.5rem] focus:outline-none border-[2px] border-slate-700 w-full p-[0.8rem_0.5rem]"
            type="email"
            name="email"
            placeholder={user.email}
          />

          <label>Role</label>
          <select
            className="bg-[var(--bg)] rounded-[0.5rem] focus:outline-none border-[2px] border-slate-700 w-full p-[0.8rem_0.5rem]"
            name="role"
          >
            <option value={"admin"} selected={user.role === "admin"}>
              Admin
            </option>
            <option value={"user"} selected={user.role === "user"}>
              User
            </option>
          </select>
          <label>Activity</label>
          <select
            className="bg-[var(--bg)] rounded-[0.5rem] focus:outline-none border-[2px] border-slate-700 w-full p-[0.8rem_0.5rem]"
            name="activity"
          >
            <option value={"active"} selected={user.activity === "active"}>
              Active
            </option>
            <option
              value={"notActive"}
              selected={user.activity === "notActive"}
            >
              notActive
            </option>
          </select>
          <label>Address</label>
          <textarea
            className="bg-[var(--bg)] rounded-[0.5rem] focus:outline-none border-[2px] border-slate-700 w-full p-[0.8rem_0.5rem]"
            row={3}
            name="address"
            placeholder={user.address}
          ></textarea>

          <button className="w-full mt-[0.5rem] bg-[#5dcf5d] p-[0.8rem_0rem] rounded-[0.5rem] ">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
