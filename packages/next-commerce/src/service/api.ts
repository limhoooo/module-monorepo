import axios from 'axios';

export type LoginParam = {
  id: string;
  password: string;
};

const baseURL = '';
const instance = axios.create({ baseURL });

export const userApi = {
  login: (param: LoginParam) => instance.post('/api/login', param),
  logout: () => instance.post('/api/logout'),
};
