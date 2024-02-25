import React, { useState } from "react";

const LoginForm = () => {
   let [user, setUser] = useState({
      email: "",
      password: "",
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

   return (
      <div className="min-h-screen flex items-center justify-center">
         <div className="bg-white p-8 rounded shadow-md w-96">
            <h1 className="text-2xl font-semibold mb-6">Đăng nhập</h1>

            <form onSubmit={(e) => e.preventDefault()}>
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
                  className="bg-blue-500 text-white p-2 rounded w-full"
                  onClick={handleSubmit}
               >
                  Đăng nhập
               </button>
            </form>
         </div>
      </div>
   );
};

export default LoginForm;
