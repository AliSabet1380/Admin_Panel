import { MdSupervisedUserCircle } from "react-icons/md";

const Card = ({ item }) => {
  return (
    <div className="bg-[var(--bgSoft)] p-[1rem_1.2rem] flex gap-[1.2rem] cursor-pointer w-full hover:bg-[#2e374a] rounded-[0.5rem]">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-[1.2rem]">
        <span className="">{item.title}</span>
        <span className="text-[24px]">{item.number}</span>
        <span className="text-[12px]">
          <span className={item.change > 0 ? "text-[lime]" : "text-[red]"}>
            {item.change}%
          </span>{" "}
          {item.change > 0 ? "more" : "less"} than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
