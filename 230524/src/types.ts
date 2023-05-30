export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
}

export type Category = {
  id: string;
  name: string;
  hidden?: boolean;
}
