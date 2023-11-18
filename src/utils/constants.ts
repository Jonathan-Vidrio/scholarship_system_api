import { config } from 'dotenv';

config();

const PORT = process.env.PORT || 3000;

const SECRET = process.env.JWT_SECRET || "secret";

export {
    PORT,
    SECRET
}