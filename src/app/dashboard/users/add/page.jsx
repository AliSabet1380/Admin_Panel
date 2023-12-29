// import { addUser } from "@/app/lib/actions";

import { newUser } from "@/Lib/actions";

const AddUserPage = () => {
  return (
    <div className="w-full h-max flex items-center justify-center">
      <form
        action={newUser}
        className="bg-[var(--bgSoft)] rounded-[0.5rem] mt-[3rem] text-[var(--text)] p-[1.2rem] w-[500px] flex flex-col gap-[1rem]"
      >
        <input
          className="bg-[var(--bg)] w-full  border-[2px] border-slate-700 p-[0.8rem_0.5rem] rounded-[0.5rem] focus:outline-none"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          className="bg-[var(--bg)] w-full  border-[2px] border-slate-700 p-[0.8rem_0.5rem] rounded-[0.5rem] focus:outline-none"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className="bg-[var(--bg)] w-full border-[2px] border-slate-700 p-[0.8rem_0.5rem] rounded-[0.5rem] focus:outline-none"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input
          className="bg-[var(--bg)] w-full border-[2px] border-slate-700 p-[0.8rem_0.5rem] rounded-[0.5rem] focus:outline-none"
          type="password"
          name="passwordConfirm"
          placeholder="Password Confimr"
          required
        />
        <select
          className="bg-[var(--bg)] w-full border-[2px] border-slate-700 p-[0.8rem_0.5rem] rounded-[0.5rem] focus:outline-none"
          name="role"
        >
          <option value={"user"}>User</option>
          <option value={"admin"}>Admin</option>
        </select>
        <select
          className="bg-[var(--bg)] w-full border-[2px] border-slate-700 p-[0.8rem_0.5rem] rounded-[0.5rem] focus:outline-none"
          name="activity"
        >
          <option value={"active"}>Active</option>
          <option value={"notActive"}>Not Active</option>
        </select>
        <textarea
          className="bg-[var(--bg)] w-full border-[2px] border-slate-700 p-[0.8rem_0.5rem] rounded-[0.5rem] focus:outline-none"
          rows={4}
          name="address"
          placeholder="Address"
        ></textarea>

        <button className="p-[0.8rem_1.6rem] bg-[teal] rounded-[0.5rem]">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUserPage;
