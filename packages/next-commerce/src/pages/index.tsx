import React from 'react';
import Banner from '../components/Banner';
import Arrivals from '../components/Arrivals';
import { TypeBanners, productApi } from '../service/productApi';

type Props = {
  banners: TypeBanners[];
};

export default function index({ banners }: Props) {
  return (
    <section>
      <Banner banners={banners} />
      <Arrivals />
    </section>
  );
}

export async function getServerSideProps() {
  const { response: banners } = await productApi.getBanners();
  return {
    props: {
      banners,
    },
  };
}
