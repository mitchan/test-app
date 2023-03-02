import bcrypt from "bcrypt";

export const hashPassword = (password: string, salt = 10) =>
  bcrypt.hash(password, salt);
