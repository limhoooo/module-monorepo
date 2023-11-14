import React from 'react';
// import { authMiddleware } from '../service/authMiddleware';
import { NextPage } from 'next';
import AuthGuard from '../components/AuthGuard';
import { useAuth } from '../stores/AuthContext';

// export const getServerSideProps = (context: GetServerSidePropsContext) => {
//   return authMiddleware(context);
// };

/**
 * 1. 유저 유효성 검증이라는 공통 로직이 특정 컴포넌트에 종속 되어 있음.
 * 2. isLoggedIn 와 같은 UI 상태가 필요함. => 전역으로 필요
 */
const admin: NextPage = () => {
  const { user } = useAuth();
  return <h1>admin wellcome {user?.userName}</h1>;
};

admin.getLayout = function getLayout(page) {
  return <AuthGuard>{page}</AuthGuard>;
};

export default admin;
