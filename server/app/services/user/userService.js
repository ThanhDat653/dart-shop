import { User } from "../../models/index";

const NotFoundException = require("../exception/NotFoundException");
const BadRequestException = require("../exception/BadRequestException");

const userService = {
   create: ({ username, email, hashedPassword, userId, phoneNumber, roleID }) =>
      new Promise(async (resolve, reject) => {
         try {
            const user = await User.findOne({ where: { email } });
            if (user)
               throw new BadRequestException(`Email ${email} already exists`);

            const data = await user.create(
               {
                  fullName,
                  email,
                  phoneNumber,
               },
            );

            resolve(data);
         } catch (error) {
            reject(error);
         }
      }),
};
