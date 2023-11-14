import { useEffect } from 'react';
import { useAuth } from '../stores/AuthContext';
import { useRouter } from 'next/router';

function AuthGuard({ children }: React.PropsWithChildren) {
  const router = useRouter();
  if (!router.isReady) return <>{children}</>;

  const { isLogged, isLoggedIn } = useAuth();
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
