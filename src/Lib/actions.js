"use server";

import { signIn } from "@/app/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Product, User } from "./models";

export const login = async (prevState, formData) => {
  const { email, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { email, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};

export const newUser = async (fomtData) => {
  const { name, email, address, password, passwordConfirm, role, activity } =
    Object.fromEntries(fomtData);

  try {
    await User.create({
      name,
      email,
      address,
      password,
      passwordConfirm,
      role,
      activity,
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, name, address, email, role, activity } =
    Object.fromEntries(formData);

  const filterdFileds = { name, address, email, role, activity };
  Object.keys(filterdFileds).forEach(
    (key) =>
      (filterdFileds[key] === "" || undefined) && delete filterdFileds[key]
  );

  try {
    await User.findByIdAndUpdate(id, filterdFileds);
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (formData) => {
  const id = formData.get("id");

  try {
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/dashboard/users");
};

export const newProduct = async (formData) => {
  const { title, seller, price, description, stock } =
    Object.fromEntries(formData);

  try {
    await Product.create({ title, seller, price, description, stock });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateProduct = async (formData) => {
  const { id, title, seller, price, description, stock } =
    Object.fromEntries(formData);
  const filterdFileds = { title, seller, price, description, stock };
  Object.keys(filterdFileds).forEach(
    (key) =>
      (filterdFileds[key] === "" || undefined) && delete filterdFileds[key]
  );

  try {
    await Product.findByIdAndUpdate(id, filterdFileds);
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData) => {
  const id = formData.get("id");
  try {
    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/dashboard/products");
};
