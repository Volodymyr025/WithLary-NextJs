import style from "./Form.module.css";
import { FormEventHandler } from "react";

export interface child {
  children: JSX.Element;
  title: string;
  submit: FormEventHandler<HTMLFormElement>;
}

const FormPage = ({ children, title, submit }: child) => {
  return (
    <div className={style.bg_page}>
      <h1 className="logoLary">WithLary</h1>
      <h2>{title}</h2>
      <form onSubmit={submit}>{children}</form>
    </div>
  );
};

export default FormPage;
