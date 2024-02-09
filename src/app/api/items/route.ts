import { NextResponse } from "next/server";
import { items as products } from "@/component/util/items";

export async function GET() {
  return NextResponse.json({
    items: products,
  });
}
