import React from 'react';
import Typography from '../components/styles/Typography';
import Button from '../components/styles/Button';

const home = () => {
  return (
    <div>
      <Typography tag={'h1'} typo={'heading1'}>
        Typography
      </Typography>
      <Typography tag={'h2'} typo={'heading2'}>
        Typography
      </Typography>
      <Typography typo={'text_xxl'}>Typography</Typography>
      <Typography tag={'p'} typo={'text_s'}>
        Typograp45hy
      </Typography>
      <Button $full={true} size={'xl'} radius={'rounded'}>
        button
      </Button>
      <Button
        className="mt-1"
        $full={true}
        size={'s'}
        radius={'rounded'}
        bgcolor={'primary'}
      >
        button
      </Button>
    </div>
  );
};

export default home;
