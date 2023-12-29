import Link from "next/link";
import { MdArrowLeft } from "react-icons/md";

const notFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-y-[0.5rem]">
      <p>Not Found :( 404</p>
      <Link
        href={"/"}
        className="flex items-center text-black gap-[0.3rem] p-[0.4rem_0.8rem] rounded-[0.5rem] bg-lime-300"
      >
        <MdArrowLeft />
        Home
      </Link>
    </div>
  );
};
export default notFound;
