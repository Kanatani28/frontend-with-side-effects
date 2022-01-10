import { User } from "./types";

export const users: User[] = [...Array(120)].map((_, i) => {
  const id = i + 1;
  const isAdmin = i % 3 === 0;

  return {
    id,
    email: `user${id}@example.com`,
    name: `User ${id}`,
    isAdmin,
    description: `This is User ${id}.`,
  };
});
