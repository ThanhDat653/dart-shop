import { connection } from "../../database/db.js";
import { checkExistanceUser, isValidEmail } from "./register.js";
import { compare } from "bcrypt";

const loginValidate = async (req) => {
   const { email, password } = req.body;

   if (!email || !password) {
      return { error: "Vui lòng điền đầy đủ thông tin người dùng." };
   }

   if (!isValidEmail(email)) {
      return { error: `Email không đúng định dạng.` };
   }
};

export const loginService = async (req, res) => {
   const validationError = await loginValidate(req);

   if (validationError) {
      return res.status(400).json(validationError);
   }

   try {
      const { email, password } = req.body;
      const [results, fields] = await connection.query(
         "SELECT * FROM User WHERE Email = ? AND Password IS NOT NULL",
         [email]
      );

      if (results.length === 0) {
         return { error: "Email hoặc mật khẩu không chính xác." };
      }
      console.log(">>> User password: ", results[0].password);

      // Thực hiện chức năng đăng nhập

      res.status(201).json({
         message: "Đăng nhập thành công.",
      });
   } catch (err) {
      res.status(500).json({
         error: "Đã xảy ra lỗi trong quá trình đăng nhập.",
      });
   }
};
