import style from "./Input.module.css";

interface btnType {
  disabled: boolean;
  type: "submit" | "reset" | "button" | undefined;
}

export const Btn = ({ disabled, type }: btnType) => {
  return (
    <button type={type} className={style.btn} disabled={disabled}>
      <div className={style.arrow}>
        <div className={style.arrow_top}></div>
        <div className={style.arrow_mid}></div>
        <div className={style.arrow_bot}></div>
      </div>
    </button>
  );
};
