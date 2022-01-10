export type User = {
  id: number;
  email: string;
  name: string;
  isAdmin: boolean;
  description: string;
};

export type Page = {
  number: number;
  current: number;
  totalCount: number;
  countPerPage: number;
};
