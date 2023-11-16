import React from 'react';
import Banner from '../components/Banner';
import Arrivals from '../components/Arrivals';
import { TypeBanners, TypeProducts, productApi } from '../service/productApi';

type Props = {
  banners: TypeBanners[];
  newProducts: TypeProducts[];
};

export default function index({ banners, newProducts }: Props) {
  return (
    <section>
      <Banner banners={banners} />
      <Arrivals newProducts={newProducts} />
    </section>
  );
}

export async function getServerSideProps() {
  const { response: banners } = await productApi.getBanners();
  const { response: newProducts } = await productApi.getNewProducts();
  return {
    props: {
      banners,
      newProducts,
    },
  };
}
