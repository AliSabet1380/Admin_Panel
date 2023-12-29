import Card from "@/Components/Dashboard/main/Card/Card";
import { cards } from "@/Lib/data";
import Chart from "@/Components/Dashboard/main/Chart/Chart";
import Rightbar from "@/Components/Dashboard/main/Rightbar/Rightbar";
import Transactions from "@/Components/Dashboard/main/Transactions/Transactions";

const DashboardPage = () => {
  return (
    <div className="flex gap-[1.2rem] mt-[1.2rem]">
      <div className="flex-[3] flex flex-col gap-[1.2rem]">
        <div className="flex gap-[1.2rem] justify-center items-center">
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="flex-[1]">
        <Rightbar />
      </div>
    </div>
  );
};
export default DashboardPage;
