import mongoose from "mongoose";

import UserSchema from "../schemas/user.schema";

export const UserModel = mongoose.model("User", UserSchema);
