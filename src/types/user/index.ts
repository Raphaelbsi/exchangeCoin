export interface Users {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
  login: string;
}

export interface LoginBody {
  login: string;
  password: string;
}
