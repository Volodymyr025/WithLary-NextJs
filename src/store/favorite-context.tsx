"use client";
import { products } from "@/component/util/products";
import React, { createContext, useReducer, useState } from "react";

interface itemsType {
  id: string;
  favorite: Boolean;
}

export const FavoriteContext = createContext<any>({
  itemsFavoriteList: [],
  itemsState: [],
  toggleFavorite: () => {},
});

const itemsReduser = (state: any, action: { id: String; checked: Boolean }) => {
  state.map((item: itemsType) => {
    if (item.id === action.id && !action.checked) {
      item.favorite = true;
    }
    if (item.id === action.id && action.checked) {
      item.favorite = false;
    }
  });
  return state;
};

export const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
  const [itemsCtx, setItemsCtx] = useState<any>([]);
  const [itemCtxState, imemDispach] = useReducer(itemsReduser, products);

  const toggleList = (value: { id: string; favorite: Boolean }) => {
    imemDispach({
      id: value.id,
      checked: value.favorite,
    });
    if (!value.favorite) {
      setItemsCtx((prev: []) => [...prev, value]);
    } else {
      const newList = itemsCtx.filter((item: {}) => item !== value);
      setItemsCtx(newList);
    }
  };

  return (
    <FavoriteContext.Provider
      value={{
        itemsFavoriteList: itemsCtx,
        toggleFavorite: toggleList,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
