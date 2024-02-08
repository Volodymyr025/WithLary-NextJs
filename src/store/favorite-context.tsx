"use client";
import React, { createContext, useState } from "react";

export const FavoriteContext = createContext<any>({
  itemsList: [],
  addFavorite: () => {},
  remoteFavorite: () => {},
});

export const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
  const [itemsCtx, setItemsCtx] = useState<any>([]);

  const addToList = (value: { id: string }) => {
    const findItem = itemsCtx.find(
      (findId: { id: string }) => findId.id === value.id
    );
    !findItem && setItemsCtx((prev: []) => [...prev, value]);
  };

  const remoteFromList = (value: number) => {
    const newList = itemsCtx.filter((item: {}) => item !== value);
    setItemsCtx(newList);
  };

  return (
    <FavoriteContext.Provider
      value={{
        itemsList: itemsCtx,
        addFavorite: addToList,
        remoteFavorite: remoteFromList,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
