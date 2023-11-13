import { createContext, useReducer, useContext } from 'react';
import Cookies from 'universal-cookie';
import { LoginParam, TypeResponseData, userApi } from '../service/api';

export interface AuthContextState {
  user: { userName: string } | null;
  isLogged: boolean;
}

type AuthContextValue = {
  login: (param: LoginParam) => Promise<TypeResponseData>;
  logout: () => Promise<TypeResponseData>;
  isLoggedIn: () => boolean;
};
type AuthContext = AuthContextState & AuthContextValue;

enum ActionType {
  login = 'LOGIN',
  logout = 'LOGOUT',
  isLoggedIn = 'ISLOGGEDIN',
  register = 'register',
}

type LoginAction = {
  type: ActionType.login;
  payload: {
    userName: string;
  };
};
type LogoutAction = {
  type: ActionType.logout;
};
type IsLoggedInAction = {
  type: ActionType.isLoggedIn;
  payload: {
    isLogged: boolean;
  };
};
type AuthAction = LoginAction | LogoutAction | IsLoggedInAction;

const authReducer = (
  state: AuthContextState,
  action: AuthAction,
): AuthContextState => {
  switch (action.type) {
    case ActionType.login:
      return { user: { userName: action.payload.userName }, isLogged: true };
    case ActionType.logout:
      return { user: null, isLogged: false };
    case ActionType.isLoggedIn:
      return { ...state, isLogged: action.payload.isLogged };
    default:
      return state;
  }
};

const initContextState: AuthContextState = {
  user: null,
  isLogged: false,
};
const initContextValue: AuthContextValue = {
  login: (param: LoginParam) =>
    Promise.resolve({ status: 200, message: '', name: param.id }),
  logout: () => Promise.resolve({ status: 200, message: '', name: '' }),
  isLoggedIn: () => false,
};
const initContext = { ...initContextState, ...initContextValue };

const AuthContext = createContext<AuthContext>(initContext);

export function AuthProvider({ children }: React.PropsWithChildren) {
  const [authState, dispatch] = useReducer(authReducer, initContext);
  const cookies = new Cookies();

  const login = async (param: LoginParam) => {
    const { data } = await userApi.login(param);
    if (data.status === 200) {
      dispatch({ type: ActionType.login, payload: { userName: data.name } });
      cookies.set('a_name', data.name, { maxAge: 360 });
    }
    return data;
  };

  const logout = async () => {
    const { data } = await userApi.logout();
    if (data.status === 200) {
      dispatch({ type: ActionType.logout });
      cookies.remove('a_name');
    }
    return data;
  };

  const isLoggedIn = () => {
    const cookieValue = cookies.get('a_name');
    if (cookieValue)
      dispatch({ type: ActionType.login, payload: { userName: cookieValue } });
    return cookieValue ? true : false;
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
