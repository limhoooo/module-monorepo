import Fetch, { FetchResponse } from '../utils/HttpClient';

export type TypeBanners = {
  id: string;
  name: string;
  alt: string;
};
export type TypeProducts = {
  id: string;
  title: string;
  imagePath: string;
  alt: string;
  new: boolean;
};
type ProductApi = {
  getBanners: () => Promise<FetchResponse<TypeBanners>>;
  getNewProducts: () => Promise<FetchResponse<TypeProducts>>;
};
const commerceApi = new Fetch();
commerceApi.setHeaders({
  'Content-Type': 'application/json; charset=utf-8',
});
commerceApi.setBaseUrl('http://localhost:3000/');

export const productApi: ProductApi = {
  getBanners: () => commerceApi.get({ url: '/api/banners' }),
  getNewProducts: () => commerceApi.get({ url: '/api/products/new-products' }),
};
