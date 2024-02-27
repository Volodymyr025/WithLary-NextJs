"use client";
import { createContext, useReducer, useState } from "react";

export const CartContext = createContext<any>({
  addProducts: () => {},
  deleteProduct: () => {},
  cartProducts: [],
  quantityCtx: {},
});

interface quantityType {
  type?: String;
  item: {};
  quantity?: number;
}

const itemsReduser = (state: any, action: quantityType) => {
  if (action.type === "ADD") {
    const items = [...state];
    const item = items.find((item) => item === action.item);
    if (!item) {
      items.push({...action.item, qu:1});
    }
    return (state = items);
  }
  if(action.type === "QU"){
    const item:any = action.item;
    item.qu = item.qu + action.quantity
    return item
  }
};

const CartContextWrapper = ({ children }: { children: React.ReactNode }) => {
  const [productsInCart, setProductsInCart] = useState<any>([]);
  const [quantityCtx, setQuantityCtx] = useState<any>([]);
  const [quantityState, quantityDispach] = useReducer(itemsReduser, []);

  const addToCart = (value: {}) => {
    quantityDispach({
      type: "ADD",
      item: value,
    });
  };
  const deleteFromCart = (value: {}) => {
    const products = productsInCart.filter((product: {}) => product !== value);
    setProductsInCart(products);
  };

  const quantity = (value: {}, quantity: number) => {
    quantityDispach({
      type: "QU",
      item: value,
      quantity: quantity,
    });
    console.log(quantityState);
  };

  return (
    <CartContext.Provider
      value={{
        addProducts: addToCart,
        cartProducts: quantityState,
        deleteProduct: deleteFromCart,
        quantityCtx: quantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextWrapper;
