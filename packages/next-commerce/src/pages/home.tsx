import React from 'react';
import Typography from '../components/styles/Typography';
import Button from '../components/styles/Button';
import Icon from '../components/styles/Icon';
import Checkbox from '../components/styles/Checkbox';
const home = () => {
  const clickTest = () => {
    console.log('clickTest');
  };
  const onChange = (checked: {
    name: string | undefined;
    checked: boolean;
  }) => {
    console.log(checked);
  };
  return (
    <div>
      <Typography tag={'h1'} typo={'heading1'} type={'italic'}>
        Typography
      </Typography>
      <Typography tag={'h2'} typo={'heading2'} type={'italic'}>
        Typography
      </Typography>
      <Typography typo={'text_xxl'}>Typography</Typography>
      <Typography tag={'p'} typo={'text_s'}>
        Typography
      </Typography>
    </div>
  );
};

export default home;
