import React, { useEffect, useState } from 'react';
import * as S from './style';
import Typography from '../styles/Typography';

type Props = {
  tabMenu: string[];
  activeTab: string;
};

export default function TabMenu({ tabMenu, activeTab }: Props) {
  const [active, setActive] = useState<string>();
  const clickTab = (item: string) => {
    window.location.hash = item;
    setActive(item);
  };

  useEffect(() => {
    const check = tabMenu.find(item => item === activeTab);
    setActive(check ? activeTab : tabMenu[0]);
  }, [activeTab]);

  return (
    <S.Wrapper role="tablist">
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
