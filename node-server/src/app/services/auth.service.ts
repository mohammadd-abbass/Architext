import jwt from "jsonwebtoken";
import { createUser, findOrCreateGitHubUser, findUserByEmail } from "../models/user.model.js";
import { sendWelcomeEmail } from "../../providers/mail.provider.js";
import bcrypt from "bcrypt";
import { createLog } from "./log.service.js";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export const signup = async ({ name, email, password }: any) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await createUser({ name, email, password: hashedPassword });
  sendWelcomeEmail(user.email, user.name);
  
  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { 
      expiresIn: '1d' 
  });

  return { user, token }; 
};

export const login = async ({ email, password }: any) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error("User not found");
  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("Invalid password");

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "1d",
  });

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    },
    token,
  };
};

export const githubAuth = async (profile: any) => {
  const user = await findOrCreateGitHubUser(profile); 
  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: '1d'
  });
  return { user, token };
};
