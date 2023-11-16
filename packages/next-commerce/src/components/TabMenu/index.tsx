import React, { useEffect, useState } from 'react';
import * as S from './style';
import Typography from '../styles/Typography';

type Props = {
  tabMenu: string[];
};

export default function TabMenu({ tabMenu }: Props) {
  const [active, setActive] = useState<string>();
  const clickTab = (item: string) => {
    window.location.hash = `${item}`;
    setActive(item);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = decodeURI(window.location.hash.substr(1));
    setActive(hash || tabMenu[0]);
  }, []);

  return (
    <S.Wrapper>
      {tabMenu.map(item => (
        <S.TabMenuBox
          key={item}
          $active={item === active}
          onClick={() => clickTab(item)}
        >
          <Typography typo="text_s">{item}</Typography>
        </S.TabMenuBox>
      ))}
    </S.Wrapper>
  );
}
