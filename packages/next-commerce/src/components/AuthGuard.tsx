import { useEffect } from 'react';
import { useAuth } from '../stores/authContext';
import { useRouter } from 'next/router';

function AuthGuard({ children }: React.PropsWithChildren) {
  const { isLogged } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLogged) {
      router.push({
        pathname: '/login',
        query: { asPath: router.asPath },
      });
    }
  }, [isLogged]);

  return <>{children}</>;
}

export default AuthGuard;
