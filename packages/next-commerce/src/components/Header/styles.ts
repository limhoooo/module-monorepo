import styled from 'styled-components';
type PropsWrapper = {
  isMenu: boolean;
};
export const Wrapper = styled.header<PropsWrapper>`
  height: ${({ isMenu }) => isMenu && '100%'};
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 0 12px;
  background-color: #fff;
`;

export const Header = styled.div`
  width: 100%;
  height: 46px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  position: relative;
`;

export const Nav = styled.nav`
  display: flex;
`;
export const NavList = styled.span`
  border-radius: 50px;
`;
