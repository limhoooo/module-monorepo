import { GetServerSidePropsContext } from 'next';
import React from 'react';
import Cookies from 'universal-cookie';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookies = new Cookies(context.req.headers.cookie);
  const loginName = cookies.get('a_name');

  if (!loginName) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      loginName,
    },
  };
}

const admin = ({ loginName }: { loginName: string }) => {
  return <h1>admin wellcome {loginName}</h1>;
};

export default admin;
