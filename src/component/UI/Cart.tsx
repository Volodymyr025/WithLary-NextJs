import { Dispatch, SetStateAction } from "react";
import style from "./Cart.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Image from "next/image";
import { itemsType } from "../shered/Card";
import { Button } from "@mui/material";

interface propsCart {
  showCart: boolean;
  setCart: Dispatch<SetStateAction<boolean>>;
  products: [];
  deleteProducts: (product: {}) => {};
  quantity: any;
}

const Cart = ({
  showCart,
  setCart,
  products,
  deleteProducts,
  quantity,
}: propsCart) => {
  return (
    <>
      {showCart && (
        <div className={style.bg}>
          <div className={style.mainCart}>
            <div className={style.upper}>
              <h2>Cart</h2>
              <CloseIcon
                onClick={() => setCart(false)}
                style={{ cursor: "pointer" }}
              />
            </div>
            <hr style={{ width: "100%" }}></hr>
            <div className={style.lower}>
              {products.length === 0 && <h2>Order Something</h2>}
              {products &&
                products.length > 0 &&
                products.map((product: itemsType) => (
                  <Box
                    component={"div"}
                    className={style.product}
                    key={product.id}
                  >
                    <DeleteForeverIcon
                      onClick={() => {
                        deleteProducts(product);
                      }}
                    />
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={150}
                      height={150}
                    ></Image>
                    <div>
                      <p>{product.title}</p>
                      <section>
                        <p>color</p>
                        <p>Width</p>
                        <p>Height</p>
                      </section>
                    </div>
                    <div className={style.counter}>
                      <section className={style.increase} onClick={()=>quantity(product,1)}>
                        +
                      </section>
                      <input
                        type="number"
                        min={0}
                        max={5}
                        
            
                      ></input>
                      <section className={style.decrease} onClick={()=>quantity(product,-1)}>-</section>
                    </div>
                    <p>{product.price} $</p>
                    <hr></hr>
                  </Box>
                ))}
            </div>
            {products.length > 0 && (
              <div className={style.total}>
                <p>Back to products</p>
                <p>
                  Total price:{" "}
                  {products.reduce(
                    (total: number, product: { price: number }) => {
                      return total + product.price;
                    },
                    0
                  )}{" "}
                  $
                </p>
                <Button variant="contained" color="success">
                  Order
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
