export interface UserDto {
  username: string;
  email: string;
  authentication?: {
    password: string;
    salt?: string;
    sessionToken?: string;
  };
}
