import crypto from "crypto";

export default ({ salt, password }: { salt: string; password: string }) => {
  return crypto
    .createHmac("sha256", [salt, password].join("/"))
    .update(process.env.AUTH_SECRET as string)
    .digest("hex");
};
