import { hash, compare } from "bcrypt";

const encrypt = async (password: string) => {
    const encryptedPassword = await hash(password, 10);
    return encryptedPassword;
}

const verify = async (password: string, encryptedPassword: string) => {
    const isVerified = await compare(password, encryptedPassword);
    return isVerified;
}

export {
    encrypt,
    verify
}