import { atom } from 'recoil';

export const isLoginAtom = atom({
  key: `isLogin${new Date()}`,
  default: false,
});

export const userStateAtom = atom({
  key: `userState${new Date()}`,
  default: { name: '' },
});
