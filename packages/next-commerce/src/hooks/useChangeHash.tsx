import { useEffect } from 'react';

export default function useChangeHash(handleEvent: any, dependency: any) {
  useEffect(() => {
    window.addEventListener('hashchange', handleEvent);
    return () => {
      window.removeEventListener('hashchange', handleEvent);
    };
  }, [dependency]);
}
