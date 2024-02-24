import { NextResponse } from "next/server";
import { conectToDB } from "@/app/lib/conectToDB";
import Users from "@/app/lib/users";

export const POST = async (request: Request) => {
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

// export const GET = async () => {
//   try {
//     await conectToDB();
//     const users = await Users.find();
//     return new NextResponse(JSON.stringify(users), { status: 201 });
//   } catch (err: any) {
//     return new NextResponse(
//       JSON.stringify({ message: "Error is created", err }),
//       { status: 500 }
//     );
//   }
// };

// export const POST = async (request: Request) => {
//   const data = await request.json();

//   const connect = await MongoClient.connect(
//     "mongodb+srv://fudo2790:GFgw9wIADpCDdxSC@withlary.1d8gefw.mongodb.net/?retryWrites=true&w=majority"
//   );

//   const db = connect.db();
//   await db.collection("users").insertOne({

//   });

//   connect.close();

//   NextResponse.json(
//     {
//       lastName: data.lastName,
//       firstName: data.firstName,
//       email: data.email,
//       phone: data.phone,
//       password: data.password,
//       confirm: data.confirm,
//     },
//     { status: 201 }
//   );
// };

//   if (!data.lastName) {
//     return response.status(422).json({ message: "invalid last name" });
//   }
//   if (request.method === "POST") {
//     const lastName = request.body.lastName;
//     const firstName = request.body.firstName;
//     const email = request.body.email;
//     const phone = request.body.phone;
//     const password = request.body.password;
//     response.status(201).json({ message: "Registration sucsessful" });
//   }
//   return new Response()
// };
