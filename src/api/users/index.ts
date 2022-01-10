import { Page, User } from "./types";
import { users } from "./_testData";

export const fetchUsers = async (): Promise<{
  users: Omit<User, "description">[];
  // page: Page;
}> => {
  return {
    users: users,
    // page: {},
  };
};

export const fetchUser = async (id: number) => {
  const user = users.find((user) => user.id === id);
  return user;
};
