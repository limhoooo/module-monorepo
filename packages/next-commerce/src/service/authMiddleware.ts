import { GetServerSidePropsContext } from 'next';
import Cookies from 'universal-cookie';

export function authMiddleware(context: GetServerSidePropsContext) {
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
