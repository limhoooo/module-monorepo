import Fetch, { FetchResponse } from '../utils/HttpClient';
export type LoginParam = {
  id: string;
  password: string;
};
export type TypeResponse = {
  message: string;
  name: string;
  statusCode: number;
};
type UserApi = {
  login: (param: LoginParam) => Promise<FetchResponse<TypeResponse>>;
  logout: () => Promise<FetchResponse<TypeResponse>>;
};
const commerceApi = new Fetch();
commerceApi.setHeaders({
  'Content-Type': 'application/json; charset=utf-8',
});
commerceApi.setBaseUrl('');

export const userApi: UserApi = {
  login: (payload: LoginParam) =>
    commerceApi.post({ url: '/api/login', payload }),
  logout: () => commerceApi.post({ url: '/api/logout' }),
};
