import Fetch, { FetchResponse } from '../utils/HttpClient';

export type TypeBanners = {
  id: string;
  name: string;
  alt: string;
};
type ProductApi = {
  getBanners: () => Promise<FetchResponse<TypeBanners>>;
};
const commerceApi = new Fetch();
commerceApi.setHeaders({
  'Content-Type': 'application/json; charset=utf-8',
});
commerceApi.setBaseUrl('http://localhost:3000/');

export const productApi: ProductApi = {
  getBanners: () => commerceApi.get({ url: '/api/banners' }),
};
