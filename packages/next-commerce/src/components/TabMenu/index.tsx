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
    window.location.hash = `${item}`;
    setActive(item);
  };

  useEffect(() => {
    setActive(activeTab);
  }, [activeTab]);

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
