import { connectToDB } from "./DB";

export const cards = [
  {
    id: 1,
    title: "Total Users",
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "Stock",
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: "Revenue",
    number: 6.642,
    change: 18,
  },
];

export const getAllData = async (model, field, query, page) => {
  const regex = RegExp(query, "i");
  const ITEM_PER_PAGE = 3;

  try {
    connectToDB();
    const count = await model.find({ [field]: { $regex: regex } }).count();
    const data = await model
      .find({ [field]: { $regex: regex } })
      .limit(3)
      .skip(ITEM_PER_PAGE * (page - 1));

    return { data, count };
  } catch (error) {
    throw new Error("Something Goes Wrong In Fetching Data From DataBase");
  }
};

export const getSingleData = async (model, id) => {
  const data = await model.findById(id);
  return data;
};
