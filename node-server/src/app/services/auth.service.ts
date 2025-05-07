import jwt from 'jsonwebtoken';
import { createUser, findUserByEmail } from '../models/user.model';
import { sendWelcomeEmail } from '../../providers/mail.provider';
import bcrypt from 'bcrypt';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';


export const signup = async ({ name, email, password }: any) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser({ name, email, password: hashedPassword });
    await sendWelcomeEmail(user.email, user.name);
    return user;
  };
  
  export const login = async ({ email, password }: any) => {
    const user = await findUserByEmail(email);
    if (!user) throw new Error('User not found');
    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error('Invalid password');
  
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1d' });
    return { user, token };
};
  