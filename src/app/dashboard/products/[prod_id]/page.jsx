import { updateProduct } from "@/Lib/actions";
import { getSingleData } from "@/Lib/data";
import { Product } from "@/Lib/models";

const ProdcutDetailPage = async ({ params }) => {
  const { prod_id } = params;
  const product = await getSingleData(Product, prod_id);
  return (
    <div className="flex items-center justify-center ">
      <form
        action={updateProduct}
        className="flex flex-col gap-y-[2rem] bg-[var(--bgSoft)] p-[1.2rem] mt-[3rem] w-1/2 rounded-[0.5rem]"
      >
        <input type="hidden" value={product.id} name="id" />
        <input
          className="bg-[var(--bgSoft)]  w-full rounded-[0.5rem] border-[2px] border-slate-700 p-[0.8rem_0.5rem] focus:outline-none"
          type="text"
          name="title"
          placeholder={product.title}
        />
        <input
          className="bg-[var(--bgSoft)] w-full rounded-[0.5rem] border-[2px] border-slate-700 p-[0.8rem_0.5rem] focus:outline-none"
          type="text"
          name="seller"
          placeholder={product.seller}
        />
        <input
          className="bg-[var(--bgSoft)] w-full rounded-[0.5rem] border-[2px] border-slate-700 p-[0.8rem_0.5rem] focus:outline-none"
          type="text"
          name="price"
          placeholder={product.price}
        />
        <input
          className="bg-[var(--bgSoft)] w-full rounded-[0.5rem] border-[2px] border-slate-700 p-[0.8rem_0.5rem] focus:outline-none"
          type="text"
          name="stock"
          placeholder={product.stock}
        />
        <textarea
          className="bg-[var(--bgSoft)] w-full rounded-[0.5rem] border-[2px] border-slate-700 p-[0.8rem_0.5rem] focus:outline-none"
          row={3}
          name="description"
          placeholder={product.description}
        />
        <button className="bg-[#65c565] rounded-[0.5rem] p-[0.8rem_0rem]">
          Update
        </button>
      </form>
    </div>
  );
};
export default ProdcutDetailPage;
