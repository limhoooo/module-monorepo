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
      <Checkbox
        size={'l'}
        name={'test1'}
        onChange={onChange}
        label={'클릭해주세요'}
      />
      <Checkbox
        size={'m'}
        name={'test2'}
        onChange={onChange}
        label={'클릭해주세요'}
      />
      home
      <Button size={'xl'} onClick={clickTest}>
        Xlarge
        <Icon size={'l'} icon={'arrow-right'} color={'white'} />
      </Button>
      <Typography typo={'heading_1'} type={'italic'}>
        Typography
      </Typography>
      <Typography typo={'heading_2'} color={'green'}>
        Typography
      </Typography>
      <Button size={'l'}>Large</Button>
      <Button size={'m'}>Medium</Button>
      <Button size={'s'}>Small</Button>
      <Button size={'xs'}>Xsmall</Button>
      <br />
      <Button size={'xl'} bgcolor={'white'}>
        Xlarge
      </Button>
      <Button size={'l'} bgcolor={'white'}>
        Large
      </Button>
      <Button size={'m'} bgcolor={'white'}>
        Medium
      </Button>
      <Button size={'s'} bgcolor={'white'}>
        Small
      </Button>
      <Button size={'xs'} bgcolor={'white'}>
        <Icon size={'xs'} icon={'arrow-right'} />
        Xsmall
      </Button>
      <br />
      <Icon size={'xl'} icon={'plus'} />
      <Icon size={'s'} icon={'plus'} />
      <Icon size={'xl'} icon={'arrow-down'} />
      <Icon size={'xl'} icon={'check'} />
    </div>
  );
};

export default home;
