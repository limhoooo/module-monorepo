import React, { useContext, useState } from 'react';
import Typography from '../components/styles/Typography';
import styled from 'styled-components';
import Button from '../components/styles/Button';
import { useRouter } from 'next/router';
import { userApi } from '../service/api';
import { useAuth } from '../stores/authContext';

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h4 {
    margin-bottom: 20px;
  }
`;

const LoginInner = styled.div`
  width: 650px;
  border: 1px solid #aaa;
  padding: 30px;
`;
const LoginHeader = styled.div``;
const LoginBody = styled.div`
  margin-top: 30px;

  input {
    width: 100%;
    height: 40px;
    margin-bottom: 40px;
    border: none;
    border-bottom: 1px solid #999;
    font-size: 16px;

    &:last-child {
      margin-bottom: 20px;
    }
  }
`;
const CheckBox = styled.div`
  margin: 20px 0;
`;

const Login = () => {
  const router = useRouter();
  const { loginFnc } = useAuth();
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const { asPath } = router.query;

  const submit = async () => {
    const param = { id, password };
    const { data } = await userApi.login(param);
    if (data.status === 200) {
      const userName: string = data.name;
      const redirectUrl = asPath ? asPath : '/home';
      loginFnc(userName);
      router.push(redirectUrl as string);
    } else {
      setIsCheck(true);
    }
  };
  return (
    <Wrapper>
      <LoginInner>
        <LoginHeader>
          <Typography typo={'heading4'}>Sign in </Typography>
          <Typography tag={'p'} typo={'text_s'} className="mt-2">
            Don't have an accout yet?{' '}
            <Typography tag={'span'} typo={'text_s'} weight={'bold'}>
              Sing up
            </Typography>
          </Typography>
        </LoginHeader>
        <LoginBody>
          <input
            type="text"
            placeholder="Username"
            onChange={e => setId(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </LoginBody>
        <CheckBox>
          {isCheck && (
            <Typography typo={'text_s'} color={'red'}>
              아이디 또는 비밀번호가 일치하지 않습니다.
            </Typography>
          )}
        </CheckBox>
        <Button radius={'rounded'} $full={true} size={'l'} onClick={submit}>
          Sign in
        </Button>
      </LoginInner>
    </Wrapper>
  );
};

export default Login;
