import styled from 'styled-components';
type PropsWrapper = {
  $width: string;
  $height: string;
};
export const Wrapper = styled.div<PropsWrapper>`
  width: ${({ $width }) => ($width ? `${$width}` : '250px')};
  height: ${({ $height }) => ($height ? `${$height}` : '220px')};
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: 20px;
`;

export const ButtonBox = styled.div`
  position: absolute;
  bottom: 40px;
`;
