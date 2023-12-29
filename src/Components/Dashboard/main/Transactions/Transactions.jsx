import Image from "next/image";

const Transactions = () => {
  return (
    <div className="bg-[var(--bgSoft)] p-[1.2rem] rounded-[0.5rem]">
      <h2 className="mb-[1.2rem] font-[200] text-[var(--textSoft)]">
        Recent Transactions
      </h2>
      <table className="w-full">
        <thead>
          <tr className="[&>td]:p-[0.6rem]">
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr className="[&>td]:p-[0.6rem]">
            <td>
              <div className="flex gap-[0.6rem] items-center">
                <Image
                  src="/images.png"
                  alt=""
                  width={30}
                  height={30}
                  className="object-cover rounded-[50%]"
                />
                <span>Ali</span>
              </div>
            </td>
            <td>
              <span className="rounded-[0.3rem] p-[0.3rem] font-[12px] text-black bg-[#18c2c2]">
                Success
              </span>
            </td>
            <td>13/12/2023</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
