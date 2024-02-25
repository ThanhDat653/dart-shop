import * as Yup from "yup";

// Schema cho form đăng nhập
export const loginSchema = Yup.object().shape({
   email: Yup.string()
      .email("Invalid email")
      .required("Please enter your email"),
   password: Yup.string().required("Please enter your password"),
});

// Schema cho form đăng ký
export const registerSchema = Yup.object().shape({
   name: Yup.string().required("Please enter your name"),
   email: Yup.string()
      .email("Invalid email")
      .required("Please enter your email"),
   password: Yup.string()
      .required("Please enter your password")
      .min(6, "Password must be at least 6 characters"),
   confirmPassword: Yup.string()
      .required("Please confirm your password")
      .oneOf([Yup.ref("password")], "Passwords do not match"),
});
