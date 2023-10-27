import { GetServerSidePropsContext } from 'next';
import React from 'react';
import { authMiddleware } from '../service/authMiddleware';
import { useRecoilState } from 'recoil';
import { userStateAtom } from '../stores/login';

// export const getServerSideProps = (context: GetServerSidePropsContext) => {
//   return authMiddleware(context);
// };

/**
 * 1. 유저 유효성 검증이라는 공통 로직이 특정 컴포넌트에 종속 되어 있음.
 * 2. isLoggedIn 와 같은 UI 상태가 필요함. => 전역으로 필요
 */
const admin = () => {
  const [userState, setUserState] = useRecoilState(userStateAtom);
  return <h1>admin wellcome {userState.name}</h1>;
};

export default admin;
