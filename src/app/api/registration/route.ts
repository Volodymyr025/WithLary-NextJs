import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export const POST = async (request: Request) => {
  const data = await request.json();

  const connect = await MongoClient.connect(
    "mongodb+srv://fudo2790:GFgw9wIADpCDdxSC@withlary.1d8gefw.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = connect.db();
  await db.collection("users").insertOne({
    lastName: data.lastName,
    firstName: data.firstName,
    email: data.email,
    phone: data.phone,
    password: data.password,
    confirm: data.confirm,
  });
  
  connect.close();

  NextResponse.json(
    {
      lastName: data.lastName,
      firstName: data.firstName,
      email: data.email,
      phone: data.phone,
      password: data.password,
      confirm: data.confirm,
    },
    { status: 201 }
  );
};

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
