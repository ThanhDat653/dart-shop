import { loginService } from "../services/auth/login.js";
import { createUserService } from "../services/auth/register.js";

export const createUser = (req, res) => createUserService(req, res);
export const login = (req, res) => loginService(req, res);
