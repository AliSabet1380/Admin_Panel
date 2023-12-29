import Image from "next/image";
import Link from "next/link";

import Search from "@/Components/Dashboard/Search/Search";
import Pagination from "@/Components/Dashboard/pagination/Pagination";
import { getAllData } from "@/Lib/data";
import { Product } from "@/Lib/models";
import { deleteProduct } from "@/Lib/actions";

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, data: products } = await getAllData(Product, "title", q, page);

  return (
    <div className="bg-[var(--bgSoft)] p-[1.2rem] rounded-[0.5rem] mt-[1.2rem]">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className="p-[0.6rem] bg-[#5d57c9] text-[var(--text)] rounded-[0.3rem] cursor-pointer">
            Add New+
          </button>
        </Link>
      </div>
      <table className="w-full text-[13px] text-[var(--textSoft)]">
        <thead>
          <tr className="[&>td]:p-[0.6rem] text-[var(--text)] text-[15px]">
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Seller</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr className="[&>td]:p-[0.6rem]" key={product.id}>
              <td>
                <div className="flex items-center gap-[0.6rem]">
                  <Image
                    src={product.img || "/empty.png"}
                    alt=""
                    width={30}
                    height={30}
                    className="object-cover rounded-[50%]"
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>{product.seller}</td>
              <td>{product.stock}</td>
              <td>
                <div className="flex gap-[0.6rem] text-[13px] font-semibold">
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className="p-[0.1rem_0.4rem] rounded-[0.3rem] bg-[crimson] text-white ">
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={product.id} />
                    <button className="bg-[teal] p-[0.1rem_0.4rem] rounded-[0.3rem] text-black">
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

export default ProductsPage;
