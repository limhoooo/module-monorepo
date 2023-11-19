import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Image from 'next/image';
import Typography from '../styles/Typography';
import BottomSheet from '../BottomSheet';
import InfoMationCard from './InfoMationCard';

const infoMenuList = ['Shop', 'Information', 'Company'];
const infoMationSection = [
  { title: 'Shop', menu: ['My account', 'Login', 'Wishlist', 'Cart'] },
  {
    title: 'Information',
    menu: [
      'Shipping Policy',
      'Returns & Refunds',
      'Cookies Policy',
      'Frequently asked',
    ],
  },
  {
    title: 'Company',
    menu: ['About us', 'Privacy Policy', 'Terms & Conditions', 'Contact Us'],
  },
];
export default function Information() {
  const [isBottomSheet, setIsBottomSheet] = useState(false);
  const [activeBottomSheet, setActiveBottomSheet] = useState('Shop');
  const showBottomSheet = (item: string) => {
    window.location.hash = 'bottomsheet';
    changeIsBottomSheet(true);
    setActiveBottomSheet(item);
  };
  const changeIsBottomSheet = (flag: boolean) => {
    setIsBottomSheet(flag);
  };
  const infoMation = infoMationSection.filter(
    item => item.title === activeBottomSheet,
  );
  const checkHash = () => {
    if (window.location.hash !== '#bottomsheet') changeIsBottomSheet(false);
  };
  useEffect(() => {
    window.addEventListener('hashchange', checkHash);
    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  }, []);
  return (
    <S.Wrapper>
      <Image
        src={'/images/logo.png'}
        alt="logo image"
        width={105}
        height={18}
      />
      <S.Div>
        <Typography tag="p" typo="text_s">
          Phosf Iuorescently engage worldwide method process shopping.
        </Typography>
      </S.Div>
      <S.InformationBox>
        {infoMenuList.map(item => (
          <S.Information key={item} onClick={() => showBottomSheet(item)}>
            <Typography tag="p" typo="text_s">
              {item}
            </Typography>
          </S.Information>
        ))}
        <S.InformationFooter>
          <Typography tag="p" typo="text_xs">
            &#169; 2023 Limhoooo Commerce
          </Typography>
        </S.InformationFooter>
      </S.InformationBox>

      <BottomSheet
        isBottomSheet={isBottomSheet}
        changeIsBottomSheet={changeIsBottomSheet}
      >
        <InfoMationCard infoMation={infoMation[0]} />
      </BottomSheet>
    </S.Wrapper>
  );
}
