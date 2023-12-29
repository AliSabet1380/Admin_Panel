"use client";
import { login } from "@/Lib/actions";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, { message: null });

  return (
    <form
      action={formAction}
      className="bg-[var(--bgSoft)] text-[var(--text)] p-[1.2rem] rounded-[0.5rem] flex flex-col gap-[1.2rem]"
    >
      <h2 className="text-center text-[var(--textSoft)] text-[25px]">Login</h2>
      <input
        className="p-[0.8rem_1.6rem] bg-[var(--bgSoft)] rounded-[0.3rem] focus:outline-none border-[2px] border-slate-700"
        type="text"
        name="email"
        placeholder="Email"
      />
      <input
        className="p-[0.8rem_1.6rem] bg-[var(--bgSoft)] rounded-[0.3rem] focus:outline-none border-[2px] border-slate-700"
        type="password"
        name="password"
        placeholder="Password"
      />
      <button className="bg-[teal] p-[0.4rem_1.6rem] rounded-[0.3rem]  text-[18px] font-[300]">
        Login
      </button>
      <p className="text-center">{state.message && state.message}</p>
    </form>
  );
};
export default LoginForm;
