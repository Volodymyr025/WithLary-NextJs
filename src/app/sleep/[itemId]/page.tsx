"use client";
import React, { useContext, useEffect } from "react";
import style from "./item.module.css";
import { FavoriteContext } from "@/store/favorite-context";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import AboutProduct from "@/component/shered/AboutProduct";


const item = ({ params }: any) => {
  const pageId = params.itemId;
  const items = useContext(FavoriteContext).itemsState;
  const toggle = useContext(FavoriteContext).toggleFavorite;
  const getItem = items.find(
    (element: { id: string }) => element.id === pageId && element
  );
  const pathName = useRouter();
  const ss = usePathname()
  console.log();

  return (
   <AboutProduct item={getItem} onClick={toggle}/>
  );
};

export default item;
