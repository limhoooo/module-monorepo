import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isLoginAtom } from '../stores/login';
import Cookies from 'universal-cookie';

const useIsLogin = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);
  useEffect(() => {
    // 새로고침시 로그인 처리
    const cookies = new Cookies();
    const cookieValue = cookies.get('a_name');
    cookieValue && setIsLogin(true);
  }, []);
};

export default useIsLogin;
