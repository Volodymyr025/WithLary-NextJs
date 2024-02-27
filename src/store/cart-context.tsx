"use client";
import { createContext, useReducer, useState } from "react";

export const CartContext = createContext<any>({
  addProducts: () => {},
  deleteProduct: () => {},
  cartProducts: [],
  quantityCtx: {},
  change: () => {},
});

interface quantityType {
  type: String;
  id?: String;
  items?: {};
  inputValue?: { value: number };
  type?: String;
  item: {};
  quantity?: number;
}

const itemsReduser = (state: any, action: any) => {
  if (action.type === "ADD") {
    const items = [...state];
    const dublicate = items.find((product: any) => product.id === action.id);
    if (!dublicate) {
      items.push({ ...action.item, quantity: 1 });
    }
    return items;
  }

  if (action.type === "DELETE") {
    const items = [...state];
    const products = items.filter((product: {}) => product !== action.item);
    return products;
  }
  if (action.type === "QUANTITY") {
    const updatedItems = [...state];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.amount;

    if (updatedItem.quantity > 5) {
      updatedItem.quantity - 1;
    } else if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }
    return updatedItems;
  }
  return state;
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
  const [cartStore, cartDispach] = useReducer(itemsReduser, []);
  const [productsInCart, setProductsInCart] = useState<any>([]);
  const [quantityCtx, setQuantityCtx] = useState<any>([]);
  const [quantityState, quantityDispach] = useReducer(itemsReduser, []);

  const addToCart = (value: { id: string }) => {
    cartDispach({
      type: "ADD",
      id: value.id,
      item: value,
    });
  const addToCart = (value: {}) => {
    quantityDispach({
      type: "ADD",
      item: value,
    });
  };
  const deleteFromCart = (value: {}) => {
    cartDispach({
      type: "DELETE",
      item: value,
    });
  };

  const quantity = (value: { id: string; price: number }, amount: number) => {
    cartDispach({
      type: "QUANTITY",
      item: value,
      amount: amount,
    });
  };
  const changeItem = (value: any) => {
    cartDispach({
      type: "changeInput",
      inputValue: value,
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
        change: changeItem,
        cartProducts: cartStore,
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
