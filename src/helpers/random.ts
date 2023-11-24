import crypto from "crypto";

export default () => {
  return crypto.randomBytes(128).toString("base64");
};
