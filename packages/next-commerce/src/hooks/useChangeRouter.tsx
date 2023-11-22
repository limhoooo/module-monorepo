import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function useChangeRouter(handleEvent: any) {
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeComplete', handleEvent);
    return () => {
      router.events.off('routeChangeComplete', handleEvent);
    };
  }, []);
}
