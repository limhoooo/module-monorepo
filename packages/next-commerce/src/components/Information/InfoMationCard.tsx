import React from 'react';
import * as S from './styles';
import Typography from '../styles/Typography';

type InfoMation = {
  title: string;
  menu: string[];
};

type Props = {
  infoMation: InfoMation;
};
export default function InfoMationCard({ infoMation }: Props) {
  return (
    <S.InfoMationCard>
      <Typography tag="p" typo="text_s" weight="bold">
        {infoMation.title}
      </Typography>
      {infoMation.menu.map((item, index) => (
        <Typography key={index} tag="p" typo="text_s">
          {item}
        </Typography>
      ))}
    </S.InfoMationCard>
  );
}
