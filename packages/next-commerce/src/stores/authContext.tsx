import { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'universal-cookie';

export interface AuthProviderProps {
  user: { userName: string };
  isLogged: boolean;
  loginFnc: (userName: string) => void;
  logoutFnc: () => void;
}

// 이부분 질문
type Props = AuthProviderProps;

const initContext = {
  user: { userName: '' },
  isLogged: false,
  loginFnc: (userName: string) => {},
  logoutFnc: () => {},
};

const AuthContext = createContext<Props>(initContext);

export function AuthProvider({ children }: React.PropsWithChildren) {
  const [user, setUser] = useState(initContext.user);
  const [isLogged, setIsLogged] = useState(false);

  const loginFnc = (userName: string) => {
    setUser({ userName });
    setIsLogged(true);
  };

  const logoutFnc = () => {
    setUser(initContext.user);
    setIsLogged(false);
  };
  const checkLogged = () => {
    const cookies = new Cookies();
    const cookieValue = cookies.get('a_name');
    cookieValue && loginFnc(cookieValue);
  };
  useEffect(() => {
    checkLogged();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLogged, loginFnc, logoutFnc }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
