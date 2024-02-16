import { NextResponse } from "next/server";
import { products } from "@/component/util/products";
import { revalidatePath } from "next/cache";

export async function GET() {
  return NextResponse.json({
    items: products,
  });
}

export const getData = async () => {
  const res = await fetch("http://localhost:3000/api/items");
  const { items } = await res.json();
  console.log('revalidate');
  return items;
};
