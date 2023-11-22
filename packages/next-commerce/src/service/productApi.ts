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
type ProductApiParams = {
  cancelKey?: string;
};
type ProductApi = {
  getBanners: (params: ProductApiParams) => Promise<FetchResponse<TypeBanners>>;
  getAllProducts: (
    params: ProductApiParams,
  ) => Promise<FetchResponse<TypeProducts>>;
  getNewProducts: (
    params: ProductApiParams,
  ) => Promise<FetchResponse<TypeProducts>>;
  cancalBanners: (params: ProductApiParams) => any;
};
export const commerceApi = new Fetch();
commerceApi.setHeaders({
  'Content-Type': 'application/json; charset=utf-8',
});

commerceApi.setBaseUrl('http://localhost:3000/');

export const productApi: ProductApi = {
  getBanners: params =>
    commerceApi.get({ url: 'api/banners', cancelKey: params?.cancelKey }),
  cancalBanners: params => commerceApi.cancelApi(params?.cancelKey),
  getAllProducts: params =>
    commerceApi.get({ url: 'api/products', cancelKey: params?.cancelKey }),
  getNewProducts: params =>
    commerceApi.get({
      url: 'api/products/new-products',
      cancelKey: params?.cancelKey,
    }),
};
