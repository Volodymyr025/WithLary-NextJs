import { Dispatch, SetStateAction } from "react";
import style from "./Cart.module.css";
import CloseIcon from "@mui/icons-material/Close";

interface propsCart {
  showCart: boolean;
  setCart: Dispatch<SetStateAction<boolean>>;
}

const Cart = ({ showCart, setCart }: propsCart) => {
 
  return (
    <>
      {showCart && (
        <div className={style.bg} onClick={() => setCart(false)}>
          <div
            className={style.mainCart}
          >
            <div className={style.upper}>
              <h2>Cart</h2>
              <CloseIcon
                onClick={() => setCart(false)}
                style={{ cursor: "pointer" }}
              />
            </div>
            <hr style={{ width: "100%" }}></hr>
            <div className={style.lower}>
              <h2>Order Something</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
