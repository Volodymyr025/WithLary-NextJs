import { MongoClient } from "mongodb";

// const heandler = async (reqest: any, response: any) => {
//   if (reqest.method === "POST") {
//     const data = reqest.body;
//     const connect = await MongoClient.connect(
//       "mongodb+srv://fudo2790:uS6aRR2xbuIHPFAr@withlary.1d8gefw.mongodb.net/products?retryWrites=true&w=majority"
//     );
//     const db = connect.db();
//     const collections = db.collection("products");
//     const result = collections.insertOne({
//       data,
//     });
//     console.log(result);
//     connect.close();
//   }
// };

const getProducts = async () => {
  const connect = await MongoClient.connect(
    "mongodb+srv://fudo2790:uS6aRR2xbuIHPFAr@withlary.1d8gefw.mongodb.net/products?retryWrites=true&w=majority"
  );
  const db = connect.db();
  const collections = db.collection("products");
  const products = await collections.find().toArray();
  connect.close();
  return products;
};

export default getProducts;