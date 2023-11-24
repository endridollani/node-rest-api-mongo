import { UserDto } from "dto/user.dto";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema<UserDto>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
});

export default UserSchema;
