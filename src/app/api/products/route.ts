import { NextResponse } from "next/server";
import { conectToDB } from "@/app/lib/conectToDB";
import Users from "@/app/lib/users";

export const GET = async (request: Request) => {
  try {
    const data = await request.json();
    await conectToDB()
    await Users.create(data);
    return NextResponse.json({ message: "User is created" }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      { message: "Error is created", err },
      { status: 500 }
    );
  }
};
