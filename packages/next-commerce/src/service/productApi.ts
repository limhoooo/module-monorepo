import Fetch, { FetchResponse } from '../utils/HttpClient';

export type TypeBanners = {
  id: string;
  name: string;
  alt: string;
};
export type TypeProducts = {
  id: string;
  title: string;
  price: string;
  imagePath: string;
  alt: string;
  grade: number;
  new: boolean;
  best: boolean;
  sale: boolean;
};
type ProductApi = {
  getBanners: () => Promise<FetchResponse<TypeBanners>>;
  getAllProducts: () => Promise<FetchResponse<TypeProducts>>;
  getNewProducts: () => Promise<FetchResponse<TypeProducts>>;
};
const commerceApi = new Fetch();
commerceApi.setHeaders({
  'Content-Type': 'application/json; charset=utf-8',
});
commerceApi.setBaseUrl('http://localhost:3000/');

export const productApi: ProductApi = {
  getBanners: () => commerceApi.get({ url: '/api/banners' }),
  getAllProducts: () => commerceApi.get({ url: '/api/products' }),
  getNewProducts: () => commerceApi.get({ url: '/api/products/new-products' }),
};
