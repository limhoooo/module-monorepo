import { useEffect } from 'react';
import { useAuth } from '../stores/authContext';
import { useRouter } from 'next/router';

function AuthGuard({ children }: React.PropsWithChildren) {
  if (typeof window === 'undefined') return <>{children}</>;
  const { isLogged, isLoggedIn } = useAuth();
  const router = useRouter();
  useEffect(() => {
    const isLogin = isLoggedIn();
    if (!isLogin) {
      router.push({
        pathname: '/login',
        query: { asPath: router.asPath },
      });
    }
  }, [isLogged]);

  return <>{children}</>;
}

export default AuthGuard;
