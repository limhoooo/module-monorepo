import React from 'react';
import Icon from '../styles/Icon';

type Props = {
  grade: number;
};

export default function StarGrade({ grade }: Props) {
  const starOnLenght = grade;
  const starOffLenght = 5 - grade;

  return (
    <span>
      {[...Array(starOnLenght)].map((item, index) => (
        <Icon key={index} icon="star_on" size="s" />
      ))}
      {[...Array(starOffLenght)].map((item, index) => (
        <Icon key={index} icon="star_off" size="s" />
      ))}
    </span>
  );
}
