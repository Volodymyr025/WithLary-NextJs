import React from "react";
import { getData } from "../api/items/route";



const page = async () => {
  const item = await getData()
  console.log('item')
  return <div></div>;
};


export default page;
