import React from 'react';
import Banner from '../components/Banner';
import Arrivals from '../components/Arrivals';
import { TypeBanners, TypeProducts, productApi } from '../service/productApi';
import Products from '../components/Products';
import EventSection from '../components/EventSection';
import Information from '../components/Information';

type Props = {
  banners: TypeBanners[];
  newProducts: TypeProducts[];
  allProducts: TypeProducts[];
};

export default function index({ banners, newProducts, allProducts }: Props) {
  return (
    <section>
      <Banner banners={banners} />
      <Arrivals newProducts={newProducts} />
      <EventSection />
      <Products allProducts={allProducts} />
      <Information />
    </section>
  );
}

export async function getServerSideProps() {
  const { response: banners } = await productApi.getBanners();
  const { response: allProducts } = await productApi.getAllProducts();
  const { response: newProducts } = await productApi.getNewProducts();

  return {
    props: {
      banners,
      allProducts,
      newProducts,
    },
  };
}
