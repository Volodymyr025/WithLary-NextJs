"use client";
import React, { useContext} from "react";
import { products } from "@/component/util/products";
import style from "./item.module.css";
import { FavoriteContext } from "@/store/favorite-context";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import AboutProduct from "@/component/shered/AboutProduct";


const item = ({ params }: any) => {
  const pageId = params.itemId;
  const toggle = useContext(FavoriteContext).toggleFavorite;
  const getItem = products.find(
    (element: { id: string }) => element.id === pageId && element
  );
  

  return (
   <AboutProduct item={getItem} onClick={toggle}/>
  );
};

export default item;
