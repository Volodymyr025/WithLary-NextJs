"use client";
import React, { createContext, useState } from "react";
import { items } from "@/component/util/items";

export const FavoriteContext = createContext<any>({
  itemsList: [],
  addFavorite: () => {},
  deleteFavorite: () => {},
});

export const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
  const [itemsCtx, setItemsCtx] = useState<any>([]);

  const addToList = (id: number, check: boolean) => {
    check && setItemsCtx((prev: []) => [...prev, items[id]]);
  };

  const deleteFromList = (id: number) => {
    const newList = itemsCtx.filter((deleteID: any) => deleteID.length === id);
    console.log(itemsCtx);
    console.log(newList);
  };

  return (
    <FavoriteContext.Provider
      value={{
        itemsList: itemsCtx,
        addFavorite: addToList,
        deleteFavorite: deleteFromList,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
