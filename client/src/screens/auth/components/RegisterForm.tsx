import React, { useState } from "react";

enum AuthState {
   LOGIN = "login",
   REGISTER = "register",
}
const RegisterForm = () => {
   const [isLogin, setIsLogin] = useState(AuthState.LOGIN);
   let [user, setUser] = useState({
      username: "",
      email: "",
      password: "",
      phoneNumber: "",
   });

   const handleOnchangeValue = (event: any) => {
      setUser({ ...user, [event.target.name]: event.target.value });
   };

   const handleSubmit = async () => {
      console.log(JSON.stringify(user));
      await fetch("http://localhost:8000/api/v1/users/register", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      })
         .then((response) => {
            console.log("status: ", response.status);
            console.log("message: ", response.json);
         })
         .catch((error) => {
            console.error("Lỗi:", error);
         });
   };

   const handleOnChangeFormState = () => {
      if (isLogin === AuthState.LOGIN) setIsLogin(AuthState.REGISTER);
      else setIsLogin(AuthState.LOGIN);
   };

   return (
      <div className="min-h-screen flex items-center justify-center z-50">
         <div className="bg-white p-8 rounded shadow-md w-96">
            <h1 className="text-2xl font-semibold mb-6 uppercase">{isLogin}</h1>

            <form onSubmit={(e) => e.preventDefault()}>
               {isLogin === AuthState.REGISTER && (
                  <div className="mb-4">
                     <label
                        htmlFor="username"
                        className="block text-gray-600 text-sm"
                     >
                        Tên đăng nhập
                     </label>
                     <input
                        onChange={(e) => handleOnchangeValue(e)}
                        type="text"
                        value={user.username}
                        id="username"
                        name="username"
                        className="mt-1 p-2 w-full border rounded"
                     />
                  </div>
               )}

               <div className="mb-4">
                  <label
                     htmlFor="email"
                     className="block text-gray-600 text-sm"
                  >
                     Email
                  </label>
                  <input
                     onChange={(e) => handleOnchangeValue(e)}
                     type="email"
                     value={user.email}
                     id="email"
                     name="email"
                     className="mt-1 p-2 w-full border rounded"
                  />
               </div>

               {isLogin === AuthState.REGISTER && (
                  <div className="mb-4">
                     <label
                        htmlFor="phoneNumber"
                        className="block text-gray-600 text-sm"
                     >
                        Phone Number
                     </label>
                     <input
                        onChange={(e) => handleOnchangeValue(e)}
                        type="number"
                        value={user.phoneNumber}
                        id="phoneNumber"
                        name="phoneNumber"
                        className="mt-1 p-2 w-full border rounded"
                     />
                  </div>
               )}
               <div className="mb-6">
                  <label
                     htmlFor="password"
                     className="block text-gray-600 text-sm"
                  >
                     Mật khẩu
                  </label>
                  <input
                     onChange={(e) => handleOnchangeValue(e)}
                     type="password"
                     value={user.password}
                     id="password"
                     name="password"
                     className="mt-1 p-2 w-full border rounded"
                  />
               </div>

               <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded w-full capitalize"
                  onClick={handleSubmit}
               >
                  {isLogin}
               </button>
               <div
                  className="w-full flex justify-center mt-3 cursor-pointer"
                  onClick={() => handleOnChangeFormState()}
               >
                  <p className="text-blue-500">
                     {isLogin === AuthState.LOGIN ? "Sign up" : "Login"}
                  </p>
               </div>
            </form>
         </div>
      </div>
   );
};

export default RegisterForm;
