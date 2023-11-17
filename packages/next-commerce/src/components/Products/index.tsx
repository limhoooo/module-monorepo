import React, { useEffect, useState } from 'react';
import * as S from './styles';
import TabMenu from '../TabMenu';
import { TypeProducts } from '@/src/service/productApi';
import ProductCard from '../ProductCard';

type Props = {
  allProducts: TypeProducts[];
};

const tabMenu = ['All', 'Best Sellers', 'New Arrivals', 'Sale'];

export default function Products({ allProducts }: Props) {
  const [activeTab, setActiveTab] = useState<string>(tabMenu[0]);
  const handleHashChange = () => {
    if (typeof window === 'undefined') return;
    const hash = decodeURI(window.location.hash.substr(1));
    setActiveTab(hash || tabMenu[0]);
  };
  const productsList = allProducts.filter(item => {
    return activeTab === 'Best Sellers'
      ? item.best
      : activeTab === 'New Arrivals'
      ? item.new
      : activeTab === 'Sale'
      ? item.sale
      : item;
  });

  useEffect(() => {
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  return (
    <S.Wrapper>
      <S.TitleBox>
        <TabMenu tabMenu={tabMenu} activeTab={activeTab} />
      </S.TitleBox>
      <S.TabBox>
        {productsList &&
          productsList.map(item => (
            <ProductCard
              $width="160px"
              $height="180px"
              key={item.id}
              product={item}
              isInfo
            />
          ))}
      </S.TabBox>
    </S.Wrapper>
  );
}
