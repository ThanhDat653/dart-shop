import { connection } from "../../database/db.js";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

const saltRounds = 10; // Số lượng rounds để tăng độ khó của quá trình hash

// Hàm để hash mật khẩu
const hashPassword = async (password) => {
   try {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      return hashedPassword;
   } catch (error) {
      throw error;
   }
};

export const isValidEmail = (email) => {
   const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
   return emailRegex.test(email);
};

export const isValidPassword = (password, minLength) => {
   return password.length >= minLength;
};

export const isValidPhoneNumber = (phoneNumber) => {
   const phoneNumberRegex =
      /^((\+84)|0)(3[2-9]|5[689]|7[06-9]|8[1-9]|9[0-9])\d{7}$/;
   return phoneNumberRegex.test(phoneNumber);
};

export const checkExistanceUser = async (email) => {
   try {
      let [results, fields] = await connection.query(
         "SELECT * FROM User WHERE Email=?",
         [email]
      );

      return results.length !== 0;
   } catch (error) {
      throw error;
   }
};

const registerValidate = async (req) => {
   const { username, email, password, phoneNumber } = req.body;
   const minLength = 6;

   if (!username || !email || !password || !phoneNumber) {
      return { error: "Vui lòng điền đầy đủ thông tin người dùng." };
   }

   if (!isValidEmail(email)) {
      return { error: `Email không đúng định dạng.` };
   }

   if (!isValidPhoneNumber(phoneNumber)) {
      return { error: "Số điện thoại không hợp lệ." };
   }

   if (!isValidPassword(password, minLength)) {
      return { error: `Mật khẩu tối thiểu ${minLength} kí tự` };
   }

   try {
      const userExists = await checkExistanceUser(email);

      if (userExists) {
         return { error: "Email đã được đăng ký." };
      }

      return null;
   } catch (error) {
      throw error;
   }
};

const createUserInDatabase = async (
   username,
   email,
   hashedPassword,
   userId,
   phoneNumber
) => {
   try {
      const [results, fields] = await connection.query(
         "INSERT INTO User (FullName, Email, Password, UserID, PhoneNumber, RoleID) VALUES (?, ?, ?, ?, ?, ?)",
         [username, email, hashedPassword, userId, phoneNumber, 2]
      );
   } catch (error) {
      throw error;
   }
};

export const createUserService = async (req, res) => {
   try {
      const validationError = await registerValidate(req);

      if (validationError) {
         return res.status(400).json(validationError);
      }

      const { username, email, password, phoneNumber } = req.body;
      const userId = uuidv4();
      const hashedPassword = await hashPassword(password);

      createUserInDatabase(
         username,
         email,
         hashedPassword,
         userId,
         phoneNumber,
         2
      );

      res.status(201).json({
         message: "Người dùng đã được tạo mới thành công.",
      });
   } catch (error) {
      res.status(500).json({
         error: "Đã xảy ra lỗi trong quá trình tạo người dùng." + error,
      });
   }
};
