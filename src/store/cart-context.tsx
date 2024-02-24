"use client";
import { createContext, useReducer, useState } from "react";

export const CartContext = createContext<any>({
  addProducts: () => {},
  deleteProduct: () => {},
  cartProducts: [],
  quantityCtx: {},
});

interface quantityType {
  type: String;
  id: String;
  quantity: number;
}

const itemsReduser = (state: any, action: quantityType) => {
    if(action.type === 'increase'){
        state = action.quantity
    }
  console.log(state);
  return state;
};

const CartContextWrapper = ({ children }: { children: React.ReactNode }) => {
  const [productsInCart, setProductsInCart] = useState<any>([]);
  const [quantityState, quantityDispach] = useReducer(itemsReduser, []);

  const addToCart = (value: {}) => {
    const dublicate = productsInCart.find((product: any) => product === value);
    if (!dublicate) {
      setProductsInCart((prev: []) => [...prev, value]);
    }
  };
  const deleteFromCart = (value: {}) => {
    const products = productsInCart.filter((product: {}) => product !== value);
    setProductsInCart(products);
  };

  const quantity = (value: { id: String; price: number }, action: String) => {
    quantityDispach({
      type: action,
      id: value.id,
      quantity: value.price,
    });
  };

  return (
    <CartContext.Provider
      value={{
        addProducts: addToCart,
        cartProducts: productsInCart,
        deleteProduct: deleteFromCart,
        quantityCtx: quantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextWrapper;
