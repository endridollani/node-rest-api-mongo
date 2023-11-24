import { UserModel } from "models/user.model";

/**
 * @description Gets all users
 * @param none
 * @returns user[]
 */
export const getUsers = () => UserModel.find();

/**
 * @description Gets single user by Id
 * @param id
 * @returns user
 */
export const getUserById = ({ id }: { id: string }) => UserModel.findById(id);

/**
 * @description Gets single users by email
 * @param email
 * @returns user
 */
export const getUserByEmail = ({ email }: { email: string }) =>
  UserModel.findOne({ email });

/**
 * @description Gets single users by session token
 * @param sessionToken
 * @returns user
 */
export const getUserBySessionToken = ({
  sessionToken,
}: {
  sessionToken: string;
}) => UserModel.findOne({ "authentication.sessionToken": sessionToken });
