import React, { useEffect, useRef } from 'react';
import * as S from './styles';
import Header from './Header';

type Props = {
  isBottomSheet: boolean;
  changeIsBottomSheet: Function;
  children: React.ReactNode;
};

export default function BottomSheet({
  isBottomSheet,
  changeIsBottomSheet,
  children,
}: Props) {
  const sheet = useRef<HTMLDivElement>(null);
  let startY = 0;
  const handleTouchStart = (e: TouchEvent) => {
    startY = e.touches[0].clientY;
    documentScroll('hidden');
  };
  const handleTouchEnd = (e: TouchEvent) => {
    if (startY < e.changedTouches[0].clientY) {
      changeIsBottomSheet(false);
      history.pushState(
        '',
        window.document.title,
        window.location.pathname + window.location.search,
      );
    }
    documentScroll('auto');
  };
  const documentScroll = (value: string) => {
    document.body.style.overflow = value;
  };
  return (
    <S.Wrapper
      ref={sheet}
      isBottomSheet={isBottomSheet}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Header />
      {children}
    </S.Wrapper>
  );
}
