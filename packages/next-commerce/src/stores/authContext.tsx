import { createContext, useReducer, useContext } from 'react';
import Cookies from 'universal-cookie';
import { LoginParam, TypeResponse, userApi } from '../service/userApi';

export interface AuthContextState {
  user: { userName: string } | null;
  isLogged: boolean;
}

type AuthContextValue = {
  login: (param: LoginParam) => Promise<TypeResponse>;
  logout: () => Promise<TypeResponse>;
  isLoggedIn: () => boolean;
  initialized: () => void;
};
type AuthContext = AuthContextState & AuthContextValue;

enum ActionType {
  login = 'LOGIN',
  logout = 'LOGOUT',
  isLoggedIn = 'ISLOGGEDIN',
  initialized = 'INITIALZED',
  register = 'REGISTER',
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
type initialized = {
  type: ActionType.initialized;
};

type AuthAction = LoginAction | LogoutAction | IsLoggedInAction | initialized;

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
    case ActionType.initialized:
      return { ...initContext };
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
    Promise.resolve({ statusCode: 200, message: '', name: param.id }),
  logout: () => Promise.resolve({ statusCode: 200, message: '', name: '' }),
  initialized: () => {},
  isLoggedIn: () => false,
};
const initContext = { ...initContextState, ...initContextValue };

const AuthContext = createContext<AuthContext>(initContext);

export function AuthProvider({ children }: React.PropsWithChildren) {
  const [authState, dispatch] = useReducer(authReducer, initContext);
  const cookies = new Cookies();

  const login = async (param: LoginParam) => {
    const { response } = await userApi.login(param);

    if (response?.statusCode === 200) {
      dispatch({
        type: ActionType.login,
        payload: { userName: response.name },
      });
      cookies.set('a_name', response.name, { maxAge: 360 });
    }
    return response;
  };

  const logout = async () => {
    const { response } = await userApi.logout();
    if (response?.statusCode === 200) {
      dispatch({ type: ActionType.logout });
      dispatch({ type: ActionType.initialized });
      cookies.remove('a_name');
    }
    return response;
  };

  const isLoggedIn = () => {
    const cookieValue = cookies.get('a_name');
    if (cookieValue)
      dispatch({ type: ActionType.login, payload: { userName: cookieValue } });
    return Boolean(cookieValue);
  };

  const initialized = () => {
    dispatch({ type: ActionType.initialized });
  };

  return (
    <AuthContext.Provider
      value={{ ...authState, login, logout, isLoggedIn, initialized }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
