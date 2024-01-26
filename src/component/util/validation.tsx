import * as yup from "yup";
import { ERROR_MESSAGE } from "./error";

const regSymbol = /[!@#$%^&*()]/;
const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

export const validSchema = yup.object().shape({
  lastName: yup.string().required(ERROR_MESSAGE.emptyField),
  firstName: yup.string().required(ERROR_MESSAGE.emptyField),
  email: yup
    .string()
    .email()
    .matches(regEmail, ERROR_MESSAGE.emailField)
    .required(ERROR_MESSAGE.emptyField),
  phone: yup
    .string()
    .matches(regPhone, ERROR_MESSAGE.phoneField)
    .required(ERROR_MESSAGE.emptyField),
  password: yup
    .string()
    .min(6)
    .max(16)
    .matches(regSymbol, ERROR_MESSAGE.passwordField)
    .required(ERROR_MESSAGE.emptyField),
  confirm: yup
    .string()
    .oneOf([yup.ref("password")], ERROR_MESSAGE.confirmField)
    .required(ERROR_MESSAGE.emptyField),
});
