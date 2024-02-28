"use client";
import FormPage from "../../component/shered/Form";
import { Input } from "../../component/shered/Input";
import { Btn } from "../../component/shered/Btn";
import { validSchema } from "../../component/util/validation";
import { useFormik } from "formik";
import { errorBorder, errorMessage } from "../../component/util/error";
import submitHeandler from "./submitHeandler";
import { useRouter } from "next/navigation";
import { Box } from "@mui/system";
import Link from "next/link";

export interface userType {
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  password: string;
  confirm: string;
}

const Registration = () => {
  const router = useRouter();
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
      onSubmit: async (values) => {
        await submitHeandler(values);
        router.refresh();
        router.push("/");
      },
      validationSchema: validSchema,
    });

  const validBtn =
    errors.firstName &&
    errors.lastName &&
    errors.email &&
    errors.phone &&
    errors.password &&
    errors.confirm
      ? true
      : false;
  return (
    <>
      <FormPage submit={handleSubmit} title="Registration">
        <>
          <Input
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            inputType={"text"}
            maxLength={15}
            name="lastName"
            styleInput={
              errors.lastName && touched.lastName ? errorBorder : undefined
            }
          >
            Last Name
          </Input>
          {errors.lastName && touched.lastName && (
            <p style={errorMessage}>{errors.lastName}</p>
          )}
          <Input
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            inputType={"text"}
            maxLength={15}
            name="firstName"
            styleInput={
              errors.firstName && touched.firstName ? errorBorder : undefined
            }
          >
            First Name
          </Input>
          {errors.firstName && touched.firstName && (
            <p style={errorMessage}>{errors.firstName}</p>
          )}
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
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            inputType={"phone"}
            maxLength={10}
            name="phone"
            styleInput={errors.phone && touched.phone ? errorBorder : undefined}
          >
            Phone Number
          </Input>
          {errors.phone && touched.phone && (
            <p style={errorMessage}>{errors.phone}</p>
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
          <Input
            value={values.confirm}
            onChange={handleChange}
            onBlur={handleBlur}
            inputType={"password"}
            maxLength={16}
            name="confirm"
            styleInput={
              errors.confirm && touched.confirm ? errorBorder : undefined
            }
          >
            Confirm password
          </Input>
          {errors.confirm && touched.confirm && (
            <p style={errorMessage}>{errors.confirm}</p>
          )}
          <Btn type="submit" disabled={validBtn} />
          <Box sx={{ fontSize: 20, margin: 5 }}>
            <Link href="/login"> Login </Link>
          </Box>
        </>
      </FormPage>
    </>
  );
};

export default Registration;
