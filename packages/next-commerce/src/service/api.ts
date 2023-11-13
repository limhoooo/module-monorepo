import axios from 'axios';

export type LoginParam = {
  id: string;
  password: string;
};
export type TypeResponseData = {
  status: number;
  message: string;
  name: string;
};
type TypeResponse = { status: number; data: TypeResponseData };
type UserApi = {
  login: (param: LoginParam) => Promise<TypeResponse>;
  logout: () => Promise<TypeResponse>;
};
const baseURL = '';
const instance = axios.create({ baseURL });

export const userApi: UserApi = {
  login: (param: LoginParam) => instance.post('/api/login', param),
  logout: () => instance.post('/api/logout'),
};
