"use client";
import { Input } from "../../component/shered/Input";
import { Btn } from "../../component/shered/Btn";
import FormPage from "../../component/shered/Form";
import { validSchema } from "../../component/util/validation";
import { useFormik } from "formik";
import { errorBorder, errorMessage } from "../../component/util/error";
import Link from "next/link";
import { Box } from "@mui/system";

export interface userType {
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  password: string;
  confirm: string;
}

export const Login = () => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik<userType>({
      initialValues: {
        lastName: "",
        firstName: "",
        email: "",
        phone: "",
        password: "",
        confirm: "",
      },
      onSubmit: (values, actions) => {
        // console.log(values, actions);
      },
      validationSchema: validSchema,
    });
  const validBtn = errors.email && errors.password ? true : false;

  return (
    <>
      <FormPage submit={handleSubmit} title="Login">
        <>
          <Input
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            inputType={"email"}
            maxLength={50}
            name="email"
            styleInput={errors.email && touched.email ? errorBorder : undefined}
          >
            Email
          </Input>
          {errors.email && touched.email && (
            <p style={errorMessage}>{errors.email}</p>
          )}
          <Input
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            inputType={"password"}
            maxLength={16}
            name="password"
            styleInput={
              errors.password && touched.password ? errorBorder : undefined
            }
          >
            Password
          </Input>
          {errors.password && touched.password && (
            <p style={errorMessage}>{errors.password}</p>
          )}
          <Btn type="submit" disabled={validBtn} />
          <Box sx={{fontSize:20,margin:5}}>
            <Link href="/registration"> Registration </Link>
          </Box>
        </>
      </FormPage>
    </>
  );
};

export default Login;
