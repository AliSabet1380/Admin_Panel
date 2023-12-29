import { newProduct } from "@/Lib/actions";

const AddNewProduct = () => {
  return (
    <div className="  flex items-center justify-center">
      <form
        action={newProduct}
        className="flex flex-col gap-y-[2rem] bg-[var(--bgSoft)] p-[1.2rem] mt-[3rem] w-1/2 rounded-[0.5rem]"
      >
        <input
          className="bg-[var(--bgSoft)]  w-full rounded-[0.5rem] border-[2px] border-slate-700 p-[0.8rem_0.5rem] focus:outline-none"
          type="text"
          name="title"
          placeholder="title"
          required
        />
        <input
          className="bg-[var(--bgSoft)] w-full rounded-[0.5rem] border-[2px] border-slate-700 p-[0.8rem_0.5rem] focus:outline-none"
          type="text"
          name="seller"
          placeholder="seller"
          required
        />
        <input
          className="bg-[var(--bgSoft)] w-full rounded-[0.5rem] border-[2px] border-slate-700 p-[0.8rem_0.5rem] focus:outline-none"
          type="text"
          name="price"
          placeholder="price"
          required
        />
        <input
          className="bg-[var(--bgSoft)] w-full rounded-[0.5rem] border-[2px] border-slate-700 p-[0.8rem_0.5rem] focus:outline-none"
          type="text"
          name="stock"
          placeholder="stock"
          required
        />
        <textarea
          className="bg-[var(--bgSoft)] w-full rounded-[0.5rem] border-[2px] border-slate-700 p-[0.8rem_0.5rem] focus:outline-none"
          row={3}
          name="description"
          placeholder="description"
        />
        <button className="bg-[#65c565] rounded-[0.5rem] p-[0.8rem_0rem]">
          Add
        </button>
      </form>
    </div>
  );
};
export default AddNewProduct;
